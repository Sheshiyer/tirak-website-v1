import type { LucideIcon } from 'lucide-react';
import {
  Landmark, BookOpen, Palette, MapPin, Music2, Compass,
  Mountain, Waves, TreePine, Bike, Anchor, Ship,
  Flower2, Heart, Leaf, Sparkles, Sun, Moon,
  PartyPopper, Martini, Headphones, Mic2, Stars, Zap,
  ShoppingBag, Coffee, Camera, Gem, Paintbrush, Globe,
  Film, Clapperboard, Popcorn, Theater, Projector, Monitor,
  CalendarDays, Flame, Trophy, Ticket, Flag, Sparkle,
  UtensilsCrossed, ChefHat, Wine, CookingPot, Soup, IceCream,
} from 'lucide-react';

// Brand experience photo imports
import t1Hero from '@/assets/t1.png';
import t1Texture from '@/assets/t1.2.png';
import t1Aerial from '@/assets/t1.3.png';
import t2Hero from '@/assets/t2.1.png';
import t2Texture from '@/assets/t2.2.png';
import t2Aerial from '@/assets/t2.3.png';
import t3Hero from '@/assets/t3.1.png';
import t3Texture from '@/assets/t3.2.png';
import t3Aerial from '@/assets/t3.3.png';
import t4Hero from '@/assets/t4.1.png';
import t4Texture from '@/assets/t4.2.png';
import t4Aerial from '@/assets/t4.3.png';
import t5Hero from '@/assets/t5.1.png';
import t5Aerial from '@/assets/t5.3.png';
import t6Hero from '@/assets/t6.1.png';
import t6Texture from '@/assets/t6.2.png';
import t6Aerial from '@/assets/t6.3.png';
import t7Hero from '@/assets/t7.1.png';
import t7Texture from '@/assets/t7.2.png';
import t7Aerial from '@/assets/t7.3.png';
import t8Hero from '@/assets/t8.1.png';
import t8Texture from '@/assets/t8.2.png';
import t8Aerial from '@/assets/t8.3.png';

// Video imports
import pimCultureVideo from '@/assets/videos/pim-culture.mp4';
import pimCulturePoster from '@/assets/videos/pim-culture-poster.jpg';
import maleeIslandVideo from '@/assets/videos/malee-island.mp4';
import maleeIslandPoster from '@/assets/videos/malee-island-poster.jpg';
import sudaSpaVideo from '@/assets/videos/suda-spa.mp4';
import sudaSpaPoster from '@/assets/videos/suda-spa-poster.jpg';
import tunRooftopVideo from '@/assets/videos/tun-rooftop.mp4';
import tunRooftopPoster from '@/assets/videos/tun-rooftop-poster.jpg';
import daoBeachVideo from '@/assets/videos/dao-beach.mp4';
import daoBeachPoster from '@/assets/videos/dao-beach-poster.jpg';
import somCookingVideo from '@/assets/videos/som-cooking.mp4';
import somCookingPoster from '@/assets/videos/som-cooking-poster.jpg';
import tonPartyVideo from '@/assets/videos/ton-party.mp4';
import tonPartyPoster from '@/assets/videos/ton-party-poster.jpg';
import niranStreetfoodVideo from '@/assets/videos/niran-streetfood.mp4';
import niranStreetfoodPoster from '@/assets/videos/niran-streetfood-poster.jpg';

export interface ExperienceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CategoryTestimonial {
  quote: string;
  author: string;
  country: string;
}

export interface CategoryStat {
  label: string;
  value: string;
}

export interface CategoryConfig {
  id: string;
  slug: string;
  name: string;
  title: string;
  heroDescription: string;
  overviewDescription: string;
  color: string;
  bgColor: string;
  video: string;
  poster: string;
  images: {
    hero?: string;
    texture?: string;
    aerial?: string;
  };
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  stats: CategoryStat[];
  experiences: ExperienceItem[];
  companionIds: number[];
  testimonial: CategoryTestimonial;
}

