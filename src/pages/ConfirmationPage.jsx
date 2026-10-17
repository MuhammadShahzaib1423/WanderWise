import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { getBooking, formatPriceExact, formatDateLong } from '../utils/helpers.js';

function ConfirmationPage() {
  const { reference } = useParams();
  const booking = getBooking(reference);

  if (!booking) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-4xl font-semibold text-ink">Booking not found</h1>
        <p className="mt-4 text-sm leading-relaxed text-ink/65">
          We couldn&rsquo;t find a booking with the reference{' '}
          <span className="font-mono font-semibold">{reference}</span> on this device. Bookings are
          saved in this browser only.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/destinations"
            className="rounded-full bg-lagoon-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
          >
            Browse destinations
          </Link>
          <Link
            to="/my-bookings"
            className="rounded-full border border-ink/20 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
          >
            My bookings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <Reveal className="text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lagoon-700 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-8 w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-5xl">
          Booking confirmed
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/65">
          Thank you, {booking.name.split(' ')[0]}. Your journey to {booking.destinationName} is
          reserved. A confirmation email is on its way to {booking.email}.
        </p>
        <div className="mx-auto mt-6 inline-block rounded-2xl bg-white px-8 py-4 shadow-sm ring-1 ring-ink/10">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">
            Booking reference
          </p>
          <p className="mt-1 font-mono text-3xl font-bold tracking-wider text-lagoon-800">
            {booking.reference}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
          <img
            src={booking.image}
            alt={booking.destinationName}
            className="h-52 w-full object-cover"
          />
          <dl className="grid gap-x-8 gap-y-4 p-6 text-sm sm:grid-cols-2 sm:p-8">
            <div>
              <dt className="text-ink/50">Destination</dt>
              <dd className="mt-0.5 font-medium text-ink">
                {booking.destinationName}, {booking.destinationCountry}
              </dd>
            </div>
            <div>
              <dt className="text-ink/50">Duration</dt>
              <dd className="mt-0.5 font-medium text-ink">{booking.durationDays} days</dd>
            </div>
            <div>
              <dt className="text-ink/50">Departure</dt>
              <dd className="mt-0.5 font-medium text-ink">{formatDateLong(booking.departure)}</dd>
            </div>
            <div>
              <dt className="text-ink/50">Return</dt>
              <dd className="mt-0.5 font-medium text-ink">{formatDateLong(booking.returnDate)}</dd>
            </div>
            <div>
              <dt className="text-ink/50">Travellers</dt>
              <dd className="mt-0.5 font-medium text-ink">
                {booking.adults} {booking.adults === 1 ? 'adult' : 'adults'}
                {booking.children > 0 &&
                  `, ${booking.children} ${booking.children === 1 ? 'child' : 'children'}`}
              </dd>
            </div>
            <div>
              <dt className="text-ink/50">Total paid</dt>
              <dd className="mt-0.5 font-display text-xl font-semibold text-ink">
                {formatPriceExact(booking.total)}
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/my-bookings"
          className="rounded-full bg-lagoon-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
        >
          View my bookings
        </Link>
        <Link
          to="/destinations"
          className="rounded-full border border-ink/20 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
        >
          Plan another trip
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationPage;
