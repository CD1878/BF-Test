import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FeestGevenPage from './pages/FeestGevenPage';

import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';

const App: React.FC = () => {
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