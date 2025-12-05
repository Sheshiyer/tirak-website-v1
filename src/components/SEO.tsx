import { useEffect } from 'react';

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
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta('description', description);
    if (noindex) setMeta('robots', 'noindex, nofollow');
    if (canonical) {
      let link = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
    if (openGraph) {
      Object.entries(openGraph).forEach(([k, v]) => setMeta(k, v, 'property'));
    }
    if (twitter) {
      Object.entries(twitter).forEach(([k, v]) => setMeta(k, v, 'name'));
    }
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((obj) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(obj);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, noindex
  , openGraph, twitter, jsonLd]);

  return null;
}
