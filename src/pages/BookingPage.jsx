import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';
import Stars from '../components/Stars.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import { getDestination } from '../data/destinations.js';
import {
  formatPrice,
  formatPriceExact,
  formatDateLong,
  todayISO,
  addDaysISO,
  saveBooking,
  makeReference,
} from '../utils/helpers.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CHILD_FARE_RATIO = 0.6;
const SERVICE_FEE_RATIO = 0.08;

function Stepper({ label, hint, value, min, max, onChange }) {
  const btn =
    'flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-lg font-semibold text-ink transition-colors hover:border-lagoon-700 hover:text-lagoon-700 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink/20 disabled:hover:text-ink';
  return (
    <div className="flex items-center justify-between rounded-xl border border-ink/10 bg-white p-4">
      <div>
        <p className="font-medium text-ink">{label}</p>
        <p className="text-xs text-ink/55">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          disabled={value <= min}
          onClick={() => onChange(value - 1)}
          className={btn}
        >
          &minus;
        </button>
        <span className="w-6 text-center font-semibold text-ink" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          aria-label={`Increase ${label}`}
          disabled={value >= max}
          onClick={() => onChange(value + 1)}
          className={btn}
        >
          +
        </button>
      </div>
    </div>
  );
}

const inputClass =
  'w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-lagoon-600 focus:outline-none focus:ring-2 focus:ring-lagoon-200';

function FieldError({ message }) {
  if (!message) {
    return null;
  }
  return <p className="mt-1.5 text-xs text-red-600">{message}</p>;
}

function BookingPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const destination = getDestination(slug);

  const [step, setStep] = useState(1);
  const [departure, setDeparture] = useState(() => addDaysISO(30));
  const [returnDate, setReturnDate] = useState(() => addDaysISO(30 + 7));
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [requests, setRequests] = useState('');
  const [errors, setErrors] = useState({});

  if (!destination) {
    return <NotFoundPage />;
  }

  const adultPrice = destination.price;
  const childPrice = Math.round(destination.price * CHILD_FARE_RATIO);
  const subtotal = adults * adultPrice + children * childPrice;
  const serviceFee = subtotal * SERVICE_FEE_RATIO;
  const total = subtotal + serviceFee;

  function validateStep1() {
    const next = {};
    const today = todayISO();
    if (!departure) {
      next.departure = 'Please choose a departure date.';
    } else if (departure < today) {
      next.departure = 'Departure date cannot be in the past.';
    }
    if (!returnDate) {
      next.returnDate = 'Please choose a return date.';
    } else if (departure && returnDate <= departure) {
      next.returnDate = 'Return date must be after the departure date.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function validateStep2() {
    const next = {};
    if (name.trim().length < 2) {
      next.name = 'Please enter your full name.';
    }
    if (!EMAIL_RE.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (phone.replace(/\D/g, '').length < 7) {
      next.phone = 'Please enter a valid phone number.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (step === 1 && validateStep1()) {
      setStep(2);
      window.scrollTo(0, 0);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      window.scrollTo(0, 0);
    }
  }

  function goBack() {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo(0, 0);
  }

  function confirmBooking() {
    const reference = makeReference();
    saveBooking({
      reference,
      destinationSlug: destination.slug,
      destinationName: destination.name,
      destinationCountry: destination.country,
      image: destination.image,
      durationDays: destination.durationDays,
      departure,
      returnDate,
      adults,
      children,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      requests: requests.trim(),
      adultPrice,
      childPrice,
      serviceFee: Number(serviceFee.toFixed(2)),
      total: Number(total.toFixed(2)),
      createdAt: new Date().toISOString(),
    });
    navigate(`/booking/confirmed/${reference}`);
  }

  const steps = ['Dates & travellers', 'Your details', 'Review & confirm'];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-700">
          Booking
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
          {destination.name}
        </h1>
        <p className="mt-2 flex items-center gap-2 text-sm text-ink/60">
          <Stars value={destination.rating} />
          {destination.rating.toFixed(1)} &middot; {destination.country} &middot;{' '}
          {destination.durationDays} days
        </p>
      </Reveal>

      {/* Step indicator */}
      <ol className="mt-8 flex items-center gap-2 sm:gap-4" aria-label="Booking progress">
        {steps.map((label, i) => {
          const n = i + 1;
          const active = n === step;
          const done = n < step;
          return (
            <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                  done
                    ? 'bg-lagoon-700 text-white'
                    : active
                      ? 'bg-lagoon-700 text-white ring-4 ring-lagoon-200'
                      : 'bg-ink/10 text-ink/50'
                }`}
                aria-current={active ? 'step' : undefined}
              >
                {done ? (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4L9 11.6l5.3-5.3a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  n
                )}
              </span>
              <span className={`hidden text-sm font-medium sm:block ${active ? 'text-ink' : 'text-ink/50'}`}>
                {label}
              </span>
              {n < steps.length && <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Form column */}
        <div className="lg:col-span-2">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:p-8"
          >
            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Dates &amp; travellers</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="departure" className="mb-1.5 block text-sm font-medium text-ink">
                      Departure date
                    </label>
                    <input
                      id="departure"
                      type="date"
                      value={departure}
                      min={todayISO()}
                      onChange={(e) => setDeparture(e.target.value)}
                      className={inputClass}
                    />
                    <FieldError message={errors.departure} />
                  </div>
                  <div>
                    <label htmlFor="return" className="mb-1.5 block text-sm font-medium text-ink">
                      Return date
                    </label>
                    <input
                      id="return"
                      type="date"
                      value={returnDate}
                      min={departure || todayISO()}
                      onChange={(e) => setReturnDate(e.target.value)}
                      className={inputClass}
                    />
                    <FieldError message={errors.returnDate} />
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <Stepper
                    label="Adults"
                    hint="Aged 18 and over"
                    value={adults}
                    min={1}
                    max={8}
                    onChange={setAdults}
                  />
                  <Stepper
                    label="Children"
                    hint="Aged 2–17, 40% off the adult fare"
                    value={children}
                    min={0}
                    max={6}
                    onChange={setChildren}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Your details</h2>
                <p className="mt-1 text-sm text-ink/60">
                  We will send your booking confirmation and travel documents here.
                </p>
                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="book-name" className="mb-1.5 block text-sm font-medium text-ink">
                      Full name
                    </label>
                    <input
                      id="book-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alexandra Smith"
                      autoComplete="name"
                      className={inputClass}
                    />
                    <FieldError message={errors.name} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="book-email" className="mb-1.5 block text-sm font-medium text-ink">
                        Email address
                      </label>
                      <input
                        id="book-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={inputClass}
                      />
                      <FieldError message={errors.email} />
                    </div>
                    <div>
                      <label htmlFor="book-phone" className="mb-1.5 block text-sm font-medium text-ink">
                        Phone number
                      </label>
                      <input
                        id="book-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 7700 900000"
                        autoComplete="tel"
                        className={inputClass}
                      />
                      <FieldError message={errors.phone} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="book-requests" className="mb-1.5 block text-sm font-medium text-ink">
                      Special requests <span className="font-normal text-ink/50">(optional)</span>
                    </label>
                    <textarea
                      id="book-requests"
                      value={requests}
                      onChange={(e) => setRequests(e.target.value)}
                      rows={4}
                      placeholder="Dietary requirements, accessibility needs, occasions you are celebrating…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Review &amp; confirm</h2>
                <p className="mt-1 text-sm text-ink/60">
                  Please check everything below before confirming your booking.
                </p>
                <dl className="mt-6 space-y-3 rounded-xl bg-sand-50 p-5 text-sm ring-1 ring-ink/5">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/55">Destination</dt>
                    <dd className="text-right font-medium text-ink">{destination.name}, {destination.country}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/55">Departure</dt>
                    <dd className="text-right font-medium text-ink">{formatDateLong(departure)}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/55">Return</dt>
                    <dd className="text-right font-medium text-ink">{formatDateLong(returnDate)}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/55">Travellers</dt>
                    <dd className="text-right font-medium text-ink">
                      {adults} {adults === 1 ? 'adult' : 'adults'}
                      {children > 0 && `, ${children} ${children === 1 ? 'child' : 'children'}`}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/55">Lead traveller</dt>
                    <dd className="text-right font-medium text-ink">{name}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/55">Email</dt>
                    <dd className="text-right font-medium text-ink">{email}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink/55">Phone</dt>
                    <dd className="text-right font-medium text-ink">{phone}</dd>
                  </div>
                  {requests.trim() && (
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink/55">Requests</dt>
                      <dd className="max-w-[60%] text-right font-medium text-ink">{requests}</dd>
                    </div>
                  )}
                </dl>
                <p className="mt-4 text-xs leading-relaxed text-ink/55">
                  By confirming you agree to our booking terms. No payment is taken now — this is a
                  demonstration booking flow, and your reservation is saved on this device only.
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
                >
                  Back
                </button>
              ) : (
                <Link
                  to={`/destinations/${destination.slug}`}
                  className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
                >
                  Back to trip
                </Link>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="rounded-full bg-lagoon-700 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={confirmBooking}
                  className="rounded-full bg-sand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-sand-600"
                >
                  Confirm booking
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Summary column */}
        <aside className="lg:col-span-1">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 lg:sticky lg:top-24">
            <div className="flex gap-4">
              <img
                src={destination.image}
                alt={destination.name}
                className="h-20 w-24 shrink-0 rounded-xl object-cover"
              />
              <div>
                <p className="font-display text-xl font-semibold text-ink">{destination.name}</p>
                <p className="text-xs text-ink/55">{destination.country} &middot; {destination.durationDays} days</p>
              </div>
            </div>
            <div className="mt-5 space-y-2.5 border-t border-ink/10 pt-5 text-sm">
              <p className="flex justify-between">
                <span className="text-ink/60">
                  {adults} &times; adult{adults === 1 ? '' : 's'}
                </span>
                <span className="font-medium text-ink">{formatPriceExact(adults * adultPrice)}</span>
              </p>
              {children > 0 && (
                <p className="flex justify-between">
                  <span className="text-ink/60">
                    {children} &times; {children === 1 ? 'child' : 'children'} (40% off)
                  </span>
                  <span className="font-medium text-ink">{formatPriceExact(children * childPrice)}</span>
                </p>
              )}
              <p className="flex justify-between">
                <span className="text-ink/60">Service fee (8%)</span>
                <span className="font-medium text-ink">{formatPriceExact(serviceFee)}</span>
              </p>
              <p className="flex justify-between border-t border-ink/10 pt-3 text-base">
                <span className="font-semibold text-ink">Total</span>
                <span className="font-display text-2xl font-semibold text-ink">{formatPriceExact(total)}</span>
              </p>
            </div>
            {departure && returnDate && (
              <p className="mt-4 rounded-xl bg-sand-50 p-3 text-xs leading-relaxed text-ink/65 ring-1 ring-ink/5">
                {formatDateLong(departure)} &rarr; {formatDateLong(returnDate)}
              </p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BookingPage;
