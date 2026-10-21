import { describe, it, expect } from 'vitest';
import { resolveSeo, SOCIAL_IMAGE } from '../lib/seo';
import routes from '../lib/seo-routes.json';
describe('crawler metadata across route navigation', () => {
  it('resets unknown and private indexing when returning to public routes', () => {
    expect(resolveSeo('/missing', {}).robots).toBe('noindex, nofollow');
    expect(resolveSeo('/apply', { noindex: true, title: 'Application Received' }).title).toBe('Application Received');
    expect(resolveSeo('/', {}).robots).toBe('index, follow');
    expect(resolveSeo('/data-deletion', {}).robots).toBe('noindex, nofollow');
    expect(resolveSeo('/contact', {}, false).robots).toBe('noindex, nofollow');
  });
  it('uses unique absolute canonical routes and replaces stale social-page titles', () => {
    expect(new Set(routes.map(route => route.path)).size).toBe(routes.length);
    expect(new Set(routes.filter(route => route.index).map(route => route.title)).size).toBe(routes.filter(route => route.index).length);
    for (const route of routes) {
      const meta = resolveSeo(route.path, { title: 'Stale page', canonical: '/wrong' });
      expect(meta.title).toBe(route.title); expect(meta.canonical).toBe('https://tirak.app' + route.path);
    }
    expect(SOCIAL_IMAGE).toMatch(/^https:\/\/tirak\.app\//);
  });
});
