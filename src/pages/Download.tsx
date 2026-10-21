import { Link } from 'react-router-dom';
import { Smartphone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import Footer from '@/components/Footer';

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.tirak.pineapple';

export default function Download() {
  return <>
    <SEO title="Get Tirak — Android and iPhone Access"
      description="Open Tirak on Google Play or ask the team about current iPhone access options."
      canonical="https://tirak.app/download" />
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 pt-40 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 md:p-12">
          <div className="text-center mb-10">
            <Smartphone className="w-10 h-10 mx-auto mb-4 text-primary" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-inter font-bold text-contrast">Get Tirak</h1>
            <p className="text-xl text-text-secondary mt-4 max-w-2xl mx-auto">Explore Thailand through local connections. Choose your device’s store below.</p>
            <p className="text-sm text-text-secondary mt-3">Android availability varies by device and region. Ask us about current iPhone access.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="glass-card p-6 rounded-2xl flex flex-col gap-4" aria-labelledby="android-heading">
              <h2 id="android-heading" className="text-2xl font-semibold">Android</h2>
              <p className="text-text-secondary flex-1">Tirak has a public Google Play listing. Open the store to check compatibility and installation options.</p>
              <Button asChild className="focus-ring"><a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">View Tirak on Google Play <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" /></a></Button>
            </section>
            <section className="glass-card p-6 rounded-2xl flex flex-col gap-4" aria-labelledby="ios-heading">
              <h2 id="ios-heading" className="text-2xl font-semibold">iPhone and iPad</h2>
              <p className="text-text-secondary flex-1">A public App Store listing is not available through this site yet. Contact the Tirak team for current iPhone access options.</p>
              <Button asChild variant="outline" className="focus-ring"><Link to="/contact">Ask about iPhone access</Link></Button>
            </section>
          </div>
          <section className="mt-8 border-t border-white/10 pt-6" aria-labelledby="download-help-heading">
            <h2 id="download-help-heading" className="text-xl font-semibold">Need help getting started?</h2>
            <p className="text-text-secondary mt-3">If a store link is unavailable for your device or region, <Link className="underline focus-ring" to="/contact">contact the Tirak team</Link>. Include your device type and region; never send your password.</p>
            <p className="text-text-secondary mt-3">Want to offer local experiences? <Link className="underline focus-ring" to="/apply">Apply as a guide</Link>.</p>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </>;
}
