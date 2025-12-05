import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CategoryFood = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Food Experiences in Thailand — Local Companions | Tirak"
        description="Join verified local companions for street food, markets, and culinary adventures across Thailand."
        canonical="https://tirak.app/food"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tirak.app/' },
            { '@type': 'ListItem', position: 2, name: 'Food', item: 'https://tirak.app/food' }
          ]
        }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-responsive-lg font-bold font-inter text-contrast mb-4">Food Experiences</h1>
        <p className="text-lg text-contrast-secondary mb-8">Taste Thailand with companions who guide you through markets and street food.</p>
        <div className="mt-10">
          <Link to="/tirak" className="inline-block px-6 py-3 rounded-xl bg-button text-primary-foreground font-semibold">Find a Companion</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryFood;
