import CategoryPageLayout from '@/components/CategoryPageLayout';
import { categoryConfigs } from '@/lib/category-data';

const CategoryCinema = () => (
  <CategoryPageLayout config={categoryConfigs.cinema} />
);

export default CategoryCinema;
