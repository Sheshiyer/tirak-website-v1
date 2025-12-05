import SEO from '@/components/SEO';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CategoryWellness = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Wellness Experiences in Thailand — Local Companions | Tirak"
        description="Join verified local companions for spa, meditation, and wellness retreats across Thailand."
        canonical="https://tirak.app/wellness"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tirak.app/' },
            { '@type': 'ListItem', position: 2, name: 'Wellness', item: 'https://tirak.app/wellness' }
          ]
        }}
      />
      <div className="container mx-auto px-6 max-w-5xl">
        <h1 className="text-responsive-lg font-bold font-inter text-contrast mb-4">Wellness Experiences</h1>
        <p className="text-lg text-contrast-secondary mb-8">Spa, meditation, and retreats led by companions focused on wellbeing.</p>
        <div className="mt-10">
          <Link to="/tirak" className="inline-block px-6 py-3 rounded-xl bg-button text-primary-foreground font-semibold">Find a Companion</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryWellness;
