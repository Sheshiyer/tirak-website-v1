import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, MapPin, Shield, Heart } from 'lucide-react';
import aerialBg from '@/assets/t2.3.png';

const FinalCTA = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ title: 'Email required', description: 'Please enter a valid email.', variant: 'destructive' });
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      fd.set('email', email);
      fd.set('source', 'final_cta_signup');
      fd.set('_subject', 'Final CTA Signup');
      const res = await fetch('https://formspree.io/f/xeorzjly', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      });
      if (!res.ok) throw new Error('Signup failed');
      toast({ title: "You're on the list!", description: 'We will notify you at launch.' });
      setEmail('');
    } catch {
      toast({ title: 'Signup failed', description: 'Please try again.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

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
            Be among the first to connect with verified local companions for authentic experiences you won't find anywhere else.
          </p>

          {/* Email signup */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-13 text-base flex-1 bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-white/40 focus:border-primary/50 focus:ring-primary/20"
              required
            />
            <Button
              type="submit"
              disabled={loading}
              className="h-13 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-md hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 whitespace-nowrap"
            >
              {loading ? 'Joining...' : (
                <span className="flex items-center gap-2">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          {/* Honest trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary/70" />
              Verified guides
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary/70" />
              8 experience categories
            </span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-primary/70" />
              Launching 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
