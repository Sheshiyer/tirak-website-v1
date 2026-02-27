import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Smartphone, Download as DownloadIcon, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

// Store listings and iOS PWA URL
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.tirak.pineapple";
const IOS_PWA_URL = "https://tirak.app";
const PWA_GUIDE_ANCHOR = "#ios-pwa-guide";
const IOS_TIMELINE = import.meta.env.VITE_IOS_NATIVE_TIMELINE ?? "Pending App Store approval";
const HYPE_METRIC = import.meta.env.VITE_HYPE_METRIC ?? "1K+";

type Platform = "ios" | "android" | "other";

const detectPlatform = (): Platform => {
  const ua = navigator.userAgent ?? "";
  const vendor = (navigator as Navigator & { vendor?: string }).vendor ?? "";
  const opera = (window as Window & { opera?: string }).opera ?? "";
  const source = ua || vendor || opera;
  const isAndroid = /Android/i.test(source);
  const isIOS = /iPhone|iPad|iPod/i.test(source) || (navigator.platform === "MacIntel" && (navigator.maxTouchPoints ?? 0) > 1);
  if (isIOS) return "ios";
  if (isAndroid) return "android";
  return "other";
};

const Download = () => {
  const location = useLocation();
  const [redirected, setRedirected] = useState(false);

  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const overridePlatform = useMemo<Platform>(() => {
    const p = params.get("platform");
    if (p === "ios" || p === "android" || p === "other") return p;
    return "other";
  }, [params]);

  const platform = useMemo<Platform>(() => {
    return overridePlatform !== "other" ? overridePlatform : detectPlatform();
  }, [overridePlatform]);

  useEffect(() => {
    const iosUrl = IOS_PWA_URL;
    const androidUrl = PLAY_STORE_URL;
    let target: string | null = null;

    if (platform === "ios" && iosUrl) target = iosUrl;
    if (platform === "android" && androidUrl) target = androidUrl;

    // Auto-redirect after a short delay; always show the page UI for fallback
    const t = setTimeout(() => {
      if (target && !redirected) {
        setRedirected(true);
        window.location.href = target;
      }
    }, 800);

    return () => clearTimeout(t);
  }, [platform, redirected]);

  const platformLabel = platform === "ios" ? "iOS" : platform === "android" ? "Android" : "your device";

  const trackPwaEvent = (action: string, label?: string) => {
    const entry = { event: "pwa_install", action, label, timestamp: new Date().toISOString() };
    try {
      const logs = JSON.parse(localStorage.getItem("tirak-pwa-events") || "[]");
      logs.push(entry);
      localStorage.setItem("tirak-pwa-events", JSON.stringify(logs));
    } catch { void 0 }
    const dl = (window as Window & { dataLayer?: unknown[] }).dataLayer;
    if (typeof window !== "undefined" && Array.isArray(dl)) {
      dl.push({ event: "pwa_install", ...entry });
    }
  };

  return (
    <>
      <SEO
        title="Download Tirak — Local Travel Companions in Thailand"
        description="Download Tirak for iOS and Android. Connect with verified local companions for authentic travel experiences across Thailand."
        canonical="https://tirak.app/download"
        openGraph={{
          'og:title': 'Download Tirak — Local Travel Companions in Thailand',
          'og:description': 'Connect with verified local companions for authentic travel experiences across Thailand. Available on Android and iOS PWA.',
          'og:type': 'website',
          'og:url': 'https://tirak.app/download',
          'og:image': 'https://tirak.app/og.jpg',
          'og:image:alt': 'Download Tirak travel companion app'
        }}
        twitter={{
          'twitter:card': 'summary_large_image',
          'twitter:title': 'Download Tirak — Local Travel Companions in Thailand',
          'twitter:description': 'Connect with verified local companions for authentic Thai experiences.',
          'twitter:image': 'https://tirak.app/og.jpg'
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900" style={{ marginTop: 'clamp(5em, 10vh, 9em)' }}>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12">
              {/* Header Section */}
                <div className="text-center mb-12">
                  <div className="inline-block bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent mb-4">
                    <h1 className="text-4xl md:text-5xl font-inter font-bold">
                      Download Tirak
                    </h1>
                  </div>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                  Start your Tirak journey today. Available on Android; iOS currently via PWA.
                </p>
                <p className="text-lg text-text-secondary/80 mt-2">
                  We detected {platformLabel}. If supported, you will be redirected automatically.
                </p>
                {/* Hype banner */}
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white shadow-sm">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm">Over {HYPE_METRIC} engagements in the first week</span>
                </div>
                </div>

              {/* Download Links Section */}
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {/* iOS: Install PWA CTA */}
                <a
                  href={IOS_PWA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackPwaEvent("cta_click", "ios_pwa_install")}
                  className="group glass-card hover-lift hover-glow transition-all duration-300 hover:scale-105 px-6 py-4 rounded-2xl focus-ring will-change-transform hardware-accelerated inline-flex items-center gap-3"
                  aria-label="Open Tirak iOS PWA"
                >
                    <Smartphone className="w-6 h-6" aria-hidden="true" />
                    <div className="text-left">
                      <div className="text-base font-semibold">Open iOS PWA</div>
                      <div className="text-sm text-text-secondary">Quick guide below</div>
                    </div>
                  </a>

                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-card hover-lift hover-glow transition-all duration-300 hover:scale-105 p-4 rounded-2xl focus-ring will-change-transform hardware-accelerated"
                  >
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="h-14 w-auto rounded-xl"
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                </div>

              

                {/* Platform-specific CTA buttons */}
                <div className="text-center mt-8">
                  {platform === "ios" ? (
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="rounded-xl group inline-flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-elevated focus-ring"
                    >
                      <a href={IOS_PWA_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackPwaEvent("cta_click_primary", "ios_pwa_install")}>Open iOS PWA</a>
                    </Button>
                  ) : null}
                </div>
              </div>

              {/* iOS Availability Messaging */}
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-inter font-bold text-contrast">Currently available as PWA for iOS users</h2>
                <p className="mt-2 text-text-secondary">Native iOS app is {IOS_TIMELINE}. In the meantime, install our PWA for a fast, secure experience on iPhone and iPad.</p>
              </div>

              {/* iOS/PWA Section */}
              <section id="ios-pwa-guide" className="mt-10">
                <h3 className="text-xl md:text-2xl font-semibold">Install Tirak PWA on iOS</h3>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <figure className="glass-card p-6 rounded-xl text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <figcaption className="text-sm text-text-secondary">1. Open Tirak in Safari</figcaption>
                  </figure>
                  <figure className="glass-card p-6 rounded-xl text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <figcaption className="text-sm text-text-secondary">2. Tap the Share icon</figcaption>
                  </figure>
                  <figure className="glass-card p-6 rounded-xl text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <figcaption className="text-sm text-text-secondary">3. Select "Add to Home Screen"</figcaption>
                  </figure>
                </div>


                {/* FAQ */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold">FAQ for iOS users</h4>
                  <ul className="mt-3 space-y-2 text-text-secondary">
                    <li><strong>Is the PWA safe?</strong> Yes. It runs in Safari with the same security model as the browser.</li>
                    <li><strong>Can I get notifications?</strong> Not currently via PWA on iOS. We’ll add native support post-approval.</li>
                    <li><strong>Does it work offline?</strong> Some content is cached. For full offline features, the native app will provide more.</li>
                  </ul>
                </div>

                {/* Performance Tips */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold">Performance tips</h4>
                  <ul className="mt-3 list-disc list-inside text-text-secondary">
                    <li>Use Safari for the best iOS PWA experience.</li>
                    <li>Ensure a stable connection for initial load; assets are cached afterward.</li>
                    <li>Add to Home Screen to enable full-screen, app-like experience.</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default Download;
