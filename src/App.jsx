import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import About from './Components/About';
import Events from './Components/Events';
import MembersCorner from './Components/MembersCorner';
import Blog from './Components/Blog';
import Gallery from './Components/Gallery';
import Newsletter from './Components/Newsletter';
import Home from './Components/Home';
import { LanguageProvider } from './LanguageContext'; // Adjust the path as needed
import Philosophy from './Components/Philosophy';

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
