import { Link } from 'react-router-dom';
import InterestSignup from '@/components/InterestSignup';
import { Button } from '@/components/ui/button';

import SEO from '@/components/SEO';
import StreamlinedHero from '@/components/StreamlinedHero';
import CategoriesGrid from '@/components/CategoriesGrid';
import CompanionStories from '@/components/CompanionStories';
import FinalCTA from '@/components/FinalCTA';
import ForLocalGuides from '@/components/ForLocalGuides';
import Footer from '@/components/Footer';
import { CultureBlob, AdventureBlob, WellnessBlob } from '@/components/ui/blob-shapes';

const TirakLanding = () => {
  return (
    <div className="bg-sunset min-h-screen text-foreground">
      <SEO 
        title="Tirak - Connect with Local Travel Companions in Thailand"
        description="Experience Thailand through the eyes of locals. Find verified companions for authentic adventures, cultural immersion, and unforgettable travel memories."
        canonical="https://www.tirak.app/tirak"
        openGraph={{
          'og:title': 'Tirak - Connect with Local Travel Companions in Thailand',
          'og:description': 'Experience Thailand through the eyes of locals. Find verified companions for authentic adventures and cultural immersion.',
          'og:type': 'website',
          'og:url': 'https://www.tirak.app/tirak',
          'og:image': 'https://www.tirak.app/og.jpg',
          'og:image:alt': 'Connect with local travel companions in Thailand'
        }}
        twitter={{
          'twitter:card': 'summary_large_image',
          'twitter:title': 'Tirak - Connect with Local Travel Companions in Thailand',
          'twitter:description': 'Experience Thailand with verified companions.',
          'twitter:image': 'https://www.tirak.app/og.jpg'
        }}
      />
      {/* Hero */}
      <StreamlinedHero />
      
      {/* Pre-Launch Signup - Enhanced Mobile Responsive */}
      <section id="prelaunch" className="py-12 md:py-16 lg:py-20" aria-labelledby="prelaunch-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Decorative Blobs - Responsive positioning */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-4 -left-2 sm:-top-6 sm:-left-4 opacity-50 sm:opacity-70 animate-blob-breathe hardware-accelerated">
              <CultureBlob size={100} className="sm:w-[140px] sm:h-[140px]" />
            </div>
            <div className="absolute top-6 right-4 sm:top-10 sm:right-8 opacity-40 sm:opacity-60 animate-blob-float hardware-accelerated">
              <AdventureBlob size={120} className="sm:w-[160px] sm:h-[160px]" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 sm:-bottom-6 opacity-30 sm:opacity-50 animate-blob-breathe hardware-accelerated">
              <WellnessBlob size={140} className="sm:w-[180px] sm:h-[180px]" />
            </div>
          </div>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Copy Section - Enhanced Mobile Typography */}
            <div className="space-y-4 sm:space-y-6 will-change-transform text-center lg:text-left">
              <h2 id="prelaunch-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-contrast leading-tight">
                Plan Your Next Local Experience
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-contrast-secondary font-inter leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Check the existing store links for your device, explore Thailand travel ideas, or get email updates from Tirak. Guide and service availability must be confirmed in the app.
              </p>
              
              {/* Enhanced Mobile Benefits List */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4 text-sm text-contrast-secondary/80 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/5">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  <span>App availability</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/5">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
                  <span>Email updates</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/5">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span>Local connections</span>
                </div>
                <div className="flex items-center space-x-2 p-2 rounded-lg bg-white/5">
                  <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  <span>Trip planning</span>
                </div>
              </div>
            </div>

            {/* Form Section - Enhanced Mobile UX */}
            <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl space-y-6 max-w-md mx-auto lg:max-w-none">
              <Button asChild className="btn-primary w-full h-12"><Link to="/download">View App Download Options</Link></Button>
              <InterestSignup source="traveler_landing" />
              <p className="text-xs text-contrast-secondary">For signup questions, contact <a href="mailto:contact@tirak.app" className="underline">contact@tirak.app</a>.</p>
            </div>

            {/* Visual Card - Enhanced Mobile Design */}
            <div className="glass-card rounded-2xl p-4 sm:p-6 lg:p-8 will-change-transform hardware-accelerated rotate-1 hover:rotate-0 transition-transform duration-300 max-w-md mx-auto lg:max-w-none">
              <div className="space-y-3 sm:space-y-4 text-center">
                <div className="text-xs sm:text-sm uppercase tracking-wide text-contrast-secondary font-medium">
                  For Travelers
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-inter gradient-text">
                  Discover Thailand
                </div>
                <div className="text-xs sm:text-sm text-contrast-secondary leading-relaxed">
                  Browse ideas here. Confirm current guides and services in the app.
                </div>
                
                {/* Mobile-friendly stats */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">Explore</div>
                    <div className="text-xs text-contrast-secondary">Local ideas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">Check</div>
                    <div className="text-xs text-contrast-secondary">App availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">Contact</div>
                    <div className="text-xs text-contrast-secondary">The team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Explore by Vibe - Enhanced Section Spacing */}
      <section id="explore" className="py-12 md:py-16 lg:py-20" aria-label="Explore by vibe">
        <CategoriesGrid />
      </section>
      
      {/* Testimonials - Enhanced Mobile Layout */}
      <section id="companion-stories" className="py-12 md:py-16 lg:py-20" aria-label="Travel inspiration">
        <CompanionStories />
      </section>
      
      {/* Vendor Onboarding - Enhanced Mobile Layout */}
      <section id="for-guides" className="py-12 md:py-16 lg:py-20" aria-labelledby="local-applications-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 id="local-applications-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-contrast mb-4">
              For Locals,
              <span className="gradient-text ml-2 block sm:inline">By Locals</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-contrast-secondary font-inter max-w-2xl mx-auto">
              Apply as an individual guide to share your local knowledge. Your profile and services are reviewed before publication.
            </p>
          </div>
        </div>
        <ForLocalGuides />
      </section>
      
      {/* Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TirakLanding;
