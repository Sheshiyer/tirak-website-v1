import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

const API_URL = import.meta.env.VITE_API_URL || 'https://tirak-backend.tirak-court.workers.dev';

const categories = [
  'Culture', 'Adventure', 'Wellness', 'Nightlife',
  'Lifestyle', 'Cinema', 'Events', 'Food & Drink',
];

const priceRanges = [
  { value: '1', label: '฿ (Budget-friendly)' },
  { value: '2', label: '฿฿ (Mid-range)' },
  { value: '3', label: '฿฿฿ (Premium)' },
  { value: '4', label: '฿฿฿฿ (Luxury)' },
];

interface FormData {
  brandName: string;
  regName: string;
  description: string;
  website: string;
  social: string;
  primaryCategory: string;
  priceRange: string;
  contactName: string;
  contactRole: string;
  email: string;
  phone: string;
  chatApp: string;
  chatId: string;
  address: string;
  mapsUrl: string;
  hours: string;
  taxId: string;
  consent: boolean;
}

const initialForm: FormData = {
  brandName: '',
  regName: '',
  description: '',
  website: '',
  social: '',
  primaryCategory: '',
  priceRange: '',
  contactName: '',
  contactRole: '',
  email: '',
  phone: '',
  chatApp: 'LINE',
  chatId: '',
  address: '',
  mapsUrl: '',
  hours: '',
  taxId: '',
  consent: false,
};

