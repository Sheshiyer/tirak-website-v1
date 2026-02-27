import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CityChiangMai = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Chiang Mai Local Companions — Culture & Nature | Tirak"
        description="Explore Chiang Mai with verified local companions. Temples, old city, markets, and nature experiences tailored to your vibe."
        canonical="https://tirak.app/chiang-mai"
        openGraph={{
          'og:title': 'Chiang Mai Local Companions — Culture & Nature | Tirak',
          'og:description': 'Explore Chiang Mai with verified local companions. Temples, markets, and mountain retreats.',
          'og:type': 'website',
          'og:url': 'https://tirak.app/chiang-mai',
          'og:image': 'https://tirak.app/og.jpg',
          'og:image:alt': 'Explore Chiang Mai with local companions on Tirak'
        }}
        twitter={{
          'twitter:card': 'summary_large_image',
          'twitter:title': 'Chiang Mai Local Companions | Tirak',
          'twitter:description': 'Temples, old city, markets, and nature — explore Chiang Mai with verified locals.',
          'twitter:image': 'https://tirak.app/og.jpg'
        }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tirak.app/' },
            { '@type': 'ListItem', position: 2, name: 'Chiang Mai', item: 'https://tirak.app/chiang-mai' }
          ]
        }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-responsive-lg font-bold font-inter text-contrast mb-4">Chiang Mai Local Companions</h1>
        <p className="text-lg text-contrast-secondary mb-8">Discover Chiang Mai with locals who guide you through temples, markets, and mountain retreats. Match by vibe.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6">
            <h2 className="text-xl font-semibold">Popular Vibes</h2>
            <ul className="mt-3 space-y-2 text-contrast-secondary">
              <li><Link to="/culture" className="hover:text-primary">Culture</Link></li>
              <li><Link to="/adventure" className="hover:text-primary">Adventure</Link></li>
              <li><Link to="/wellness" className="hover:text-primary">Wellness</Link></li>
              <li><Link to="/lifestyle" className="hover:text-primary">Lifestyle</Link></li>
              <li><Link to="/cinema" className="hover:text-primary">Cinema</Link></li>
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

export default CityChiangMai;
