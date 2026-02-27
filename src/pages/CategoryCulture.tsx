import CategoryPageLayout from '@/components/CategoryPageLayout';
import { categoryConfigs } from '@/lib/category-data';

const CategoryCulture = () => (
  <CategoryPageLayout config={categoryConfigs.culture} />
);

export default CategoryCulture;
