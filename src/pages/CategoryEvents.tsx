import CategoryPageLayout from '@/components/CategoryPageLayout';
import { categoryConfigs } from '@/lib/category-data';

const CategoryEvents = () => (
  <CategoryPageLayout config={categoryConfigs.events} />
);

export default CategoryEvents;
