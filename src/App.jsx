import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ChatBots from './pages/ChatBots';
import Industry from './pages/Industry';
import Resources from './pages/Resources';
import ResourcesDetail from './pages/ResourcesDetail';
import TextTotext from './components/textTotext';

// Import CSS and JS
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Added Bootstrap JS import
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import BankingFinanceTranslation from './pages/BankingFinanceTranslation';
import Careers from './pages/Careers';
import D2C from './pages/D2C';
import DocumentTranslationWorkflow from './pages/DocumentTranslationWorkflow';
import DotaApp from './pages/DotaApp';
import MachineTranslationApi from './pages/MachineTranslationApi';
import MachineTranslitrationApi from './pages/MachineTranslitrationApi';
import Ocr from './pages/Ocr';
import Voicebot from './pages/Voicebot';
import DotaWeb from './pages/DotaWeb';
import EcommerceTranslation from './pages/EcommerceTranslation';
import Govt from './pages/Govt';

import { initializeWow } from './utils/initializeAnimations';
import { initializeCounters, initializeFAQs, initializeSliders } from './utils/homeUtils';
import { ScrollToTop } from './components/common/ScrollToTop';
import { initializeSliders as initializePageSliders } from './utils/initScripts';
import { updateBackgroundImages } from './utils/cssUtils';


function App() {
  useEffect(() => {
    // Initialize all features when component mounts
    initializeWow();
        initializeSliders();
        initializeCounters();
        initializeFAQs();
    // Initialize background images
    updateBackgroundImages();
  }, []);
  useEffect(() => {
  let hasCounted = false;

  const animateCounter = (counter) => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const isDecimal = counter.getAttribute("data-decimal") === "true";
    const suffix = counter.getAttribute("data-suffix") || '';
    const duration = 2000;
    const frameRate = 60;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const count = () => {
      frame++;
      let progress = frame / totalFrames;
      let current = target * progress;

      if (isDecimal) {
        counter.innerText = current.toFixed(1) + suffix;
      } else {
        counter.innerText = Math.floor(current) + suffix;
      }

      if (frame < totalFrames) {
        requestAnimationFrame(count);
      } else {
        counter.innerText = isDecimal ? target.toFixed(1) + suffix : target + suffix;
      }
    };

    requestAnimationFrame(count);
  };

  const onScroll = () => {
    if (hasCounted) return;

    const counterSection = document.querySelector(".custom-stats-row");
    if (!counterSection) return;

    const rect = counterSection.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      const counters = document.querySelectorAll(".custom-counter");
      counters.forEach(counter => animateCounter(counter));
      hasCounted = true;
      window.removeEventListener("scroll", onScroll);
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // Check immediately in case already visible

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}, []);

  useEffect(() => {
    // Initialize page sliders when app loads
    initializePageSliders();
  }, []);

  return (
    <HelmetProvider>
      <Router basename="/devnagri-react">
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              {/* Main routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about-devnagri" element={<About />} />
              <Route path="/banking-finance-translation" element={<BankingFinanceTranslation />} /> 
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/chat-bots" element={<ChatBots />} />
              <Route path="/d2c" element={<D2C />} />
              <Route path="/document-translation-workflow" element={<DocumentTranslationWorkflow />} />
              <Route path="/dota-app" element={<DotaApp />} />
              <Route path="/dota-web" element={<DotaWeb />} />
              <Route path="/ecommerce-translation" element={<EcommerceTranslation />} />  {/* Fixed typo in route */}
              <Route path="/govt" element={<Govt />} />
              <Route path="/machine-translation-api" element={<MachineTranslationApi />} />
              <Route path="/machine-translitration-api" element={<MachineTranslitrationApi />} />
              <Route path="/multilingual-conversational-ai-bot" element={<ChatBots />} />
              <Route path="/ocr" element={<Ocr />} />
              <Route path="/voicebot" element={<Voicebot />} />
              <Route path="/industry" element={<Industry />} />
              <Route path="/blogs" element={<Resources />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/pricing" element={<Navigate to="https://devnagri.com/pricing" replace />} />

              {/* Translation routes */}
              <Route path="/english-to-hindi-translation" element={<TextTotext />} />
              <Route path="/english-to-marathi-translation" element={<TextTotext />} />
              <Route path="/english-to-tamil-translation" element={<TextTotext />} />
              <Route path="/english-to-telugu-translation" element={<TextTotext />} />
              <Route path="/english-to-kannada-translation" element={<TextTotext />} />
              <Route path="/english-to-malayalam-translation" element={<TextTotext />} />
              <Route path="/english-to-punjabi-translation" element={<TextTotext />} />
              <Route path="/english-to-gujarati-translation" element={<TextTotext />} />
              <Route path="/english-to-bengali-translation" element={<TextTotext />} />
              <Route path="/english-to-odia-translation" element={<TextTotext />} />
              <Route path="/english-to-assamese-translation" element={<TextTotext />} />
              <Route path="/english-to-urdu-translation" element={<TextTotext />} />

              {/* Transliteration routes */}
              <Route path="/english-to-hindi-transliteration" element={<TextTotext />} />
              <Route path="/english-to-marathi-transliteration" element={<TextTotext />} />
              <Route path="/english-to-tamil-transliteration" element={<TextTotext />} />
              <Route path="/english-to-telugu-transliteration" element={<TextTotext />} />
              <Route path="/english-to-kannada-transliteration" element={<TextTotext />} />
              <Route path="/english-to-malayalam-transliteration" element={<TextTotext />} />
              <Route path="/english-to-punjabi-transliteration" element={<TextTotext />} />
              <Route path="/english-to-gujarati-transliteration" element={<TextTotext />} />
              <Route path="/english-to-bengali-transliteration" element={<TextTotext />} />
              <Route path="/english-to-odia-transliteration" element={<TextTotext />} />
              <Route path="/english-to-assamese-transliteration" element={<TextTotext />} />
              <Route path="/english-to-urdu-transliteration" element={<TextTotext />} />
              
              {/* Blog post routes - exclude paths containing 'to' */}
              <Route path="/:link" element={<ResourcesDetail />} />
              
              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
