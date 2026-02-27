import CategoryPageLayout from '@/components/CategoryPageLayout';
import { categoryConfigs } from '@/lib/category-data';

const CategoryLifestyle = () => (
  <CategoryPageLayout config={categoryConfigs.lifestyle} />
);

export default CategoryLifestyle;
