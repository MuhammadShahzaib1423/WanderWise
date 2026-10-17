import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/destinations', label: 'Destinations' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/my-bookings', label: 'My bookings' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lagoon-700 font-display text-lg font-bold text-sand-50">
        W
      </span>
      <span className="font-display text-2xl font-semibold tracking-tight text-ink">
        Wander<span className="text-lagoon-700">Wise</span>
      </span>
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-sand-50/95 shadow-md backdrop-blur' : 'bg-sand-50'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-lagoon-700 text-white' : 'text-ink/70 hover:bg-lagoon-100 hover:text-lagoon-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/destinations"
            className="ml-3 rounded-full bg-sand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sand-600"
          >
            Book now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="rounded-lg p-2 text-ink hover:bg-lagoon-100 md:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-sand-50 px-4 pb-5 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive ? 'bg-lagoon-700 text-white' : 'text-ink/80 hover:bg-lagoon-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/destinations"
              className="mt-2 rounded-full bg-sand-500 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-sand-600"
            >
              Book now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
