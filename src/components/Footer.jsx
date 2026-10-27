import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-lagoon-950 text-sand-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold">
            Wander<span className="text-lagoon-300">Wise</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-sand-100/70">
            Thoughtfully crafted journeys to extraordinary places — planned by people who love to
            travel, for people who love it too.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-lagoon-300">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/destinations" className="text-sand-100/80 hover:text-white">All destinations</Link></li>
            <li><Link to="/destinations?sort=rating" className="text-sand-100/80 hover:text-white">Top rated trips</Link></li>
            <li><Link to="/my-bookings" className="text-sand-100/80 hover:text-white">My bookings</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-lagoon-300">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="text-sand-100/80 hover:text-white">About us</Link></li>
            <li><Link to="/contact" className="text-sand-100/80 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-lagoon-300">Get in touch</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-100/80">
            <li>14 Compass Quay, London</li>
            <li>+44 20 7946 0000</li>
            <li>hello@wanderwise.example</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-sand-100/60 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} WanderWise Travel Ltd. All rights reserved.</p>
          <p>All destinations featured are fictional places created for demonstration.</p>
          <p>Built by <a href="https://shahzaib-portfolio-muhammad-shahzaibs-projects-16858ef3.vercel.app" target="_blank" rel="noreferrer" className="hover:text-white">Muhammad Shahzaib</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
