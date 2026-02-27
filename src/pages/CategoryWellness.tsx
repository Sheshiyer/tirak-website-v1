import CategoryPageLayout from '@/components/CategoryPageLayout';
import { categoryConfigs } from '@/lib/category-data';

const CategoryWellness = () => (
  <CategoryPageLayout config={categoryConfigs.wellness} />
);

export default CategoryWellness;