export const categoryConfigs: Record<string, CategoryConfig> = {
  culture: {
    id: 'culture',
    slug: 'culture',
    name: 'Culture',
    title: 'Culture Experiences',
    heroDescription: 'Explore temples, traditions, and local life with companions who share their heritage and deep knowledge of Thai culture.',
    overviewDescription: 'Thailand\'s cultural tapestry spans centuries of Buddhist tradition, royal heritage, and living artistry. Our culture companions are historians, artists, and locals who grew up immersed in these traditions. From the gilded spires of the Grand Palace to the quiet mountain temples of Chiang Mai, they reveal the stories that guidebooks miss.',
    color: 'hsl(270, 65%, 55%)',
    bgColor: 'hsl(270, 75%, 85%)',
    images: { hero: t1Hero, texture: t1Texture, aerial: t1Aerial },
    video: pimCultureVideo,
    poster: pimCulturePoster,
    seo: {
      title: 'Culture Experiences in Thailand — Local Companions | Tirak',
      description: 'Join verified local companions for cultural immersion: temples, traditions, markets, and heritage across Thailand.',
      canonical: 'https://tirak.app/culture',
    },
    stats: [
      { label: 'Companions', value: '2' },
      { label: 'Locations', value: '4' },
      { label: 'Avg Rating', value: '4.95' },
    ],
    experiences: [
      { icon: Landmark, title: 'Temple Pilgrimages', description: 'Visit sacred wat complexes with guides who explain Buddhist iconography and meditation practices.' },
      { icon: BookOpen, title: 'Heritage Walking Tours', description: 'Stroll through historic quarters and night markets learning centuries of local history.' },
      { icon: Palette, title: 'Traditional Arts & Crafts', description: 'Try silk weaving, batik painting, and traditional Thai pottery with master artisans.' },
      { icon: MapPin, title: 'Hidden Local Markets', description: 'Discover neighborhood markets where locals shop, away from tourist crowds.' },
      { icon: Music2, title: 'Classical Thai Music', description: 'Attend traditional performances and learn about ancient instruments and dance forms.' },
      { icon: Compass, title: 'Ancient Capital Visits', description: 'Explore Ayutthaya and Sukhothai ruins with companions who bring history alive.' },
    ],
    companionIds: [1, 2],
    testimonial: {
      quote: 'Pim turned what could have been a tourist trap into one of the most meaningful days of my life. She knew every story behind every detail at the Grand Palace.',
      author: 'Sarah M.',
      country: 'United Kingdom',
    },
  },

  adventure: {
    id: 'adventure',
    slug: 'adventure',
    name: 'Adventure',
    title: 'Adventure Experiences',
    heroDescription: 'Hiking, water sports, and outdoor thrills led by local companions who know the terrain and hidden trails.',
    overviewDescription: 'Thailand\'s dramatic geography — limestone karsts, jungle canopies, coral reefs, and volcanic hot springs — is an adventure playground. Our companions are certified divers, experienced trekkers, and lifelong outdoor enthusiasts who know the safest and most thrilling routes, from Phi Phi\'s underwater caves to Doi Inthanon\'s summit trails.',
    color: 'hsl(210, 70%, 50%)',
    bgColor: 'hsl(210, 80%, 85%)',
    images: { hero: t2Hero, texture: t2Texture, aerial: t2Aerial },
    video: maleeIslandVideo,
    poster: maleeIslandPoster,
    seo: {
      title: 'Adventure Experiences in Thailand — Local Companions | Tirak',
      description: 'Join verified local companions for hiking, water sports, and outdoor adventures across Thailand.',
      canonical: 'https://tirak.app/adventure',
    },
    stats: [
      { label: 'Companions', value: '2' },
      { label: 'Locations', value: '5' },
      { label: 'Avg Rating', value: '4.85' },
    ],
    experiences: [
      { icon: Mountain, title: 'Jungle Trekking', description: 'Multi-day hikes through pristine rainforest with expert guides and wild camping.' },
      { icon: Waves, title: 'Scuba & Snorkeling', description: 'Dive coral reefs and swim with whale sharks alongside certified local instructors.' },
      { icon: TreePine, title: 'National Park Expeditions', description: 'Explore Khao Sok, Erawan Falls, and other protected wilderness areas.' },
      { icon: Bike, title: 'Mountain Biking', description: 'Ride single-track trails through rice paddies and hillside villages in northern Thailand.' },
      { icon: Anchor, title: 'Rock Climbing', description: 'Scale Railay Beach\'s famous limestone cliffs with experienced belayers and local climbers.' },
      { icon: Ship, title: 'Island Hopping', description: 'Charter longtail boats through the Andaman Sea to hidden beaches and secret lagoons.' },
    ],
    companionIds: [3, 4],
    testimonial: {
      quote: 'Malee took us to diving spots that the tourist boats don\'t know about. We saw a manta ray and a reef shark in the same dive. Absolutely life-changing.',
      author: 'James T.',
      country: 'Australia',
    },
  },

  wellness: {
    id: 'wellness',
    slug: 'wellness',
    name: 'Wellness',
    title: 'Wellness Experiences',
    heroDescription: 'Spa retreats, yoga sessions, and mindful journeys with wellness companions who nurture body and spirit.',
    overviewDescription: 'Thailand is the global destination for wellness — from ancient Nuad Thai massage to silent vipassana retreats in forest monasteries. Our wellness companions are certified therapists, yoga instructors, and meditation practitioners who create bespoke healing journeys, whether you need a weekend reset or a month-long transformation.',
    color: 'hsl(155, 65%, 45%)',
    bgColor: 'hsl(155, 75%, 80%)',
    images: { hero: t3Hero, texture: t3Texture, aerial: t3Aerial },
    video: sudaSpaVideo,
    poster: sudaSpaPoster,
    seo: {
      title: 'Wellness Experiences in Thailand — Local Companions | Tirak',
      description: 'Rejuvenate with spa treatments, yoga, and meditation led by local wellness companions.',
      canonical: 'https://tirak.app/wellness',
    },
    stats: [
      { label: 'Companions', value: '2' },
      { label: 'Locations', value: '4' },
      { label: 'Avg Rating', value: '4.90' },
    ],
    experiences: [
      { icon: Flower2, title: 'Thai Spa Retreats', description: 'Full-day pampering at world-class spas with herbal compresses and aromatherapy.' },
      { icon: Heart, title: 'Yoga & Breathwork', description: 'Sunrise yoga on the beach, sunset sessions in jungle studios, and guided pranayama.' },
      { icon: Leaf, title: 'Meditation Retreats', description: 'Guided vipassana and mindfulness retreats at forest monasteries in Chiang Mai.' },
      { icon: Sparkles, title: 'Traditional Thai Massage', description: 'Learn the art of Nuad Thai from masters, or simply receive a restorative session.' },
      { icon: Sun, title: 'Detox & Cleanse Programs', description: 'Structured fasting and cleansing programs at certified wellness centers.' },
      { icon: Moon, title: 'Sound Healing Journeys', description: 'Crystal bowls, gongs, and Tibetan singing bowls in serene temple settings.' },
    ],
    companionIds: [5, 6],
    testimonial: {
      quote: 'Suda designed a three-day retreat that was exactly what I needed — morning meditation, afternoon spa, evening yoga by the river. I left feeling completely renewed.',
      author: 'Elena R.',
      country: 'Germany',
    },
  },

  nightlife: {
    id: 'nightlife',
    slug: 'nightlife',
    name: 'Nightlife',
    title: 'Nightlife Experiences',
    heroDescription: 'Rooftop bars, beach clubs, and after-dark adventures with local guides who know every hidden venue.',
    overviewDescription: 'Bangkok\'s skyline bars, Phuket\'s beach clubs, and Chiang Mai\'s jazz lounges make Thailand one of Asia\'s most electric nightlife destinations. Our nightlife companions know the door staff, the best tables, the secret speakeasies, and the late-night street food spots that fuel the next round.',
    color: 'hsl(340, 70%, 55%)',
    bgColor: 'hsl(340, 80%, 85%)',
    images: { hero: t4Hero, texture: t4Texture, aerial: t4Aerial },
    video: tunRooftopVideo,
    poster: tunRooftopPoster,
    seo: {
      title: 'Nightlife Experiences in Thailand — Local Companions | Tirak',
      description: 'Experience Thailand\'s vibrant nightlife with local companions who know the best spots.',
      canonical: 'https://tirak.app/nightlife',
    },
    stats: [
      { label: 'Companions', value: '2' },
      { label: 'Locations', value: '6' },
      { label: 'Avg Rating', value: '4.80' },
    ],
    experiences: [
      { icon: PartyPopper, title: 'Rooftop Bar Crawls', description: 'Hit Bangkok\'s iconic skyline bars with a local who gets you the best views and skip the queues.' },
      { icon: Martini, title: 'Speakeasy Discovery', description: 'Find hidden cocktail bars behind unmarked doors — places only locals know exist.' },
      { icon: Headphones, title: 'DJ & Club Nights', description: 'VIP access to top clubs and underground electronic music events across Bangkok and Phuket.' },
      { icon: Mic2, title: 'Live Music Venues', description: 'Jazz bars, indie stages, and traditional Thai music performances in intimate settings.' },
      { icon: Stars, title: 'Beach Club Parties', description: 'Full-moon beach parties, sunset DJ sets, and pool parties on the Andaman coast.' },
      { icon: Zap, title: 'Late Night Street Food', description: 'Fuel up at the 2am noodle stalls and night markets that Bangkok\'s party-goers swear by.' },
    ],
    companionIds: [7, 8],
    testimonial: {
      quote: 'Tun got us into a speakeasy I would never have found on my own — behind a barbershop in Thonglor. Best old-fashioned I\'ve ever had.',
      author: 'Marco P.',
      country: 'Italy',
    },
  },

  lifestyle: {
    id: 'lifestyle',
    slug: 'lifestyle',
    name: 'Lifestyle',
    title: 'Lifestyle Experiences',
    heroDescription: 'Shopping districts, local boutiques, and everyday Thai life with companions who curate your perfect day.',
    overviewDescription: 'Bangkok is a lifestyle capital — from the vintage shophouses of Charoen Krung to the concept malls of Sukhumvit, from co-working cafes in Ari to bespoke tailoring in Silom. Our lifestyle companions are creatives, fashionistas, and city insiders who know where to find the best of modern Thai living.',
    color: 'hsl(35, 75%, 50%)',
    bgColor: 'hsl(35, 85%, 80%)',
    images: { hero: t5Hero, aerial: t5Aerial },
    video: daoBeachVideo,
    poster: daoBeachPoster,
    seo: {
      title: 'Lifestyle Experiences in Thailand — Local Companions | Tirak',
      description: 'Shop, explore, and experience local lifestyle with Thai companions.',
      canonical: 'https://tirak.app/lifestyle',
    },
    stats: [
      { label: 'Companions', value: '2' },
      { label: 'Locations', value: '3' },
      { label: 'Avg Rating', value: '4.85' },
    ],
    experiences: [
      { icon: ShoppingBag, title: 'Boutique Shopping Tours', description: 'Curated walks through independent Thai designer shops and vintage concept stores.' },
      { icon: Coffee, title: 'Specialty Coffee Crawls', description: 'Explore Bangkok\'s thriving third-wave coffee scene with a local cafe connoisseur.' },
      { icon: Camera, title: 'Street Photography Walks', description: 'Capture the city\'s beauty — pastel shophouses, golden temples, and neon-lit alleys.' },
      { icon: Gem, title: 'Bespoke Tailoring', description: 'Get measured for custom suits and silk garments at trusted local tailors.' },
      { icon: Paintbrush, title: 'Art Gallery Hopping', description: 'Visit Bangkok\'s contemporary art spaces, from BACC to hidden Chinatown studios.' },
      { icon: Globe, title: 'Expat Neighborhood Tours', description: 'Discover the neighborhoods where digital nomads and creatives build their Thai lives.' },
    ],
    companionIds: [9, 10],
    testimonial: {
      quote: 'Prae showed me a side of Bangkok I didn\'t know existed — independent Thai designers, third-wave coffee shops, and an art gallery hidden above a noodle shop.',
      author: 'Yuki N.',
      country: 'Japan',
    },
  },

  cinema: {
    id: 'cinema',
    slug: 'cinema',
    name: 'Cinema',
    title: 'Cinema & Film Experiences',
    heroDescription: 'Film locations, indie theaters, and movie nights with local cinephiles who share their passion for the screen.',
    overviewDescription: 'Thailand\'s film scene spans from Apichatpong Weerasethakul\'s Palme d\'Or-winning art-house cinema to the stunning locations of Hollywood blockbusters. Our cinema companions are directors, critics, and film buffs who take you behind the camera — from Bangkok\'s vintage screening rooms to the Chiang Mai locations of your favorite films.',
    color: 'hsl(250, 65%, 55%)',
    bgColor: 'hsl(250, 75%, 85%)',
    images: { hero: t6Hero, texture: t6Texture, aerial: t6Aerial },
    video: somCookingVideo,
    poster: somCookingPoster,
    seo: {
      title: 'Cinema & Film Experiences in Thailand — Local Companions | Tirak',
      description: 'Explore film locations and cinema culture with local companions.',
      canonical: 'https://tirak.app/cinema',
    },
    stats: [
      { label: 'Companions', value: '2' },
      { label: 'Locations', value: '3' },
      { label: 'Avg Rating', value: '4.75' },
    ],
    experiences: [
      { icon: Film, title: 'Film Location Tours', description: 'Visit the beaches, temples, and cityscapes featured in international and Thai films.' },
      { icon: Clapperboard, title: 'Thai Cinema History', description: 'Learn about Thailand\'s Golden Age of cinema and its modern indie film renaissance.' },
      { icon: Popcorn, title: 'Vintage Screening Rooms', description: 'Watch classic Thai and international films in beautifully preserved retro cinemas.' },
      { icon: Theater, title: 'Independent Film Festivals', description: 'Attend Bangkok\'s underground film events and Chiang Mai documentary screenings.' },
      { icon: Projector, title: 'Outdoor Cinema Nights', description: 'Open-air screenings in tropical gardens and rooftop venues across the city.' },
      { icon: Monitor, title: 'Behind-the-Scenes Tours', description: 'Visit studios, meet local filmmakers, and see how Thai productions come together.' },
    ],
    companionIds: [11, 12],
    testimonial: {
      quote: 'Nat took us to the exact beach from "The Beach" and then to a rooftop screening of a Thai film I\'d never heard of but absolutely loved.',
      author: 'David L.',
      country: 'Canada',
    },
  },

  events: {
    id: 'events',
    slug: 'events',
    name: 'Events',
    title: 'Events & Festivals',
    heroDescription: 'Beach parties, cultural festivals, and unforgettable events with local guides who bring the spectacle to life.',
    overviewDescription: 'Thailand\'s calendar is packed with spectacle — from the sky lanterns of Yi Peng to the water fights of Songkran, from Muay Thai championships to full-moon beach parties. Our events companions are festival veterans, sports insiders, and cultural experts who get you the best experience, not just a ticket.',
    color: 'hsl(15, 75%, 55%)',
    bgColor: 'hsl(15, 85%, 80%)',
    images: { hero: t7Hero, texture: t7Texture, aerial: t7Aerial },
    video: tonPartyVideo,
    poster: tonPartyPoster,
    seo: {
      title: 'Events in Thailand — Local Companions | Tirak',
      description: 'Experience festivals, parties, and cultural events with local companions.',
      canonical: 'https://tirak.app/events',
    },
    stats: [
      { label: 'Companions', value: '2' },
      { label: 'Locations', value: '5' },
      { label: 'Avg Rating', value: '4.85' },
    ],
    experiences: [
      { icon: CalendarDays, title: 'Festival Immersion', description: 'Experience Songkran, Loy Krathong, and Yi Peng with locals who explain every tradition.' },
      { icon: Flame, title: 'Muay Thai Events', description: 'Ringside seats at authentic Muay Thai stadiums with companions who know the fighters.' },
      { icon: Trophy, title: 'Sporting Events', description: 'Thai boxing, boat racing, and local sporting events that tourists rarely discover.' },
      { icon: Ticket, title: 'Concert & Live Shows', description: 'Access to Thai pop, rock, and traditional performance events across the country.' },
      { icon: Flag, title: 'Cultural Ceremonies', description: 'Witness royal processions, monk ordinations, and village celebrations firsthand.' },
      { icon: Sparkle, title: 'Full Moon & Beach Parties', description: 'The legendary Koh Phangan parties with a local who knows the safest and best spots.' },
    ],
    companionIds: [13, 14],
    testimonial: {
      quote: 'Joy got us front-row at a Muay Thai championship in Lumpinee Stadium and explained every move. Then we released lanterns at Yi Peng. Best weekend of my life.',
      author: 'Carlos G.',
      country: 'Spain',
    },
  },

  fooddrink: {
    id: 'fooddrink',
    slug: 'food',
    name: 'Food & Drink',
    title: 'Food & Drink Experiences',
    heroDescription: 'Street food tours, cooking classes, and culinary adventures with local companions who live to eat.',
    overviewDescription: 'Thai cuisine is the world\'s most complex and beloved street food culture — and it goes far deeper than pad thai. Our food companions are chefs, market vendors, and obsessive food hunters who take you from smoky wok stations in Chinatown to Michelin-starred street stalls, from hands-on cooking classes to secret family recipes passed down for generations.',
    color: 'hsl(45, 85%, 55%)',
    bgColor: 'hsl(45, 90%, 80%)',
    images: { hero: t8Hero, texture: t8Texture, aerial: t8Aerial },
    video: niranStreetfoodVideo,
    poster: niranStreetfoodPoster,
    seo: {
      title: 'Food & Drink Experiences in Thailand — Local Companions | Tirak',
      description: 'Discover authentic Thai cuisine with local food companions.',
      canonical: 'https://tirak.app/food',
    },
    stats: [
      { label: 'Companions', value: '2' },
      { label: 'Locations', value: '4' },
      { label: 'Avg Rating', value: '4.95' },
    ],
    experiences: [
      { icon: UtensilsCrossed, title: 'Street Food Tours', description: 'Navigate Bangkok\'s legendary street food scene — from Yaowarat to Victory Monument — with a local expert.' },
      { icon: ChefHat, title: 'Cooking Classes', description: 'Learn to make authentic pad kra pao, tom yum, and mango sticky rice from Thai home cooks.' },
      { icon: Wine, title: 'Craft Cocktail Tours', description: 'Discover Thailand\'s craft spirits scene — local rum, rice whiskey, and tropical infusions.' },
      { icon: CookingPot, title: 'Market-to-Table Meals', description: 'Shop for ingredients at a morning market, then cook and eat together at a local home.' },
      { icon: Soup, title: 'Regional Cuisine Deep-Dives', description: 'Explore Isaan, Southern, and Northern Thai flavors that differ dramatically from Bangkok standards.' },
      { icon: IceCream, title: 'Dessert & Sweets Tours', description: 'Thai desserts are an art form — discover mango sticky rice, roti, and coconut ice cream stalls.' },
    ],
    companionIds: [15, 16],
    testimonial: {
      quote: 'Niran took us to a 70-year-old noodle stall hidden behind a temple that had the best boat noodles I\'ve ever tasted. No guidebook has this place.',
      author: 'Lisa K.',
      country: 'United States',
    },
  },
};
