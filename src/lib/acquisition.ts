export interface CampaignAttribution { landingPath: string; utmSource?: string; utmMedium?: string; utmCampaign?: string; utmContent?: string }
const paths = new Set(['/', '/tirak', '/download', '/apply', '/contact', '/bangkok', '/chiang-mai', '/phuket', '/culture', '/adventure', '/wellness', '/nightlife', '/food', '/lifestyle', '/cinema', '/events']);
const fields = { utm_source: 'utmSource', utm_medium: 'utmMedium', utm_campaign: 'utmCampaign', utm_content: 'utmContent' } as const;
const valid = (value: unknown): value is string => typeof value === 'string' && /^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,79}$/.test(value);
const key = 'tirak.campaign.v1';
let captured: CampaignAttribution | undefined;
export function parseCampaign(path: string, search: string): CampaignAttribution | undefined {
  if (!paths.has(path)) return;
  const params = new URLSearchParams(search); const result: CampaignAttribution = { landingPath: path };
  for (const [query, field] of Object.entries(fields)) {
    const values = params.getAll(query); if (values.length === 1 && valid(values[0])) result[field] = values[0];
  }
  return Object.keys(result).length > 1 ? result : undefined;
}
/** First supported campaign in this tab session. Never stores full URLs, referrers, email or click IDs. */
export function captureCampaign(path: string, search: string): CampaignAttribution | undefined {
  if (captured) return { ...captured };
  try {
    const saved = JSON.parse(sessionStorage.getItem(key) || 'null') as CampaignAttribution | null;
    if (saved && paths.has(saved.landingPath)) {
      const query = new URLSearchParams();
      for (const [name, field] of Object.entries(fields)) if (valid(saved[field])) query.set(name, saved[field]);
      captured = parseCampaign(saved.landingPath, query.toString());
    }
  } catch { /* Storage is optional. */ }
  captured ??= parseCampaign(path, search);
  if (captured) { try { sessionStorage.setItem(key, JSON.stringify(captured)); } catch { /* Memory fallback. */ } }
  return captured ? { ...captured } : undefined;
}
export function getCampaignAttribution(): CampaignAttribution | undefined {
  return typeof window === 'undefined' ? undefined : captureCampaign(window.location.pathname, window.location.search);
}
export function resetCampaignMemoryForTests() { captured = undefined; }
