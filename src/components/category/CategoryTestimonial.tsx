import type { CategoryConfig } from '@/lib/category-data';

export default function CategoryPlanningTip({ config }: { config: CategoryConfig }) {
  return <section className="py-16 sm:py-20" aria-labelledby="planning-tip-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <div className="glass rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
        <h2 id="planning-tip-heading" className="text-2xl font-semibold mb-4" style={{ color: config.color }}>Plan your experience</h2>
        <p className="text-lg text-white/90 leading-relaxed">{config.planningTip}</p>
        <p className="text-sm text-white/50 mt-4">Travel planning guidance from Tirak</p>
      </div>
    </div>
  </section>;
}
