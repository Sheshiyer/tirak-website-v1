import { describe, expect, it, vi } from 'vitest';
import handler from '../../api/contact';

async function request(body: unknown, method = 'POST') {
  const result: { status: number; body: unknown } = { status: 0, body: undefined };
  const response = {
    setHeader: vi.fn(),
    status(code: number) { result.status = code; return this; },
    json(value: unknown) { result.body = value; return this; },
    end() { return this; },
  };
  await handler({
    method, body, headers: { 'x-forwarded-for': crypto.randomUUID() },
  } as unknown as Parameters<typeof handler>[0], response as unknown as Parameters<typeof handler>[1]);
  return result;
}

const valid = { name: 'Launch QA', email: 'launch-qa@example.invalid', subject: 'Launch check', message: 'Synthetic local test only.' };

describe('contact delivery acceptance boundary', () => {
  it('never acknowledges an unsent message and never logs personal content', async () => {
    const log = vi.spyOn(console, 'log').mockImplementation(() => {});
    try {
      const result = await request(valid);
      expect(result.status).toBe(503);
      expect(result.body).toMatchObject({ error: 'Contact service unavailable' });
      expect(result.body).not.toHaveProperty('success', true);
      expect(log).not.toHaveBeenCalled();
    } finally { log.mockRestore(); }
  });
  it.each([null, [], 'not an object', { ...valid, name: 42 }, { ...valid, message: {} }, { ...valid, timestamp: [] }])(
    'rejects malformed request bodies without an internal error: %j', async body => {
      const result = await request(body);
      expect(result.status).toBe(400);
      expect(result.body).not.toHaveProperty('success', true);
    },
  );
  it('rejects GET instead of presenting a successful submission', async () => {
    expect((await request(undefined, 'GET')).status).toBe(405);
  });
});
