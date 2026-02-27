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
            Featured {config.name} Companions
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Verified locals who specialize in {config.name.toLowerCase()} experiences
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {categoryCompanions.map((companion) => (
            <div key={companion.id} className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-white/5 to-white/10">
                <img
                  src={companion.image}
                  alt={`${companion.name} — ${companion.tagline}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="800"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-white">{companion.name}</h3>
                <p className="text-white/60 flex items-center gap-1 text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {companion.location}
                </p>
                <p className="text-white/50 text-sm">{companion.tagline}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-white/70">{companion.rating}</span>
                  </div>
                  <span className="text-white/30 text-xs">{companion.reviews} reviews</span>
                  {companion.verified && (
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                      Verified
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/tirak"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            View All {config.name} Companions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryCompanions;
