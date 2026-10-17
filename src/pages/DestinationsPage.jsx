import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '../components/Reveal.jsx';
import DestinationCard from '../components/DestinationCard.jsx';
import { REGIONS, destinations } from '../data/destinations.js';

const PRICE_BANDS = [
  { value: 'all', label: 'Any price' },
  { value: 'under-1000', label: 'Under £1,000' },
  { value: '1000-1300', label: '£1,000 – £1,300' },
  { value: 'over-1300', label: 'Over £1,300' },
];

const RATING_OPTIONS = [
  { value: '0', label: 'Any rating' },
  { value: '4.5', label: '4.5 & up' },
  { value: '4.7', label: '4.7 & up' },
  { value: '4.8', label: '4.8 & up' },
];

const SORT_OPTIONS = [
  { value: 'recommended', label: 'Recommended' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'name', label: 'Name A–Z' },
];

function matchesPriceBand(price, band) {
  if (band === 'under-1000') {
    return price < 1000;
  }
  if (band === '1000-1300') {
    return price >= 1000 && price <= 1300;
  }
  if (band === 'over-1300') {
    return price > 1300;
  }
  return true;
}

function DestinationsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('search') || '';
  const region = searchParams.get('region') || 'all';
  const priceBand = searchParams.get('price') || 'all';
  const minRating = parseFloat(searchParams.get('rating') || '0');
  const sort = searchParams.get('sort') || 'recommended';

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);
    if (!value || value === 'all' || value === 'recommended' || value === '0') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  }

  function clearFilters() {
    setSearchParams({}, { replace: true });
  }

  const hasActiveFilters =
    query !== '' || region !== 'all' || priceBand !== 'all' || minRating > 0 || sort !== 'recommended';

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = destinations.filter((d) => {
      if (q) {
        const haystack = `${d.name} ${d.country} ${d.region} ${d.description} ${d.tagline}`.toLowerCase();
        if (!haystack.includes(q)) {
          return false;
        }
      }
      if (region !== 'all' && d.region !== region) {
        return false;
      }
      if (!matchesPriceBand(d.price, priceBand)) {
        return false;
      }
      if (d.rating < minRating) {
        return false;
      }
      return true;
    });

    const sorted = [...filtered];
    if (sort === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
    } else if (sort === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      sorted.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
    }
    return sorted;
  }, [query, region, priceBand, minRating, sort]);

  const selectClass =
    'w-full rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink focus:border-lagoon-600 focus:outline-none focus:ring-2 focus:ring-lagoon-200';

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lagoon-700">
          Where will you wander?
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-ink sm:text-5xl">
          All destinations
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">
          Eight hand-crafted journeys across six fictional regions. Search, filter and sort to
          find the escape that feels like it was made for you.
        </p>
      </Reveal>

      {/* Filters */}
      <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-ink/5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <label htmlFor="filter-search" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60">
              Search
            </label>
            <input
              id="filter-search"
              type="text"
              value={query}
              onChange={(e) => updateParam('search', e.target.value)}
              placeholder="Name, place, keyword…"
              className={selectClass}
            />
          </div>
          <div>
            <label htmlFor="filter-region" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60">
              Region
            </label>
            <select
              id="filter-region"
              value={region}
              onChange={(e) => updateParam('region', e.target.value)}
              className={selectClass}
            >
              <option value="all">All regions</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="filter-price" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60">
              Price
            </label>
            <select
              id="filter-price"
              value={priceBand}
              onChange={(e) => updateParam('price', e.target.value)}
              className={selectClass}
            >
              {PRICE_BANDS.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="filter-rating" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60">
              Rating
            </label>
            <select
              id="filter-rating"
              value={String(minRating)}
              onChange={(e) => updateParam('rating', e.target.value)}
              className={selectClass}
            >
              {RATING_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="filter-sort" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60">
              Sort by
            </label>
            <select
              id="filter-sort"
              value={sort}
              onChange={(e) => updateParam('sort', e.target.value)}
              className={selectClass}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink/70" aria-live="polite">
          <span className="font-semibold text-ink">{results.length}</span>{' '}
          {results.length === 1 ? 'destination' : 'destinations'} found
          {query && (
            <>
              {' '}for <span className="font-semibold text-ink">&ldquo;{query}&rdquo;</span>
            </>
          )}
        </p>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:border-lagoon-700 hover:text-lagoon-700"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Grid */}
      {results.length > 0 ? (
        <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {results.map((d, i) => (
              <DestinationCard key={d.slug} destination={d} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="mt-6 rounded-2xl bg-white p-14 text-center ring-1 ring-ink/5">
          <p className="font-display text-2xl font-semibold text-ink">No destinations match</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink/60">
            Try widening your search or clearing a filter or two — your perfect journey is in
            here somewhere.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 rounded-full bg-lagoon-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

export default DestinationsPage;
