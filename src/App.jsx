import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeContent from './Components/pages/HomeContent';
import AboutContent from './Components/pages/AboutContent';
import ContactContent from './Components/pages/ContactContent';
import FixedGif from './Components/FixedGif/FixedGif';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/contact" element={<ContactContent />} />
        </Routes>
        <FixedGif/>
      </div>
    </Router>
  );
}

export default App;
