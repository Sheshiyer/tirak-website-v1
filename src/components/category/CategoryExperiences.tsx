import type { CategoryConfig } from '@/lib/category-data';

interface CategoryExperiencesProps {
  config: CategoryConfig;
}

const CategoryExperiences = ({ config }: CategoryExperiencesProps) => {
  return (
    <section id="experiences" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-white mb-4">
            What You'll Experience
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Curated {config.name.toLowerCase()} experiences led by verified local companions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {config.experiences.map((experience) => {
            const Icon = experience.icon;
            return (
              <div
                key={experience.title}
                className="glass rounded-2xl p-6 sm:p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${config.color}20` }}
                >
                  <Icon size={24} style={{ color: config.color }} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {experience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryExperiences;
