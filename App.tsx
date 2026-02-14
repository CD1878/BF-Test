import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeestGevenPage from './pages/FeestGevenPage';

import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';

const App: React.FC = () => {
  // Global Scroll Reveal Observer
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all sections and major blocks
    // We wait a tick to ensure DOM is ready on route changes
    const observeElements = () => {
      const elements = document.querySelectorAll('section, h1, h2, h3, .card, footer');
      elements.forEach((el) => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
      });
    };

    observeElements();

    // Re-observe on mutation (route changes)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/feest-geven" element={<FeestGevenPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/:id" element={<EventDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
};

export default App;