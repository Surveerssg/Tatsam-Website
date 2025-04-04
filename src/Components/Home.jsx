import React, { useContext } from 'react';
import Particles from '../components/Particles/Particles';
import { Link } from 'react-router-dom';
import AnimatedWelcome from '../components/AnimatedWelcome'; // Import the animated welcome component
import { LanguageContext } from '../LanguageContext'; // Optional, for other language toggles

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full bg-black text-white min-h-screen">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Animated Welcome Message */}
        <div className="text-center">
          <AnimatedWelcome />
        </div>
        {/* 'Learn More' / 'अधिक जानें' Button */}
        <div className="mt-8">
          <Link
            to="/about"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {language === 'en' ? 'Learn More' : 'अधिक जानें'}
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-16 max-w-4xl mx-auto px-4">
          <p className="text-lg text-center mb-8">
            {language === 'en'
              ? 'Tatsam is the Hindi literary society of NSUT, dedicated to promoting the beauty of the Hindi language through events, discussions, performances, and literature.'
              : 'NSUT का हिंदी साहित्य सोसाइटी, जो कार्यक्रमों, चर्चाओं, प्रदर्शनों, और साहित्य के माध्यम से हिंदी भाषा की सुंदरता को बढ़ावा देती है।'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about-us"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              {language === 'en' ? 'About Us' : 'हमारे बारे में'}
            </Link>
            <Link
              to="/events"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              {language === 'en' ? 'Events' : 'कार्यक्रम'}
            </Link>
            <Link
              to="/members-corner"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              {language === 'en' ? 'Members' : 'सदस्य'}
            </Link>
            <Link
              to="/blog"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              {language === 'en' ? 'Blog' : 'ब्लॉग'}
            </Link>
            <Link
              to="/gallery"
              className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
            >
              {language === 'en' ? 'Gallery' : 'गैलरी'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
