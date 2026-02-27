import { Link } from 'react-router-dom';
import type { CategoryConfig } from '@/lib/category-data';

interface CategoryCTAProps {
  config: CategoryConfig;
}

const CategoryCTA = ({ config }: CategoryCTAProps) => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-inter text-white mb-4">
          Ready for your {config.name} adventure?
        </h2>
        <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Connect with verified local companions and create unforgettable {config.name.toLowerCase()} experiences in Thailand.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/tirak"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: config.color }}
          >
            Find a Companion
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-white/90 border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Browse All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryCTA;
