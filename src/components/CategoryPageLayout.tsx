import Footer from '@/components/Footer';
import CategoryHero from '@/components/category/CategoryHero';
import CategoryOverview from '@/components/category/CategoryOverview';
import CategoryExperiences from '@/components/category/CategoryExperiences';
import CategoryCompanions from '@/components/category/CategoryCompanions';
import CategoryTestimonial from '@/components/category/CategoryTestimonial';
import CategoryCTA from '@/components/category/CategoryCTA';
import type { CategoryConfig } from '@/lib/category-data';

interface CategoryPageLayoutProps {
  config: CategoryConfig;
}

const CategoryPageLayout = ({ config }: CategoryPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <CategoryHero config={config} />
      <CategoryOverview config={config} />
      <CategoryExperiences config={config} />
      <CategoryCompanions config={config} />
      <CategoryTestimonial config={config} />
      <CategoryCTA config={config} />
      <Footer />
    </div>
  );
};

export default CategoryPageLayout;
