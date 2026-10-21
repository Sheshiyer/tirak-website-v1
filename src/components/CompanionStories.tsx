import { useState } from 'react';
import { Link } from 'react-router-dom';

const ideas = [
  { title: 'A morning of local culture', place: 'Culture', description: 'Build a day around temples, heritage walks or traditional crafts. Discuss the places you want to visit, opening hours and any admission costs before arranging an outing.' },
  { title: 'Explore through food', place: 'Food & Drink', description: 'Use markets and neighborhood dining as inspiration. Share dietary preferences and allergies with your guide, and agree on food costs and meeting arrangements in advance.' },
  { title: 'Plan time outdoors', place: 'Adventure', description: 'Consider walks, coastal scenery or water activities that suit your ability. Confirm conditions, equipment and any required qualifications before participating.' },
  { title: 'Make room for your interests', place: 'Lifestyle', description: 'Tell a guide what you enjoy, from cafes to music and local shopping. Check availability in the app and agree on the service details before making plans.' },
];

export default function CompanionStories() {
  const [currentIdea, setCurrentIdea] = useState(0);
  const idea = ideas[currentIdea];
  return <section className="py-16 sm:py-20 lg:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4 sm:space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter text-contrast leading-tight">Travel <span className="block sm:inline gradient-text sm:ml-4">Inspiration</span></h2>
        <p className="text-base sm:text-lg md:text-xl text-contrast-secondary leading-relaxed max-w-2xl mx-auto">Ideas for planning your own Thailand trip. These are editorial suggestions, not customer testimonials or confirmed bookings.</p>
      </div>
      <div className="max-w-5xl mx-auto glass-card p-6 sm:p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5 rounded-2xl sm:rounded-3xl" aria-hidden="true" />
        <div className="relative z-10">
          <p className="text-primary font-medium mb-4">{idea.place}</p>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">{idea.title}</h3>
          <p className="text-lg sm:text-xl text-contrast leading-relaxed max-w-3xl mx-auto">{idea.description}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-8" aria-label="Choose a travel idea">
            {ideas.map((item, index) => <button key={item.title} onClick={() => setCurrentIdea(index)} aria-pressed={currentIdea === index}
              className={`px-4 py-2 rounded-full text-sm focus-ring border transition-colors ${currentIdea === index ? 'bg-primary text-white border-primary' : 'border-white/20 hover:bg-white/10'}`}>{item.place}</button>)}
          </div>
        </div>
      </div>
      <div className="text-center mt-12 sm:mt-16">
        <p className="text-sm sm:text-base text-contrast-secondary mb-6">Check the app for current guide profiles and service availability.</p>
        <Link to="/download" className="inline-flex btn-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium focus-ring">Get Tirak</Link>
      </div>
    </div>
  </section>;
}
