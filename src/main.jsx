import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import WaitlistLandingPage from './waitlistPage.jsx';
import PrivacyPolicy from './PrivacyPolicy.jsx';
import TermsOfService from './TermsOfService.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WaitlistLandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);