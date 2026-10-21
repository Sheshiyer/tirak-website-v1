import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const payload = { kind: 'contact' as const, name: ' Visitor ', email: 'VISITOR@example.invalid', subject: ' Help ', message: ' Hello\r\nworld ' };
const id = '123e4567-e89b-12d3-a456-426614174000';
let stored: Map<string, string>;
beforeEach(() => {
  vi.resetModules();
  vi.stubEnv('VITE_CORE_API_URL', 'https://qa.example/api/');
  stored = new Map();
  vi.stubGlobal('sessionStorage', { getItem: (k: string) => stored.get(k) ?? null, setItem: (k: string, v: string) => stored.set(k, v) });
});
afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs(); vi.restoreAllMocks(); });
const accepted = () => new Response(JSON.stringify({ success: true, data: { requestId: id, status: 'received' } }), { status: 201 });

describe('durable support intake transport', () => {
  it('posts normalized data to the configured Core endpoint and accepts a real receipt', async () => {
    const send = vi.fn().mockResolvedValue(accepted()); vi.stubGlobal('fetch', send);
    const { submitSupportRequest } = await import('../lib/support-intake');
    expect(await submitSupportRequest(payload)).toEqual({ requestId: id, status: 'received' });
    expect(send.mock.calls[0][0]).toBe('https://qa.example/api/support-requests');
    const options = send.mock.calls[0][1];
    expect(JSON.parse(options.body)).toEqual({ kind: 'contact', name: 'Visitor', email: 'visitor@example.invalid', subject: 'Help', message: 'Hello\nworld' });
    expect(options.headers['Idempotency-Key']).toMatch(/^[a-f0-9-]{36}$/);
    const storage = JSON.stringify([...stored]);
    expect(storage).not.toContain('visitor@example.invalid');
    expect(storage).not.toContain('Hello');
  });
  it('retains the same key after uncertain failure, including a module reload, and rotates changed input', async () => {
    const send = vi.fn().mockRejectedValueOnce(new Error('network failed')).mockImplementation(async () => accepted());
    vi.stubGlobal('fetch', send);
    let client = await import('../lib/support-intake');
    await expect(client.submitSupportRequest(payload)).rejects.toThrow('could not be confirmed');
    const firstKey = send.mock.calls[0][1].headers['Idempotency-Key'];
    vi.resetModules(); client = await import('../lib/support-intake');
    await client.submitSupportRequest({ ...payload, name: 'Visitor', message: 'Hello\nworld' });
    expect(send.mock.calls[1][1].headers['Idempotency-Key']).toBe(firstKey);
    await client.submitSupportRequest({ ...payload, message: 'A different question' });
    expect(send.mock.calls[2][1].headers['Idempotency-Key']).not.toBe(firstKey);
  });
  it.each([
    [200, { success: false, data: { requestId: id, status: 'received' } }],
    [200, { success: true, data: { requestId: 'fake', status: 'received' } }],
    [200, { success: true, data: { requestId: id, status: 'deleted' } }],
    [202, { success: true, data: { requestId: id, status: 'received' } }],
    [409, { error: 'private provider text' }],
  ])('rejects unconfirmed status/envelope %s', async (status, body) => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify(body), { status })));
    const { submitSupportRequest } = await import('../lib/support-intake');
    await expect(submitSupportRequest(payload)).rejects.toThrow();
  });
  it('fails closed without an API base and never transmits to a default production endpoint', async () => {
    vi.stubEnv('VITE_CORE_API_URL', ''); const send = vi.fn(); vi.stubGlobal('fetch', send);
    const { submitSupportRequest } = await import('../lib/support-intake');
    await expect(submitSupportRequest(payload)).rejects.toThrow('unavailable');
    expect(send).not.toHaveBeenCalled();
  });
  it('keeps retry identity in memory when storage is unavailable and rejects HTML success pages', async () => {
    vi.stubGlobal('sessionStorage', { getItem() { throw new Error('disabled'); }, setItem() { throw new Error('disabled'); } });
    const send = vi.fn().mockResolvedValueOnce(new Response('<html>Sign in</html>')).mockImplementation(async () => accepted());
    vi.stubGlobal('fetch', send); const { submitSupportRequest } = await import('../lib/support-intake');
    await expect(submitSupportRequest(payload)).rejects.toThrow('receipt');
    await submitSupportRequest(payload);
    expect(send.mock.calls[0][1].headers['Idempotency-Key']).toBe(send.mock.calls[1][1].headers['Idempotency-Key']);
  });
});
