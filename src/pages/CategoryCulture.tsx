import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CategoryCulture = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Culture Experiences in Thailand — Local Companions | Tirak"
        description="Join verified local companions for cultural immersion: temples, traditions, markets, and heritage across Thailand."
        canonical="https://tirak.app/culture"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tirak.app/' },
            { '@type': 'ListItem', position: 2, name: 'Culture', item: 'https://tirak.app/culture' }
          ]
        }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-responsive-lg font-bold font-inter text-contrast mb-4">Culture Experiences</h1>
        <p className="text-lg text-contrast-secondary mb-8">Explore temples, traditions, and local life with companions who share their heritage.</p>
        <div className="mt-10">
          <Link to="/tirak" className="inline-block px-6 py-3 rounded-xl bg-button text-primary-foreground font-semibold">Find a Companion</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryCulture;
