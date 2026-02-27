import { CategoryIcons } from '@/lib/category-icons';
import type { CategoryConfig } from '@/lib/category-data';

interface CategoryOverviewProps {
  config: CategoryConfig;
}

const CategoryOverview = ({ config }: CategoryOverviewProps) => {
  const IconComponent = CategoryIcons[config.id as keyof typeof CategoryIcons];

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="glass rounded-2xl p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Category icon */}
            {IconComponent && (
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${config.color}20` }}
              >
                <IconComponent size={28} style={{ color: config.color }} />
              </div>
            )}

            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold font-inter text-white mb-4">
                About {config.name} Experiences
              </h2>
              <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                {config.overviewDescription}
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-center">
            {config.stats.map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: config.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryOverview;
