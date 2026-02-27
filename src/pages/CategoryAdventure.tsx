import CategoryPageLayout from '@/components/CategoryPageLayout';
import { categoryConfigs } from '@/lib/category-data';

const CategoryAdventure = () => (
  <CategoryPageLayout config={categoryConfigs.adventure} />
);

export default CategoryAdventure;
