import { useState } from 'react';
import { getCampaignAttribution } from '@/lib/acquisition';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { submitInterest, retrySavedInterestAttempt, startNewInterestAttempt, type InterestApiResult } from '@/lib/core-intake';

export default function InterestSignup({ source }: { source: 'hero_quick_signup' | 'final_cta_signup' | 'traveler_landing' }) {
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [reference, setReference] = useState('');
  const [error, setError] = useState('');
  const [needsRecovery, setNeedsRecovery] = useState(false);
  async function run(submit: () => Promise<InterestApiResult>) {
    setBusy(true); setError(''); setReference('');
    try {
      const result = await submit();
      if (result.ok === false) { setError(result.code === 'validation' ? 'Please check your email address and try again.' : result.code === 'payload_mismatch' ? 'A previous signup is still awaiting confirmation.' : 'Your signup could not be confirmed. Your email is still here; retry with the same details.'); setNeedsRecovery(result.code === 'payload_mismatch'); return; }
      setReference(result.data.interestId); setEmail(''); setNeedsRecovery(false);
    } catch { setError('Your signup could not be confirmed. Your email is still here; please retry.'); }
    finally { setBusy(false); }
  }
  return <div className="max-w-md mx-auto lg:mx-0 space-y-3">
    <p className="text-sm text-contrast-secondary">Get Tirak updates by email. This signup does not create an account or reserve a guide.</p>
    <form aria-label={source === 'hero_quick_signup' ? 'Get Tirak updates' : source === 'traveler_landing' ? 'Traveler email updates' : 'More Tirak updates'} onSubmit={e => { e.preventDefault(); void run(() => submitInterest({ email, source, attribution: getCampaignAttribution() })); }} className="flex flex-col sm:flex-row gap-3">
      <Input aria-label="Email for Tirak updates" type="email" autoComplete="email" maxLength={254} placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} disabled={busy} required className="h-12 text-base flex-1 glass-light" />
      <Button type="submit" disabled={busy} className="btn-primary h-12 px-6 whitespace-nowrap">{busy ? 'Submitting…' : 'Get Updates'}</Button>
    </form>
    {reference && <p role="status" className="text-sm break-all">Signup recorded. Reference: {reference}</p>}
    {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
    {needsRecovery && <div className="space-y-2 text-sm"><p>A previous signup is awaiting confirmation. Retry it first, or explicitly start a separate signup.</p><div className="flex flex-wrap gap-2">
      <Button type="button" variant="outline" disabled={busy} onClick={() => { void run(retrySavedInterestAttempt); }}>Retry Previous Signup</Button>
      <Button type="button" variant="outline" disabled={busy} onClick={() => { startNewInterestAttempt(); setNeedsRecovery(false); setError(''); }}>Start Separate Signup</Button>
    </div></div>}
  </div>;
}