const SupplierOnboarding = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      toast({ title: 'Consent required', description: 'Please agree to be contacted before submitting.', variant: 'destructive' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/public/vendor-application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as any)?.error || 'Submission failed');
      }

      setSubmitted(true);
      toast({ title: "Application submitted!", description: "We'll review your application and get back to you soon." });
      setForm(initialForm);
    } catch (err: any) {
      toast({ title: 'Submission failed', description: err.message || 'Please try again.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <SEO
          title="Application Submitted — Supplier Onboarding | Tirak"
          description="Your vendor application has been submitted to the Tirak team."
          canonical="https://tirak.app/supplier-onboarding"
        />
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center py-20">
          <div className="glass-card rounded-2xl p-10 sm:p-14 border border-white/20">
            <div className="text-5xl mb-6">✅</div>
            <h1 className="text-3xl sm:text-4xl font-bold font-inter text-contrast mb-4">Application Submitted</h1>
            <p className="text-lg text-contrast-secondary mb-8">
              Thank you for applying to join Tirak! Our team will review your application and reach out within 2-3 business days.
            </p>
            <Button
              onClick={() => setSubmitted(false)}
              className="bg-button hover:shadow-glow text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            >
              Submit Another Application
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <SEO
        title="Become a Supplier — Join Tirak's Local Experience Network"
        description="Register as a vendor partner on Thailand's premier platform for curated travel and lifestyle experiences. Reach thousands of high-intent travelers."
        canonical="https://tirak.app/supplier-onboarding"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tirak.app/' },
            { '@type': 'ListItem', position: 2, name: 'Supplier Onboarding', item: 'https://tirak.app/supplier-onboarding' }
          ]
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-inter text-contrast leading-tight">
            Join
            <span className="gradient-text ml-3">Tirak</span>
          </h1>
          <p className="text-base sm:text-lg text-contrast-secondary font-inter leading-relaxed max-w-xl mx-auto">
            Thailand's premier platform for curated travel and lifestyle experiences. Register below to reach thousands of high-intent travelers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: The Basics */}
          <fieldset className="glass-card rounded-2xl p-6 sm:p-8 border border-white/20 space-y-5">
            <legend className="text-lg font-semibold gradient-text px-2">1. The Basics</legend>

            <div>
              <label htmlFor="brandName" className="block text-sm font-medium text-contrast mb-1.5">Trading / Brand Name *</label>
              <Input id="brandName" required placeholder="What do customers call you?" value={form.brandName} onChange={(e) => update('brandName', e.target.value)} className="glass-light" />
            </div>
            <div>
              <label htmlFor="regName" className="block text-sm font-medium text-contrast mb-1.5">Registered Company Name</label>
              <Input id="regName" placeholder="For legal and billing purposes" value={form.regName} onChange={(e) => update('regName', e.target.value)} className="glass-light" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-contrast mb-1.5">Brief Description of Services *</label>
              <textarea
                id="description"
                required
                placeholder="Tell us what makes your experience special..."
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                rows={3}
                className="w-full rounded-md border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-vertical"
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-contrast mb-1.5">Website URL</label>
              <Input id="website" type="url" placeholder="https://..." value={form.website} onChange={(e) => update('website', e.target.value)} className="glass-light" />
            </div>
            <div>
              <label htmlFor="social" className="block text-sm font-medium text-contrast mb-1.5">Primary Social Media Link</label>
              <Input id="social" type="url" placeholder="Instagram or Facebook URL" value={form.social} onChange={(e) => update('social', e.target.value)} className="glass-light" />
            </div>
          </fieldset>

          {/* Section 2: Categorization & Offering */}
          <fieldset className="glass-card rounded-2xl p-6 sm:p-8 border border-white/20 space-y-5">
            <legend className="text-lg font-semibold gradient-text px-2">2. Categorization & Offering</legend>

            <div>
              <label htmlFor="primaryCategory" className="block text-sm font-medium text-contrast mb-1.5">Primary Category *</label>
              <select
                id="primaryCategory"
                required
                value={form.primaryCategory}
                onChange={(e) => update('primaryCategory', e.target.value)}
                className="w-full rounded-md border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
              >
                <option value="" disabled>Select a category...</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="priceRange" className="block text-sm font-medium text-contrast mb-1.5">Price Range (Average Ticket Size) *</label>
              <select
                id="priceRange"
                required
                value={form.priceRange}
                onChange={(e) => update('priceRange', e.target.value)}
                className="w-full rounded-md border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
              >
                <option value="" disabled>Select price range...</option>
                {priceRanges.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
          </fieldset>

          {/* Section 3: Contact & Communication */}
          <fieldset className="glass-card rounded-2xl p-6 sm:p-8 border border-white/20 space-y-5">
            <legend className="text-lg font-semibold gradient-text px-2">3. Contact & Communication</legend>

            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-contrast mb-1.5">Primary Contact Person Name *</label>
              <Input id="contactName" required value={form.contactName} onChange={(e) => update('contactName', e.target.value)} className="glass-light" />
            </div>
            <div>
              <label htmlFor="contactRole" className="block text-sm font-medium text-contrast mb-1.5">Role / Title *</label>
              <Input id="contactRole" required placeholder="e.g., Owner, Marketing Manager" value={form.contactRole} onChange={(e) => update('contactRole', e.target.value)} className="glass-light" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-contrast mb-1.5">Contact Email Address *</label>
              <Input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="glass-light" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-contrast mb-1.5">Contact Phone Number *</label>
              <Input id="phone" type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} className="glass-light" />
            </div>
            <div>
              <label className="block text-sm font-medium text-contrast mb-2">Preferred Chat App</label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-contrast-secondary cursor-pointer">
                  <input type="radio" name="chatApp" value="LINE" checked={form.chatApp === 'LINE'} onChange={(e) => update('chatApp', e.target.value)} className="accent-primary" />
                  LINE
                </label>
                <label className="flex items-center gap-2 text-sm text-contrast-secondary cursor-pointer">
                  <input type="radio" name="chatApp" value="WhatsApp" checked={form.chatApp === 'WhatsApp'} onChange={(e) => update('chatApp', e.target.value)} className="accent-primary" />
                  WhatsApp
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="chatId" className="block text-sm font-medium text-contrast mb-1.5">Chat ID / Number *</label>
              <Input id="chatId" required placeholder="Enter your LINE ID or WhatsApp number" value={form.chatId} onChange={(e) => update('chatId', e.target.value)} className="glass-light" />
            </div>
          </fieldset>

          {/* Section 4: Location & Operations */}
          <fieldset className="glass-card rounded-2xl p-6 sm:p-8 border border-white/20 space-y-5">
            <legend className="text-lg font-semibold gradient-text px-2">4. Location & Operations</legend>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-contrast mb-1.5">Full Business Address *</label>
              <textarea
                id="address"
                required
                value={form.address}
                onChange={(e) => update('address', e.target.value)}
                rows={2}
                className="w-full rounded-md border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-vertical"
              />
            </div>
            <div>
              <label htmlFor="mapsUrl" className="block text-sm font-medium text-contrast mb-1.5">Google Maps Pin URL *</label>
              <Input id="mapsUrl" type="url" required placeholder="https://maps.app.goo.gl/..." value={form.mapsUrl} onChange={(e) => update('mapsUrl', e.target.value)} className="glass-light" />
            </div>
            <div>
              <label htmlFor="hours" className="block text-sm font-medium text-contrast mb-1.5">Operating Hours</label>
              <Input id="hours" placeholder="e.g., Mon-Sun, 9 AM - 6 PM" value={form.hours} onChange={(e) => update('hours', e.target.value)} className="glass-light" />
            </div>
          </fieldset>

          {/* Section 5: Verification */}
          <fieldset className="glass-card rounded-2xl p-6 sm:p-8 border border-white/20 space-y-5">
            <legend className="text-lg font-semibold gradient-text px-2">5. Verification</legend>

            <div>
              <label htmlFor="taxId" className="block text-sm font-medium text-contrast mb-1.5">Thai Business Registration (DBD) / Tax ID</label>
              <Input id="taxId" placeholder="Required for final verification" value={form.taxId} onChange={(e) => update('taxId', e.target.value)} className="glass-light" />
            </div>
          </fieldset>

          {/* Consent */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              checked={form.consent}
              onChange={(e) => update('consent', e.target.checked)}
              className="mt-1 accent-primary"
            />
            <label htmlFor="consent" className="text-sm text-contrast-secondary leading-relaxed">
              I agree to be contacted by the Tirak team regarding a vendor partnership and confirm the information provided is accurate.
            </label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-button hover:shadow-glow text-white font-semibold py-4 rounded-full transition-all duration-300 hover:scale-[1.02] text-base"
          >
            {loading ? 'Submitting...' : 'Submit Vendor Application'}
          </Button>
        </form>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default SupplierOnboarding;
