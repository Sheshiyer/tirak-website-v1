import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CategoryNightlife = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Nightlife Experiences in Thailand — Local Companions | Tirak"
        description="Join verified local companions for nightlife outings: bars, clubs, and live music across Thailand."
        canonical="https://tirak.app/nightlife"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tirak.app/' },
            { '@type': 'ListItem', position: 2, name: 'Nightlife', item: 'https://tirak.app/nightlife' }
          ]
        }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-responsive-lg font-bold font-inter text-contrast mb-4">Nightlife Experiences</h1>
        <p className="text-lg text-contrast-secondary mb-8">Explore nightlife with companions who know the best spots and local scenes.</p>
        <div className="mt-10">
          <Link to="/tirak" className="inline-block px-6 py-3 rounded-xl bg-button text-primary-foreground font-semibold">Find a Companion</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryNightlife;
