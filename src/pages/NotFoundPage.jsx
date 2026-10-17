import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="font-display text-8xl font-semibold text-lagoon-200">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink">Lost your way?</h1>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/65">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has wandered off. Let&rsquo;s get
        you back on the right path.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-full bg-lagoon-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-lagoon-800"
        >
          Back to home
        </Link>
        <Link
          to="/destinations"
          className="rounded-full border border-ink/20 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
        >
          Browse destinations
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
