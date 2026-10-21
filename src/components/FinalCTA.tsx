import InterestSignup from '@/components/InterestSignup';
import { MapPin, Shield, Heart } from 'lucide-react';
import aerialBg from '@/assets/t2.3.png';

const FinalCTA = () => {

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Atmospheric background */}
      <img
        src={aerialBg}
        alt="Aerial view of Thailand's Andaman coastline"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Headline */}
          <h2
            id="final-cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-inter text-white leading-tight mb-6"
          >
            Your Thailand story
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              starts here.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-lg mx-auto">
            Plan your Thailand trip, check app availability, or apply to share your local knowledge as a guide.
          </p>

          {/* Email signup */}
          <div className="mb-10"><InterestSignup source="final_cta_signup" /></div>

          {/* Honest trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary/70" />
              Guide applications reviewed
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary/70" />
              8 experience categories
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-primary/70" />
              Local connections
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
