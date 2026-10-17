import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';
import Stars from '../components/Stars.jsx';
import DestinationCard from '../components/DestinationCard.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import { REGIONS, TESTIMONIALS, getFeaturedDestinations } from '../data/destinations.js';

function HeroSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('all');

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search.trim()) {
      params.set('search', search.trim());
    }
    if (region !== 'all') {
      params.set('region', region);
    }
    navigate(`/destinations?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-3 rounded-3xl bg-white/95 p-4 shadow-2xl backdrop-blur sm:flex-row sm:items-center sm:rounded-full sm:py-2 sm:pl-6 sm:pr-2"
    >
      <label htmlFor="hero-search" className="sr-only">
        Search destinations
      </label>
      <input
        id="hero-search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Where to? Try &ldquo;bay&rdquo;, &ldquo;dunes&rdquo;&hellip;"
        className="w-full flex-1 bg-transparent px-2 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
      />
      <label htmlFor="hero-region" className="sr-only">
        Region
      </label>
      <select
        id="hero-region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="w-full rounded-full border border-ink/10 bg-sand-50 px-4 py-2.5 text-sm text-ink focus:outline-none sm:w-48"
      >
        <option value="all">All regions</option>
        {REGIONS.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="rounded-full bg-lagoon-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
      >
        Search
      </button>
    </form>
  );
}

function FeaturedCarousel() {
  const trackRef = useRef(null);
  const featured = getFeaturedDestinations(4);

  function scrollByPage(direction) {
    const el = trackRef.current;
    if (el) {
      el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' });
    }
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        {featured.map((d, i) => (
          <div key={d.slug} className="w-[85%] shrink-0 snap-start sm:w-[47%] lg:w-[31.5%]">
            <DestinationCard destination={d} index={i} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Scroll featured destinations back"
          onClick={() => scrollByPage(-1)}
          className="rounded-full border border-ink/15 bg-white p-3 text-ink transition-colors hover:bg-lagoon-700 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Scroll featured destinations forward"
          onClick={() => scrollByPage(1)}
          className="rounded-full border border-ink/15 bg-white p-3 text-ink transition-colors hover:bg-lagoon-700 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

const STEPS = [
  {
    title: 'Find your journey',
    text: 'Browse our collection of hand-crafted itineraries, each one researched on the ground and refined over years.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
      </svg>
    ),
  },
  {
    title: 'Personalise your trip',
    text: 'Choose your dates and party size, tell us your preferences, and we will tailor the details around you.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    title: 'Travel with confidence',
    text: 'Every booking is financially protected, every guide is a local expert, and our team is on call throughout.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <motion.img
          src="/images/hero.jpg"
          alt="Turquoise bay beneath emerald cliffs at sunrise"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-ink/65" />

        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-sand-200"
          >
            Journeys worth remembering
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            Travel planned with care,
            <br />
            <span className="italic text-sand-200">remembered for a lifetime</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mx-auto mt-5 max-w-xl text-base text-sand-100/90 sm:text-lg"
          >
            Hand-crafted itineraries to eight extraordinary escapes — every detail arranged, every
            moment yours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HeroSearch />
          </motion.div>
        </div>
      </section>

      {/* Featured destinations */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-700">
                Traveller favourites
              </p>
              <h2 className="mt-2 font-display text-4xl font-semibold text-ink">
                Featured destinations
              </h2>
            </div>
            <Link
              to="/destinations"
              className="rounded-full border border-lagoon-700 px-5 py-2.5 text-sm font-semibold text-lagoon-700 transition-colors hover:bg-lagoon-700 hover:text-white"
            >
              View all eight
            </Link>
          </div>
        </Reveal>
        <div className="mt-8">
          <FeaturedCarousel />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-700">
              Effortless from start to finish
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-ink">How it works</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="relative rounded-2xl bg-sand-50 p-8 ring-1 ring-ink/5">
                  <span className="absolute right-6 top-5 font-display text-5xl font-semibold text-lagoon-100">
                    {i + 1}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lagoon-700 text-white">
                    {step.icon}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-700">
            Kind words
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-ink">
            What our travellers say
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-ink/5">
                <Stars value={t.rating} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/55">{t.trip}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-lagoon-900 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-300">
              The Wise Traveller
            </p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-white">
              Inspiration, once a month
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand-100/75">
              New itineraries, seasonal travel notes and subscriber-only offers — written by our
              travel designers, never by a mailing list machine.
            </p>
            <div className="mt-8">
              <NewsletterForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-sand-200 px-8 py-14 text-center sm:px-14">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-ink sm:text-4xl">
              Can&rsquo;t decide? Talk to someone who has been there.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
              Our travel designers have walked every trail and sailed every bay we sell. Tell us
              what you love, and we will point you the right way.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-lagoon-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
              >
                Contact us
              </Link>
              <Link
                to="/destinations"
                className="rounded-full border border-ink/20 bg-white px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
              >
                Browse destinations
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default HomePage;
