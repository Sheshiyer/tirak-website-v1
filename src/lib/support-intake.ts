import { getApiBase } from './core-intake';

export type SupportKind = 'contact' | 'privacy_deletion';
export interface SupportPayload {
  kind: SupportKind;
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}
export interface SupportReceipt { requestId: string; status: 'received' }
interface Attempt { fingerprint: string; key: string }
const memory = new Map<string, Attempt>();
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function readAttempt(scope: string): Attempt | undefined {
  const cached = memory.get(scope);
  if (cached) return cached;
  try {
    const raw = sessionStorage.getItem(scope);
    if (!raw) return;
    const value = JSON.parse(raw);
    if (/^[a-f0-9]{64}$/.test(value.fingerprint) && UUID.test(value.key)) {
      memory.set(scope, value);
      return value;
    }
  } catch { /* Storage is optional; the in-memory retry key remains available. */ }
}

/** Records intent only. Personal content is never logged or stored in browser storage. */
export async function submitSupportRequest(input: SupportPayload): Promise<SupportReceipt> {
  const base = getApiBase();
  const payload: SupportPayload = {
    kind: input.kind,
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    subject: input.subject.trim(),
    message: input.message.replace(/\r\n?/g, '\n').trim(),
    ...(input.honeypot ? { honeypot: input.honeypot } : {}),
  };
  const body = JSON.stringify(payload);
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(body));
  const fingerprint = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, '0')).join('');
  const scope = `tirak.support.v1:${base}:${payload.kind}`;
  const previous = readAttempt(scope);
  const attempt = previous?.fingerprint === fingerprint ? previous : { fingerprint, key: crypto.randomUUID() };
  memory.set(scope, attempt);
  try { sessionStorage.setItem(scope, JSON.stringify(attempt)); } catch { /* Memory fallback. */ }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(`${base}/support-requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Idempotency-Key': attempt.key },
      body,
      signal: controller.signal,
    });
    if (response.status === 429) throw new Error('Please wait a few minutes before trying again.');
    if (response.status !== 200 && response.status !== 201) {
      throw new Error('Your request could not be confirmed. Retry with the same details or contact contact@tirak.app.');
    }
    let envelope: unknown;
    try { envelope = await response.json(); } catch { throw new Error('No request receipt was received. Please retry with the same details.'); }
    const value = envelope as { success?: unknown; data?: Partial<SupportReceipt> } | null;
    if (value?.success !== true || !UUID.test(value.data?.requestId ?? '') || value.data?.status !== 'received') {
      throw new Error('No valid request receipt was received. Please retry with the same details.');
    }
    return { requestId: value.data.requestId!, status: 'received' };
  } catch (error) {
    if (error instanceof Error && error.message.startsWith('No ')) throw error;
    if (error instanceof Error && /^(Your request|Please wait)/.test(error.message)) throw error;
    throw new Error('Your request could not be confirmed. Your details are still here; retry or contact contact@tirak.app.');
  } finally { clearTimeout(timeout); }
}
