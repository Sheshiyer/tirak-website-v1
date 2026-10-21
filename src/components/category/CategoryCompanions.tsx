import { Link } from 'react-router-dom';
import { companions } from '@/lib/companions-data';
import type { CategoryConfig } from '@/lib/category-data';

interface CategoryCompanionsProps {
  config: CategoryConfig;
}

const CategoryCompanions = ({ config }: CategoryCompanionsProps) => {
  const categoryCompanions = companions.filter((c) =>
    config.companionIds.includes(c.id)
  );

  if (categoryCompanions.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-inter text-white mb-4">
            {config.name} Experience Ideas
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Illustrative {config.name.toLowerCase()} ideas, not bookable guide profiles. Check the app for current guide availability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categoryCompanions.map((companion) => (
            <div key={companion.id} className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-white/5 to-white/10">
                <img
                  src={companion.image}
                  alt={`Illustrative ${companion.tagline.toLowerCase()} experience`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="800"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-white">{companion.tagline}</h3>
                <p className="text-white/60 flex items-center gap-1 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {companion.location}
                </p>
                <span className="inline-block px-2 py-1 rounded-full bg-white/10 text-xs">Illustrative idea</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/download"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Check Guide Availability in the App
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryCompanions;
