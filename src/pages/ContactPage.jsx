import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  'w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-lagoon-600 focus:outline-none focus:ring-2 focus:ring-lagoon-200';

function FieldError({ message }) {
  if (!message) {
    return null;
  }
  return <p className="mt-1.5 text-xs text-red-600">{message}</p>;
}

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General enquiry');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const next = {};
    if (name.trim().length < 2) {
      next.name = 'Please enter your full name.';
    }
    if (!EMAIL_RE.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (message.trim().length < 10) {
      next.message = 'Please tell us a little more (at least 10 characters).';
    }
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      window.scrollTo(0, 0);
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-700">
          We&rsquo;d love to hear from you
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
          Contact us
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
          Questions about a journey, an existing booking or a tailor-made idea? Send us a message
          and a travel designer will reply within one working day.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {sent ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-ink/5">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-lagoon-100 text-lagoon-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-7 w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink">Message sent</h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/65">
                Thank you, {name.split(' ')[0]}. Your enquiry about &ldquo;{subject}&rdquo; has been
                received — we&rsquo;ll reply to {email} within one working day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                  setSubject('General enquiry');
                }}
                className="mt-6 rounded-full border border-ink/20 px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alexandra Smith"
                    autoComplete="name"
                    className={inputClass}
                  />
                  <FieldError message={errors.name} />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={inputClass}
                  />
                  <FieldError message={errors.email} />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-ink">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={inputClass}
                >
                  <option>General enquiry</option>
                  <option>Existing booking</option>
                  <option>Tailor-made trip</option>
                  <option>Press &amp; partnerships</option>
                </select>
              </div>
              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
                  Your message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  placeholder="Tell us where you&rsquo;d like to go, when, and who&rsquo;s travelling…"
                  className={`${inputClass} resize-none`}
                />
                <FieldError message={errors.message} />
              </div>
              <button
                type="submit"
                className="mt-6 rounded-full bg-lagoon-700 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
              >
                Send message
              </button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-1">
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-lagoon-900 p-7 text-sand-100">
              <h2 className="font-display text-2xl font-semibold text-white">Visit or call</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <p className="font-semibold text-lagoon-300">Address</p>
                  <p className="mt-1 text-sand-100/80">14 Compass Quay<br />London E14 9QS</p>
                </li>
                <li>
                  <p className="font-semibold text-lagoon-300">Phone</p>
                  <p className="mt-1 text-sand-100/80">+44 20 7946 0000</p>
                </li>
                <li>
                  <p className="font-semibold text-lagoon-300">Email</p>
                  <p className="mt-1 text-sand-100/80">hello@wanderwise.example</p>
                </li>
                <li>
                  <p className="font-semibold text-lagoon-300">Opening hours</p>
                  <p className="mt-1 text-sand-100/80">Mon–Fri, 9am–6pm<br />Sat, 10am–4pm</p>
                </li>
              </ul>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}

export default ContactPage;
