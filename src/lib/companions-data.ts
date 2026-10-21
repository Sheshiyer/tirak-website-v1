import img1 from '@/assets/1.png';
import img2 from '@/assets/2.png';
import img3 from '@/assets/3.png';
import img4 from '@/assets/4.png';
import img5 from '@/assets/5.png';
import img6 from '@/assets/6.png';
import img7 from '@/assets/7.png';
import img8 from '@/assets/8.png';
import img9 from '@/assets/9.png';
import img10 from '@/assets/10.png';
import img11 from '@/assets/11.png';
import img12 from '@/assets/12.png';
import img13 from '@/assets/13.png';
import img14 from '@/assets/14.png';
import img15 from '@/assets/15.png';
import img16 from '@/assets/16.png';

export type CategoryName =
  | 'Culture'
  | 'Adventure'
  | 'Wellness'
  | 'Nightlife'
  | 'Lifestyle'
  | 'Cinema'
  | 'Events'
  | 'Food & Drink';

export interface Companion {
  id: number;
  location: string;
  tagline: string;
  category: CategoryName;
  kind: 'illustrative_experience';
  image: string;
}

// Editorial concepts and illustrative imagery; never public guide inventory or review evidence.
export const companions: Companion[] = [
  // Culture
  { id: 1, location: 'Chiang Mai', tagline: 'Temple walks & traditions', category: 'Culture', kind: 'illustrative_experience', image: img1 },
  { id: 2, location: 'Bangkok', tagline: 'Royal palace history', category: 'Culture', kind: 'illustrative_experience', image: img2 },
  // Adventure
  { id: 3, location: 'Phuket', tagline: 'Island hopping & diving', category: 'Adventure', kind: 'illustrative_experience', image: img3 },
  { id: 4, location: 'Chiang Mai', tagline: 'Jungle trekking', category: 'Adventure', kind: 'illustrative_experience', image: img4 },
  // Wellness
  { id: 5, location: 'Chiang Mai', tagline: 'Meditation & spa retreats', category: 'Wellness', kind: 'illustrative_experience', image: img5 },
  { id: 6, location: 'Phuket', tagline: 'Thai massage & yoga', category: 'Wellness', kind: 'illustrative_experience', image: img6 },
  // Nightlife
  { id: 7, location: 'Bangkok', tagline: 'Rooftop bars & live music', category: 'Nightlife', kind: 'illustrative_experience', image: img7 },
  { id: 8, location: 'Phuket', tagline: 'Beach clubs & DJ nights', category: 'Nightlife', kind: 'illustrative_experience', image: img8 },
  // Lifestyle
  { id: 9, location: 'Bangkok', tagline: 'Shopping & local fashion', category: 'Lifestyle', kind: 'illustrative_experience', image: img9 },
  { id: 10, location: 'Bangkok', tagline: 'Cafe culture & co-working', category: 'Lifestyle', kind: 'illustrative_experience', image: img10 },
  // Cinema
  { id: 11, location: 'Bangkok', tagline: 'Film locations & indie theaters', category: 'Cinema', kind: 'illustrative_experience', image: img11 },
  { id: 12, location: 'Chiang Mai', tagline: 'Movie nights & screenings', category: 'Cinema', kind: 'illustrative_experience', image: img12 },
  // Events
  { id: 13, location: 'Bangkok', tagline: 'Festivals & Muay Thai events', category: 'Events', kind: 'illustrative_experience', image: img13 },
  { id: 14, location: 'Phuket', tagline: 'Beach parties & cultural fairs', category: 'Events', kind: 'illustrative_experience', image: img14 },
  // Food & Drink
  { id: 15, location: 'Bangkok', tagline: 'Street food tours', category: 'Food & Drink', kind: 'illustrative_experience', image: img15 },
  { id: 16, location: 'Chiang Mai', tagline: 'Cooking classes & night markets', category: 'Food & Drink', kind: 'illustrative_experience', image: img16 },
];

export const companionCategories = [
  'All', 'Culture', 'Adventure', 'Wellness', 'Nightlife',
  'Lifestyle', 'Cinema', 'Events', 'Food & Drink',
] as const;
