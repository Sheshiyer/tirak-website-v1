import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CityBangkok = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Bangkok Local Companions — Authentic Experiences | Tirak"
        description="Explore Bangkok with verified local companions. Culture, street food, temples, nightlife, and hidden gems tailored to your vibe."
        canonical="https://tirak.app/bangkok"
        openGraph={{
          'og:title': 'Bangkok Local Companions — Authentic Experiences | Tirak',
          'og:description': 'Explore Bangkok with verified local companions. Culture, street food, temples, nightlife, and hidden gems.',
          'og:type': 'website',
          'og:url': 'https://tirak.app/bangkok',
          'og:image': 'https://tirak.app/og.jpg',
          'og:image:alt': 'Explore Bangkok with local companions on Tirak'
        }}
        twitter={{
          'twitter:card': 'summary_large_image',
          'twitter:title': 'Bangkok Local Companions | Tirak',
          'twitter:description': 'Culture, street food, temples, nightlife — explore Bangkok with verified locals.',
          'twitter:image': 'https://tirak.app/og.jpg'
        }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tirak.app/' },
            { '@type': 'ListItem', position: 2, name: 'Bangkok', item: 'https://tirak.app/bangkok' }
          ]
        }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-responsive-lg font-bold font-inter text-contrast mb-4">Bangkok Local Companions</h1>
        <p className="text-lg text-contrast-secondary mb-8">Discover Bangkok with locals who know the city’s culture, food, temples, and nightlife. Match by vibe and plan confidently.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold">Popular Vibes</h2>
            <ul className="mt-3 space-y-2 text-contrast-secondary">
              <li><Link to="/culture" className="hover:text-primary">Culture</Link></li>
              <li><Link to="/nightlife" className="hover:text-primary">Nightlife</Link></li>
              <li><Link to="/food" className="hover:text-primary">Food & Drink</Link></li>
              <li><Link to="/lifestyle" className="hover:text-primary">Lifestyle</Link></li>
              <li><Link to="/cinema" className="hover:text-primary">Cinema</Link></li>
              <li><Link to="/events" className="hover:text-primary">Events</Link></li>
            </ul>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold">Plan Your Day</h2>
            <ul className="mt-3 space-y-2 text-contrast-secondary">
              <li>Set meeting point and schedule</li>
              <li>Chat with your companion</li>
              <li>Enjoy authentic experiences</li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <Link to="/tirak" className="inline-block px-6 py-3 rounded-xl bg-button text-primary-foreground font-semibold">Find a Companion</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CityBangkok;
