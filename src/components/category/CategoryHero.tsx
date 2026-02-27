import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import VideoBackground from '@/components/VideoBackground';
import type { CategoryConfig } from '@/lib/category-data';

interface CategoryHeroProps {
  config: CategoryConfig;
}

const CategoryHero = ({ config }: CategoryHeroProps) => {
  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 pb-12"
      style={{
        background: `linear-gradient(135deg, hsl(0 0% 5%) 0%, hsl(0 0% 8%) 50%, hsl(0 0% 5%) 100%)`,
      }}
    >
      <SEO
        title={config.seo.title}
        description={config.seo.description}
        canonical={config.seo.canonical}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tirak.app/' },
            { '@type': 'ListItem', position: 2, name: config.name, item: config.seo.canonical },
          ],
        }}
      />

      {/* Subtle gradient overlay using category color */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${config.color}, transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Breadcrumb */}
            <nav className="mb-4 text-sm text-white/50">
              <Link to="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white/80">{config.name}</span>
            </nav>

            {/* Category badge */}
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 border"
              style={{
                color: config.color,
                borderColor: config.color,
                backgroundColor: `${config.color}15`,
              }}
            >
              {config.name}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter text-white mb-6 leading-tight">
              {config.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {config.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/tirak"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: config.color }}
              >
                Find a Companion
              </Link>
              <a
                href="#experiences"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white/90 border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Explore Experiences
              </a>
            </div>
          </div>

          {/* Video column */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <VideoBackground
              src={config.video}
              poster={config.poster}
              layout="contained"
              glowColor={config.color}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
