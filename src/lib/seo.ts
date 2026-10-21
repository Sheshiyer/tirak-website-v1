import routes from './seo-routes.json';
export const SOCIAL_IMAGE = 'https://www.tirak.app/android-chrome-512x512.png';
export function resolveSeo(pathname: string, input: { title?: string; description?: string; canonical?: string; noindex?: boolean }, indexing = true) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const route = routes.find(item => item.path === path);
  return {
    title: input.noindex ? input.title || route?.title || 'Tirak' : route?.title || input.title || 'Tirak',
    description: route?.description || input.description || 'Explore Thailand with Tirak.',
    canonical: route ? `https://www.tirak.app${route.path}` : input.canonical || 'https://www.tirak.app/404',
    robots: !indexing || input.noindex || !route || !route.index ? 'noindex, nofollow' : 'index, follow',
  };
}
