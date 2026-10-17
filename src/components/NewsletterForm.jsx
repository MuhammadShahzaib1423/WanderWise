import { useState } from 'react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-lagoon-800/60 p-6 text-center ring-1 ring-white/15">
        <p className="font-display text-xl text-white">You are on the list.</p>
        <p className="mt-2 text-sm text-sand-100/80">
          Thank you for subscribing — your first edition of The Wise Traveller arrives soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-sand-100/50 focus:border-lagoon-300 focus:outline-none focus:ring-2 focus:ring-lagoon-300/40"
        />
        <button
          type="submit"
          className="rounded-full bg-sand-400 px-7 py-3 text-sm font-semibold text-lagoon-950 transition-colors hover:bg-sand-300"
        >
          Subscribe
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
      <p className="mt-3 text-xs text-sand-100/60">
        One thoughtful email a month. No spam, unsubscribe any time.
      </p>
    </form>
  );
}

export default NewsletterForm;
