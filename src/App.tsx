/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const OurWorks = lazy(() => import('./pages/OurWorks'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Fallback loader while route chunks download
const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-works" element={<OurWorks />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
