function StarIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}

function Stars({ value = 0, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.min(Math.max(value - (i - 1), 0), 1);
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <StarIcon className="absolute inset-0 h-4 w-4 text-sand-300" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <StarIcon className="h-4 w-4 text-amber-500" />
            </span>
          </span>
        );
      })}
    </span>
  );
}

export default Stars;
