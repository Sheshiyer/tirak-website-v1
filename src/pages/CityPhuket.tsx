import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CityPhuket = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Phuket Local Companions — Beaches & Adventure | Tirak"
        description="Explore Phuket with verified local companions. Beaches, island trips, nightlife, and adventure tailored to your vibe."
        canonical="https://tirak.app/phuket"
        openGraph={{
          'og:title': 'Phuket Local Companions — Beaches & Adventure | Tirak',
          'og:description': 'Explore Phuket with verified local companions. Beaches, island trips, and vibrant nightlife.',
          'og:type': 'website',
          'og:url': 'https://tirak.app/phuket',
          'og:image': 'https://tirak.app/og.jpg',
          'og:image:alt': 'Explore Phuket with local companions on Tirak'
        }}
        twitter={{
          'twitter:card': 'summary_large_image',
          'twitter:title': 'Phuket Local Companions | Tirak',
          'twitter:description': 'Beaches, island trips, nightlife — explore Phuket with verified locals.',
          'twitter:image': 'https://tirak.app/og.jpg'
        }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tirak.app/' },
            { '@type': 'ListItem', position: 2, name: 'Phuket', item: 'https://tirak.app/phuket' }
          ]
        }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-responsive-lg font-bold font-inter text-contrast mb-4">Phuket Local Companions</h1>
        <p className="text-lg text-contrast-secondary mb-8">Discover Phuket with locals who guide you through beaches, islands, and vibrant nightlife. Match by vibe.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold">Popular Vibes</h2>
            <ul className="mt-3 space-y-2 text-contrast-secondary">
              <li><Link to="/adventure" className="hover:text-primary">Adventure</Link></li>
              <li><Link to="/nightlife" className="hover:text-primary">Nightlife</Link></li>
              <li><Link to="/wellness" className="hover:text-primary">Wellness</Link></li>
              <li><Link to="/events" className="hover:text-primary">Events</Link></li>
              <li><Link to="/food" className="hover:text-primary">Food & Drink</Link></li>
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

export default CityPhuket;
