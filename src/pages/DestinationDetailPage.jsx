import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';
import Stars from '../components/Stars.jsx';
import Lightbox from '../components/Lightbox.jsx';
import DestinationCard from '../components/DestinationCard.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import {
  INCLUDED,
  EXCLUDED,
  getDestination,
  getRelatedDestinations,
} from '../data/destinations.js';
import { formatPrice } from '../utils/helpers.js';

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-lagoon-600" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-red-400" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.3 7.3a1 1 0 00-1.4 1.4L8.6 10l-1.7 1.3a1 1 0 101.4 1.4L10 11.4l1.7 1.3a1 1 0 001.4-1.4L11.4 10l1.7-1.3a1 1 0 00-1.4-1.4L10 8.6 8.3 7.3z" clipRule="evenodd" />
    </svg>
  );
}

function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = getDestination(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!destination) {
    return <NotFoundPage />;
  }

  const related = getRelatedDestinations(destination, 3);

  const gallery = [
    { src: destination.image, alt: `${destination.name}, ${destination.country}`, caption: `${destination.name} — ${destination.tagline}`, crop: 'object-center' },
    { src: destination.image, alt: `${destination.name} landscape detail`, caption: `${destination.name} — landscape detail`, crop: 'object-top' },
    { src: destination.image, alt: `${destination.name} scenic view`, caption: `${destination.name} — scenic view`, crop: 'object-bottom' },
    { src: destination.image, alt: `${destination.name} at golden hour`, caption: `${destination.name} — golden hour`, crop: 'object-left' },
  ];

  function navigateLightbox(direction) {
    setLightboxIndex((i) => (i + direction + gallery.length) % gallery.length);
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden">
        <img
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/30"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            All destinations
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-sand-200">
            {destination.region} &middot; {destination.country}
          </p>
          <h1 className="mt-2 font-display text-5xl font-semibold text-white sm:text-6xl">
            {destination.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-sand-100">
            <span className="flex items-center gap-2">
              <Stars value={destination.rating} />
              <span>{destination.rating.toFixed(1)} ({destination.reviewsCount} reviews)</span>
            </span>
            <span>{destination.durationDays} days</span>
            <span>
              From <span className="font-bold text-white">{formatPrice(destination.price)}</span> per person
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main column */}
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-ink">About this journey</h2>
              <p className="mt-4 leading-relaxed text-ink/75">{destination.description}</p>
            </Reveal>

            {/* Gallery */}
            <Reveal className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-ink">Gallery</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(0)}
                  className="group relative overflow-hidden rounded-2xl sm:col-span-3 sm:aspect-[21/9]"
                  aria-label="Open photo gallery"
                >
                  <img
                    src={gallery[0].src}
                    alt={gallery[0].alt}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors group-hover:bg-ink/25">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100">
                      View gallery
                    </span>
                  </span>
                </button>
                {gallery.slice(1).map((g, i) => (
                  <button
                    key={g.caption}
                    type="button"
                    onClick={() => setLightboxIndex(i + 1)}
                    className="group overflow-hidden rounded-2xl"
                    aria-label={`Open photo: ${g.caption}`}
                  >
                    <img
                      src={g.src}
                      alt={g.alt}
                      className={`aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105 ${g.crop}`}
                    />
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Highlights */}
            <Reveal className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-ink">Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {destination.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-ink/5">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed text-ink/80">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Itinerary */}
            <Reveal className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-ink">Day-by-day itinerary</h2>
              <ol className="mt-6 space-y-0">
                {destination.itinerary.map((item, i) => (
                  <li key={item.day} className="relative flex gap-5 pb-8 last:pb-0">
                    {i < destination.itinerary.length - 1 && (
                      <span className="absolute left-[22px] top-12 h-[calc(100%-3rem)] w-0.5 bg-lagoon-200" aria-hidden="true" />
                    )}
                    <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lagoon-700 font-display text-base font-semibold text-white">
                      {item.day}
                    </span>
                    <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/5 flex-1">
                      <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {destination.durationDays > destination.itinerary.length && (
                <p className="mt-4 text-sm italic text-ink/55">
                  The remaining {destination.durationDays - destination.itinerary.length}{' '}
                  {destination.durationDays - destination.itinerary.length === 1 ? 'day is' : 'days are'}{' '}
                  yours to enjoy at leisure.
                </p>
              )}
            </Reveal>

            {/* Included / excluded */}
            <Reveal className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-ink">What&rsquo;s included</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-lagoon-50 p-6 ring-1 ring-lagoon-100">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-lagoon-800">Included</h3>
                  <ul className="mt-3 space-y-2.5">
                    {INCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                        <CheckIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-sand-100 p-6 ring-1 ring-sand-200">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-sand-800">Not included</h3>
                  <ul className="mt-3 space-y-2.5">
                    {EXCLUDED.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                        <CrossIcon />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Reviews */}
            <Reveal className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-ink">Traveller reviews</h2>
              <div className="mt-4 space-y-4">
                {destination.reviews.map((review) => (
                  <figure key={review.name} className="rounded-2xl bg-white p-6 ring-1 ring-ink/5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Stars value={review.rating} />
                      <span className="text-xs text-ink/50">{review.date}</span>
                    </div>
                    <blockquote className="mt-3">
                      <p className="font-display text-lg font-semibold text-ink">&ldquo;{review.title}&rdquo;</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{review.text}</p>
                    </blockquote>
                    <figcaption className="mt-3 text-sm font-medium text-ink/60">
                      — {review.name}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-ink/5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">From</p>
                  <p className="mt-1 font-display text-4xl font-semibold text-ink">
                    {formatPrice(destination.price)}
                    <span className="font-sans text-sm font-normal text-ink/55"> per person</span>
                  </p>
                  <div className="mt-4 space-y-2 border-t border-ink/10 pt-4 text-sm text-ink/70">
                    <p className="flex justify-between"><span>Duration</span><span className="font-medium text-ink">{destination.durationDays} days</span></p>
                    <p className="flex justify-between"><span>Rating</span><span className="font-medium text-ink">{destination.rating.toFixed(1)} / 5</span></p>
                    <p className="flex justify-between"><span>Region</span><span className="font-medium text-ink">{destination.region}</span></p>
                  </div>
                  <Link
                    to={`/booking/${destination.slug}`}
                    className="mt-6 block rounded-full bg-lagoon-700 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
                  >
                    Book now
                  </Link>
                  <p className="mt-3 text-center text-xs text-ink/55">
                    Free cancellation within 48 hours of booking.
                  </p>
                </div>
              </Reveal>

              <Reveal className="mt-8" delay={0.1}>
                <h3 className="font-display text-2xl font-semibold text-ink">You may also like</h3>
                <div className="mt-4 space-y-4">
                  {related.map((d) => (
                    <Link
                      key={d.slug}
                      to={`/destinations/${d.slug}`}
                      className="group flex gap-4 rounded-2xl bg-white p-3 ring-1 ring-ink/5 transition-shadow hover:shadow-md"
                    >
                      <img
                        src={d.image}
                        alt={d.name}
                        loading="lazy"
                        className="h-20 w-24 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0">
                        <p className="truncate font-display text-lg font-semibold text-ink group-hover:text-lagoon-700">
                          {d.name}
                        </p>
                        <p className="text-xs text-ink/55">{d.country} &middot; {d.durationDays} days</p>
                        <p className="mt-1 text-sm font-semibold text-ink">{formatPrice(d.price)} <span className="font-normal text-ink/50">pp</span></p>
                      </div>
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={gallery}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={navigateLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default DestinationDetailPage;
