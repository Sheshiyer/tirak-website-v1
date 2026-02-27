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
  name: string;
  location: string;
  tagline: string;
  category: CategoryName;
  rating: number;
  reviews: number;
  verified: boolean;
  image: string;
}

export const companions: Companion[] = [
  // Culture
  { id: 1, name: 'Kamon', location: 'Chiang Mai', tagline: 'Temple walks & traditions', category: 'Culture', rating: 5.0, reviews: 89, verified: true, image: img1 },
  { id: 2, name: 'Pim', location: 'Bangkok', tagline: 'Royal palace historian', category: 'Culture', rating: 4.9, reviews: 112, verified: true, image: img2 },
  // Adventure
  { id: 3, name: 'Malee', location: 'Phuket', tagline: 'Island hopping & diving', category: 'Adventure', rating: 4.8, reviews: 156, verified: true, image: img3 },
  { id: 4, name: 'Chai', location: 'Chiang Mai', tagline: 'Jungle trekking expert', category: 'Adventure', rating: 4.9, reviews: 134, verified: true, image: img4 },
  // Wellness
  { id: 5, name: 'Suda', location: 'Chiang Mai', tagline: 'Meditation & spa retreats', category: 'Wellness', rating: 5.0, reviews: 97, verified: true, image: img5 },
  { id: 6, name: 'Nong', location: 'Phuket', tagline: 'Thai massage & yoga', category: 'Wellness', rating: 4.8, reviews: 78, verified: true, image: img6 },
  // Nightlife
  { id: 7, name: 'Tun', location: 'Bangkok', tagline: 'Rooftop bars & live music', category: 'Nightlife', rating: 4.9, reviews: 145, verified: true, image: img7 },
  { id: 8, name: 'Dao', location: 'Phuket', tagline: 'Beach clubs & DJ nights', category: 'Nightlife', rating: 4.7, reviews: 118, verified: true, image: img8 },
  // Lifestyle
  { id: 9, name: 'Prae', location: 'Bangkok', tagline: 'Shopping & local fashion', category: 'Lifestyle', rating: 4.8, reviews: 92, verified: true, image: img9 },
  { id: 10, name: 'Krit', location: 'Bangkok', tagline: 'Cafe culture & co-working', category: 'Lifestyle', rating: 4.9, reviews: 67, verified: true, image: img10 },
  // Cinema
  { id: 11, name: 'Nat', location: 'Bangkok', tagline: 'Film locations & indie theaters', category: 'Cinema', rating: 4.7, reviews: 54, verified: true, image: img11 },
  { id: 12, name: 'Lek', location: 'Chiang Mai', tagline: 'Movie nights & screenings', category: 'Cinema', rating: 4.8, reviews: 41, verified: true, image: img12 },
  // Events
  { id: 13, name: 'Joy', location: 'Bangkok', tagline: 'Festivals & Muay Thai events', category: 'Events', rating: 4.9, reviews: 103, verified: true, image: img13 },
  { id: 14, name: 'Ton', location: 'Phuket', tagline: 'Beach parties & cultural fairs', category: 'Events', rating: 4.8, reviews: 86, verified: true, image: img14 },
  // Food & Drink
  { id: 15, name: 'Niran', location: 'Bangkok', tagline: 'Street food tours', category: 'Food & Drink', rating: 4.9, reviews: 127, verified: true, image: img15 },
  { id: 16, name: 'Som', location: 'Chiang Mai', tagline: 'Cooking classes & night markets', category: 'Food & Drink', rating: 5.0, reviews: 95, verified: true, image: img16 },
];

export const companionCategories = [
  'All', 'Culture', 'Adventure', 'Wellness', 'Nightlife',
  'Lifestyle', 'Cinema', 'Events', 'Food & Drink',
] as const;
