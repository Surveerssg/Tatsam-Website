import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from './components/Footer';
import About from './components/About';
import Events from './components/Events';
import MembersCorner from './components/MembersCorner';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Home from './components/Home';
import { LanguageProvider } from './LanguageContext'; // Adjust the path as needed
import Philosophy from './components/Philosophy';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/members-corner" element={<MembersCorner />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/philosophy" element={<Philosophy />} />
            </Routes>
          </main>

          <div className="mt-auto">
            <Newsletter />
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
