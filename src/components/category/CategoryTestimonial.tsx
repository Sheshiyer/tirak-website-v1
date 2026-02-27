import type { CategoryConfig } from '@/lib/category-data';

interface CategoryTestimonialProps {
  config: CategoryConfig;
}

const CategoryTestimonial = ({ config }: CategoryTestimonialProps) => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="glass rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
          {/* Quote mark */}
          <div
            className="text-5xl font-serif mb-4 leading-none"
            style={{ color: config.color }}
          >
            "
          </div>

          <blockquote className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6 italic">
            {config.testimonial.quote}
          </blockquote>

          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-white font-semibold">{config.testimonial.author}</span>
            <span className="text-white/30">—</span>
            <span className="text-white/50">{config.testimonial.country}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryTestimonial;
