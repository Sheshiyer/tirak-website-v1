import type { Plugin } from 'vite';
import routes from '../src/lib/seo-routes.json';
const origin = 'https://tirak.app';
const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function seoBuild(indexing: boolean): Plugin {
  return { name: 'tirak-route-crawler-metadata', enforce: 'post', generateBundle(_, bundle) {
    const root = bundle['index.html'];
    if (!root || root.type !== 'asset') throw new Error('Missing built index.html for route metadata');
    const template = String(root.source);
    function html(route: typeof routes[number]) {
      const values: Record<string, string> = { description: route.description, robots: indexing && route.index ? 'index, follow' : 'noindex, nofollow', 'og:title': route.title, 'og:description': route.description, 'og:url': origin + route.path, 'og:image': origin + '/android-chrome-512x512.png', 'og:image:alt': 'Tirak app logo', 'twitter:title': route.title, 'twitter:description': route.description, 'twitter:url': origin + route.path, 'twitter:image': origin + '/android-chrome-512x512.png', 'twitter:card': 'summary' };
      let result = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(route.title)}</title>`).replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${origin + route.path}" />`);
      for (const [name, value] of Object.entries(values)) {
        const attr = name.startsWith('og:') ? 'property' : 'name';
        const expression = new RegExp(`<meta ${attr}="${name}" content="[^"]*"\\s*\\/>`);
        const tag = `<meta ${attr}="${name}" content="${escape(value)}" />`;
        result = expression.test(result) ? result.replace(expression, tag) : result.replace('</head>', `  ${tag}\n</head>`);
      }
      return result;
    }
    for (const route of routes) {
      if (route.path === '/') root.source = html(route);
      else this.emitFile({ type: 'asset', fileName: route.path.slice(1) + '/index.html', source: html(route) });
    }
    this.emitFile({ type: 'asset', fileName: '404.html', source: html({ path: '/404', title: 'Page Not Found — Tirak', description: 'The requested Tirak page could not be found.', index: false }) });
    this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + (indexing ? routes.filter(r => r.index).map(r => `  <url><loc>${origin + r.path}</loc></url>`).join('\n') : '') + '\n</urlset>\n' });
    this.emitFile({ type: 'asset', fileName: 'robots.txt', source: indexing ? `User-agent: *\nAllow: /\nDisallow: /supplier-onboarding\nDisallow: /data-deletion\nSitemap: ${origin}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n' });
  } };
}
