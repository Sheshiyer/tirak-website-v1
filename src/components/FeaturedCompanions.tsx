import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { companions, companionCategories } from '@/lib/companions-data';

const categories = companionCategories;

const FeaturedCompanions = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filtered = activeCategory === 'All'
    ? companions
    : companions.filter((c) => c.category === activeCategory);

  const cardsPerView = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, filtered.length - cardsPerView);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || filtered.length <= cardsPerView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, maxIndex, cardsPerView, filtered.length]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    setIsAutoPlaying(false);
  }, [maxIndex]);

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1);

  const totalDots = Math.ceil(filtered.length / cardsPerView);

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-inter text-contrast leading-tight">
            Meet Our Local
            <span className="block sm:inline gradient-text sm:ml-4">Companions</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-contrast-secondary font-inter leading-relaxed max-w-2xl mx-auto">
            Top-rated guides across every experience — find your perfect match.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setIsAutoPlaying(true); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-white/10 text-contrast-secondary hover:bg-white/20 border border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrow Left */}
          {filtered.length > cardsPerView && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Previous companion"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Cards Container */}
          <div className="overflow-hidden mx-6 sm:mx-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {filtered.map((companion) => (
                <div
                  key={companion.id}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="group relative">
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-primary/5 to-primary/10">
                      <img
                        src={companion.image}
                        alt={`${companion.name} - Local guide in ${companion.location}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="800"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-sm font-medium">{companion.rating}</span>
                        </div>
                        <p className="text-sm">{companion.tagline} • {companion.reviews} reviews</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg">{companion.name}</h3>
                      <p className="text-muted-foreground flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {companion.location}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {companion.category}
                        </span>
                        {companion.verified && (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            Verified
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Right */}
          {filtered.length > cardsPerView && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Next companion"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Dots */}
        {totalDots > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i * cardsPerView)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  Math.floor(currentIndex / cardsPerView) === i
                    ? 'bg-primary w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="bg-button hover:shadow-glow text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
            View All Companions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanions;
