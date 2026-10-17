import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import {
  loadBookings,
  removeBooking,
  formatPriceExact,
  formatDateShort,
} from '../utils/helpers.js';

function MyBookingsPage() {
  const [bookings, setBookings] = useState(() => loadBookings());
  const [confirming, setConfirming] = useState(null);

  function handleCancel(reference) {
    removeBooking(reference);
    setBookings(loadBookings());
    setConfirming(null);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-700">
          Your reservations
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
          My bookings
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
          Bookings made on this device are listed below. Keep your booking reference handy — you
          will need it if you contact us about a reservation.
        </p>
      </Reveal>

      {bookings.length === 0 ? (
        <div className="mt-10 rounded-2xl bg-white p-14 text-center ring-1 ring-ink/5">
          <p className="font-display text-2xl font-semibold text-ink">No bookings yet</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink/60">
            When you book a journey it will appear here, ready to manage whenever you like.
          </p>
          <Link
            to="/destinations"
            className="mt-6 inline-block rounded-full bg-lagoon-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
          >
            Browse destinations
          </Link>
        </div>
      ) : (
        <div className="mt-10 space-y-5">
          {bookings.map((b, i) => (
            <Reveal key={b.reference} delay={Math.min(i * 0.06, 0.2)}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5">
                <div className="flex flex-col sm:flex-row">
                  <img
                    src={b.image}
                    alt={b.destinationName}
                    className="h-44 w-full object-cover sm:h-auto sm:w-56"
                  />
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-ink">
                          {b.destinationName}
                        </h2>
                        <p className="mt-0.5 text-sm text-ink/55">
                          {b.destinationCountry} &middot; {b.durationDays} days
                        </p>
                      </div>
                      <span className="rounded-full bg-lagoon-100 px-3 py-1 text-xs font-semibold text-lagoon-800">
                        Confirmed
                      </span>
                    </div>

                    <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                      <div className="flex justify-between sm:block">
                        <dt className="text-ink/50">Reference</dt>
                        <dd className="font-mono font-semibold text-ink">{b.reference}</dd>
                      </div>
                      <div className="flex justify-between sm:block">
                        <dt className="text-ink/50">Total</dt>
                        <dd className="font-semibold text-ink">{formatPriceExact(b.total)}</dd>
                      </div>
                      <div className="flex justify-between sm:block">
                        <dt className="text-ink/50">Departure</dt>
                        <dd className="font-medium text-ink">{formatDateShort(b.departure)}</dd>
                      </div>
                      <div className="flex justify-between sm:block">
                        <dt className="text-ink/50">Return</dt>
                        <dd className="font-medium text-ink">{formatDateShort(b.returnDate)}</dd>
                      </div>
                      <div className="flex justify-between sm:block">
                        <dt className="text-ink/50">Travellers</dt>
                        <dd className="font-medium text-ink">
                          {b.adults} {b.adults === 1 ? 'adult' : 'adults'}
                          {b.children > 0 && `, ${b.children} ${b.children === 1 ? 'child' : 'children'}`}
                        </dd>
                      </div>
                      <div className="flex justify-between sm:block">
                        <dt className="text-ink/50">Lead traveller</dt>
                        <dd className="font-medium text-ink">{b.name}</dd>
                      </div>
                    </dl>

                    <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-4">
                      <Link
                        to={`/booking/confirmed/${b.reference}`}
                        className="rounded-full border border-lagoon-700 px-5 py-2 text-sm font-semibold text-lagoon-700 transition-colors hover:bg-lagoon-700 hover:text-white"
                      >
                        View confirmation
                      </Link>
                      {confirming === b.reference ? (
                        <span className="flex items-center gap-2 text-sm">
                          <span className="text-ink/60">Cancel this booking?</span>
                          <button
                            type="button"
                            onClick={() => handleCancel(b.reference)}
                            className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                          >
                            Yes, cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => setConfirming(null)}
                            className="rounded-full border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink/40"
                          >
                            Keep it
                          </button>
                        </span>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setConfirming(b.reference)}
                          className="rounded-full border border-red-300 px-5 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50"
                        >
                          Cancel booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookingsPage;
