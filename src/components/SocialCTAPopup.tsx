import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

// Simplified: no tracking types or analytics

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61584212227083';
const INSTAGRAM_URL = 'https://www.instagram.com/tirak.app';
const TIKTOK_URL = 'https://www.tiktok.com/@tirak.app';

const STORAGE_KEY_SHOWN = 'tirak-cta-shown';
const STORAGE_KEY_DISMISSED = 'tirak-cta-dismissed';

export default function SocialCTAPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // No toast or analytics; minimalist popup

  useEffect(() => {
    // Do not show if previously dismissed in this session
    const dismissed = sessionStorage.getItem(STORAGE_KEY_DISMISSED) === '1';
    const alreadyShown = sessionStorage.getItem(STORAGE_KEY_SHOWN) === '1';
    if (dismissed || alreadyShown) return;

    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY_SHOWN, '1');
      // opened
    }, 30000);

    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY_DISMISSED, '1');
    // closed
  };

  const safeOpen = (url: string) => {
    try {
      const w = window.open(url, '_blank', 'noopener,noreferrer');
      if (!w) throw new Error('Popup blocked');
    } catch (err) {
      alert('Unable to open link. Please allow popups and try again.');
    }
  };

  const followAll = async () => {
    setLoading(true);
    try {
      // Open primary profile (Instagram) as CTA outcome
      safeOpen(INSTAGRAM_URL);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="cta-title" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={close} aria-hidden="true" />
      <div className="relative w-11/12 sm:w-[500px] max-w-lg rounded-2xl bg-card border border-border p-6 sm:p-8 shadow-xl">
        <button aria-label="Close popup" onClick={close} className="absolute top-3 right-3 text-contrast-secondary hover:text-primary">✕</button>
        <h2 id="cta-title" className="text-2xl sm:text-3xl font-bold font-inter text-contrast mb-2">Join the Tirak community</h2>
        <p className="text-contrast-secondary text-sm sm:text-base mb-4">Follow us for authentic travel stories, early access updates, and exclusive perks.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <a onClick={() => safeOpen(FACEBOOK_URL)} className="cursor-pointer flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <div className="text-sm"><div className="font-medium">Facebook</div><div className="text-xs text-contrast-secondary">Profile</div></div>
          </a>
          <a onClick={() => safeOpen(INSTAGRAM_URL)} className="cursor-pointer flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm6.5-1.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" /></svg>
            <div className="text-sm"><div className="font-medium">Instagram</div><div className="text-xs text-contrast-secondary">@tirak.app</div></div>
          </a>
          <a onClick={() => safeOpen(TIKTOK_URL)} className="cursor-pointer flex items-center gap-2 rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 3c.7 1.9 2.1 3.4 4 3.9v3.1c-1.7-.2-3.3-.9-4.6-2v6.3c0 3.7-2.5 6.7-6.2 6.7-3.3 0-5.7-2.7-5.7-5.9 0-3.1 2.3-5.6 5.3-5.9v3.2c-1.2.2-2.1 1.2-2.1 2.5 0 1.5 1.2 2.7 2.7 2.7 1.9 0 3.1-1.5 3.1-3.4V3h2.5z" /></svg>
            <div className="text-sm"><div className="font-medium">TikTok</div><div className="text-xs text-contrast-secondary">@tirak.app</div></div>
          </a>
        </div>

        <Button onClick={followAll} className="w-full h-11" disabled={loading}>
          {loading ? 'Opening…' : 'Follow Us'}
        </Button>
      </div>
    </div>
  );
}
