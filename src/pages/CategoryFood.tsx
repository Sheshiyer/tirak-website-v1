import CategoryPageLayout from '@/components/CategoryPageLayout';
import { categoryConfigs } from '@/lib/category-data';

const CategoryFood = () => (
  <CategoryPageLayout config={categoryConfigs.fooddrink} />
);

export default CategoryFood;
