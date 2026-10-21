import { beforeEach, describe, expect, it, vi } from 'vitest';
import { captureCampaign, parseCampaign, resetCampaignMemoryForTests } from '../lib/acquisition';
const storage = new Map<string, string>();
beforeEach(() => { storage.clear(); resetCampaignMemoryForTests(); vi.stubGlobal('sessionStorage', { getItem: (k: string) => storage.get(k) ?? null, setItem: (k: string, v: string) => storage.set(k, v) }); });
describe('bounded campaign capture', () => {
  it('captures supported labels and excludes personal query/referrer and click identifiers', () => {
    const campaign = parseCampaign('/tirak', '?utm_source=meta&utm_medium=paid_social&utm_campaign=launch_th&utm_content=video_a&utm_term=person%40example.com&gclid=private&email=person%40example.com');
    expect(campaign).toEqual({ landingPath: '/tirak', utmSource: 'meta', utmMedium: 'paid_social', utmCampaign: 'launch_th', utmContent: 'video_a' });
    expect(JSON.stringify(campaign)).not.toContain('@'); expect(parseCampaign('/private/token', '?utm_campaign=launch')).toBeUndefined();
  });
  it('rejects duplicate/unsafe/oversized values and organic visits create no campaign', () => {
    expect(parseCampaign('/apply', '?utm_campaign=a&utm_campaign=b&gclid=private')).toBeUndefined();
    expect(parseCampaign('/apply', '?utm_campaign=person%40example.com')).toBeUndefined();
    expect(parseCampaign('/apply', '?utm_campaign=' + 'a'.repeat(81))).toBeUndefined();
    expect(parseCampaign('/apply', '')).toBeUndefined();
  });
  it('preserves the first campaign across navigation and module-memory reset', () => {
    const first = captureCampaign('/tirak', '?utm_campaign=first');
    expect(captureCampaign('/apply', '?utm_campaign=second')).toEqual(first);
    resetCampaignMemoryForTests(); expect(captureCampaign('/apply', '')).toEqual(first);
    expect(Array.from(storage.values()).join('')).not.toContain('?');
  });
  it('uses memory when browser storage is unavailable', () => {
    vi.stubGlobal('sessionStorage', { getItem() { throw new Error('disabled'); }, setItem() { throw new Error('disabled'); } });
    expect(captureCampaign('/apply', '?utm_campaign=guide_launch')).toEqual({ landingPath: '/apply', utmCampaign: 'guide_launch' });
    expect(captureCampaign('/download', '')?.utmCampaign).toBe('guide_launch');
  });
});
