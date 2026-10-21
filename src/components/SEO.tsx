import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { resolveSeo, SOCIAL_IMAGE } from '@/lib/seo';

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  openGraph?: Record<string, string>;
  twitter?: Record<string, string>;
  jsonLd?: object | object[];
};

const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
  let el = document.head.querySelector(`meta[${attr}='${name}']`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

export default function SEO({ title, description, canonical, noindex, openGraph, twitter, jsonLd }: SEOProps) {
  const { pathname } = useLocation();
  const resolved = resolveSeo(pathname, { title, description, canonical, noindex }, import.meta.env.VITE_SITE_INDEXING !== 'disabled');
  useEffect(() => {
    const { title, description, canonical } = resolved;
    if (title) document.title = title;
    if (description) setMeta('description', description);
    setMeta('robots', resolved.robots);
    if (canonical) {
      let link = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
    Object.entries({ ...openGraph, 'og:title': title, 'og:description': description, 'og:url': canonical, 'og:type': 'website', 'og:site_name': 'Tirak', 'og:image': SOCIAL_IMAGE, 'og:image:alt': 'Tirak app logo', 'og:image:type': 'image/png', 'og:image:width': '512', 'og:image:height': '512' }).forEach(([key, value]) => setMeta(key, value, 'property'));
    Object.entries({ ...twitter, 'twitter:title': title, 'twitter:description': description, 'twitter:url': canonical, 'twitter:card': 'summary', 'twitter:image': SOCIAL_IMAGE, 'twitter:image:alt': 'Tirak app logo' }).forEach(([key, value]) => setMeta(key, value));
    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((obj) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(obj);
        document.head.appendChild(script);
        scripts.push(script);
      });
    }
    return () => {
      scripts.forEach((script) => script.remove());
    };
  }, [resolved.title, resolved.description, resolved.canonical, resolved.robots, openGraph, twitter, jsonLd]);

  return null;
}
