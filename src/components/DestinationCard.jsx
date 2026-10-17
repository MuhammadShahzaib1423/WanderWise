import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Stars from './Stars.jsx';
import { formatPrice } from '../utils/helpers.js';

function DestinationCard({ destination, index = 0 }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3), ease: 'easeOut' }}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition-shadow duration-300 hover:shadow-xl"
    >
      <Link to={`/destinations/${destination.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium tracking-wide text-sand-50 backdrop-blur-sm">
            {destination.region}
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2">
            <Stars value={destination.rating} />
            <span className="text-sm text-ink/60">
              {destination.rating.toFixed(1)} ({destination.reviewsCount} reviews)
            </span>
          </div>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink group-hover:text-lagoon-700">
            {destination.name}
          </h3>
          <p className="mt-1 text-sm text-ink/60">
            {destination.country} &middot; {destination.durationDays} days
          </p>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink/70">
            {destination.tagline}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
            <p className="text-sm text-ink/60">
              From <span className="text-lg font-bold text-ink">{formatPrice(destination.price)}</span>
              <span className="text-ink/50"> pp</span>
            </p>
            <span className="text-sm font-semibold text-lagoon-700 underline-offset-4 group-hover:underline">
              Explore
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default DestinationCard;
