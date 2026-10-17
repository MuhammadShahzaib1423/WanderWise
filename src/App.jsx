import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop.jsx';
import PageWrapper from './components/PageWrapper.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import DestinationsPage from './pages/DestinationsPage.jsx';
import DestinationDetailPage from './pages/DestinationDetailPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import ConfirmationPage from './pages/ConfirmationPage.jsx';
import MyBookingsPage from './pages/MyBookingsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-sand-50 text-ink font-sans">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/destinations" element={<PageWrapper><DestinationsPage /></PageWrapper>} />
            <Route path="/destinations/:slug" element={<PageWrapper><DestinationDetailPage /></PageWrapper>} />
            <Route path="/booking/:slug" element={<PageWrapper><BookingPage /></PageWrapper>} />
            <Route path="/booking/confirmed/:reference" element={<PageWrapper><ConfirmationPage /></PageWrapper>} />
            <Route path="/my-bookings" element={<PageWrapper><MyBookingsPage /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
