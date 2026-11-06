import StreamlinedHero from '@/components/StreamlinedHero';
import CategoriesGrid from '@/components/CategoriesGrid';
import FeaturedCompanions from '@/components/FeaturedCompanions';
import CompanionStories from '@/components/CompanionStories';
import HowItWorks from '@/components/HowItWorks';
import ForLocalGuides from '@/components/ForLocalGuides';
import FinalCTA from '@/components/FinalCTA';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      {/* Hero Section */}
      <section id="home">
        <StreamlinedHero />
      </section>
      
      {/* Categories Grid */}
      <section id="explore" aria-label="Explore categories">
        <CategoriesGrid />
      </section>
      
      {/* Featured Companions */}
      <section aria-label="Illustrative local experience ideas">
        <FeaturedCompanions />
      </section>
      
      {/* Companion Stories */}
      <section id="companion-stories" aria-label="Travel inspiration">
        <CompanionStories />
      </section>
      
      {/* How It Works */}
      <section aria-label="How Tirak works">
        <HowItWorks />
      </section>
      
      {/* For Local Guides */}
      <section id="for-guides" aria-label="For local guides">
        <ForLocalGuides />
      </section>
      
      {/* Final CTA */}
      <section id="download" aria-label="Final call to action">
        <FinalCTA />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
