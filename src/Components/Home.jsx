import Particles from '../Components/Particles/Particles';
import React, { useState, useEffect, useRef, useContext, Suspense } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
import { LanguageContext } from '../LanguageContext';
import { 
  Book, 
  Users, 
  Calendar, 
  Image, 
  Home as HomeIcon, 
  Moon, 
  Sun, 
  Menu, 
  X,
  MessageSquare, 
  Heart
} from 'lucide-react';
import Footer from './Footer';

// Lazy-loaded animated components for better performance
const AnimatedWelcome = React.lazy(() => import('../Components/AnimatedWelcome'));

const Home = ({ mode, setMode }) => {
  const { language } = useContext(LanguageContext);
  const mountRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Featured events data
  const featuredEvents = [
    {
      title: language === 'en' ? 'Annual Hindi Diwas' : 'वार्षिक हिंदी दिवस',
      description: language === 'en' 
        ? 'Join us for our grand celebration of Hindi language and literature' 
        : 'हिंदी भाषा और साहित्य के हमारे भव्य उत्सव में शामिल हों',
      date: '14 Sep 2025'
    },
    {
      title: language === 'en' ? 'Poetry Competition' : 'काव्य प्रतियोगिता',
      description: language === 'en' 
        ? 'Express your creativity with Hindi poetry and win exciting prizes' 
        : 'हिंदी कविता के साथ अपनी रचनात्मकता व्यक्त करें और आकर्षक पुरस्कार जीतें',
      date: '25 Apr 2025'
    }
  ];

  // Featured blog posts
  const featuredPosts = [
    {
      title: language === 'en' ? 'The Evolution of Hindi Cinema' : 'हिंदी सिनेमा का विकास',
      excerpt: language === 'en' 
        ? 'Exploring how Hindi cinema has evolved over the decades...' 
        : 'हिंदी सिनेमा दशकों से कैसे विकसित हुआ है...'
    },
    {
      title: language === 'en' ? 'Celebrating Modern Hindi Poetry' : 'आधुनिक हिंदी कविता का उत्सव',
      excerpt: language === 'en' 
        ? 'The new voices that are reshaping Hindi literature today...' 
        : 'नई आवाज़ें जो आज हिंदी साहित्य को पुनर्निर्मित कर रही हैं...'
    }
  ];

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Three.js Background */}
      <div ref={mountRef} className="fixed inset-0 z-0" >
      
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
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
          mode
        />
      </div>
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Symbol */}
          <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
            <svg width="120" height="120" viewBox="0 0 100 100" className="mx-auto">
              <circle cx="50" cy="50" r="45" fill="none" stroke={mode === 'dark' ? '#FFD700' : '#c2410c'} strokeWidth="2" />
                <img 
                  src="public/Tatsam_Logo.jpg" 
                  alt="Tatsam Logo" 
                  className="w-3/4 h-3/4 object-cover rounded-full opacity-90 transition-transform duration-700 transform group-hover:scale-110 group-hover:rotate-12"
                />
              {/* </text> */}
            </svg>
          </div>
          
          {/* Animated Welcome */}
          <Suspense fallback={<div className="h-16"></div>}>
            <AnimatedWelcome />
          </Suspense>
          
          <h2 className="mt-6 text-2xl md:text-3xl font-light">
            {language === 'en' 
              ? 'Hindi Literary Society of NSUT' 
              : 'NSUT की हिंदी साहित्य सोसाइटी'}
          </h2>
          
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            {language === 'en'
              ? 'Celebrating the richness of Hindi language and literature through creative expression, cultural programs, and literary discussions.'
              : 'रचनात्मक अभिव्यक्ति, सांस्कृतिक कार्यक्रमों और साहित्यिक चर्चाओं के माध्यम से हिंदी भाषा और साहित्य की समृद्धि का जश्न मनाते हुए।'}
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                mode === 'dark' 
                  ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                  : 'bg-orange-600 text-white hover:bg-orange-500'
              }`}
            >
              {language === 'en' ? 'Learn More' : 'अधिक जानें'}
            </Link>
            <Link
              to="/join"
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                mode === 'dark'
                  ? 'bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:bg-opacity-10'
                  : 'bg-transparent border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:bg-opacity-10'
              }`}
            >
              {language === 'en' ? 'Join Us' : 'हमसे जुड़ें'}
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>

      

      {/* Featured Events with Central Spotlights */}
<section className="py-20 relative overflow-hidden">
  {/* Central Spotlight Source */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
    {/* Main Central Spotlight */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96">
      <div className={`absolute inset-0 rounded-full ${
        mode === 'dark' ? 'bg-yellow-300' : 'bg-orange-300'
      } opacity-10 blur-3xl`}></div>
      
      {/* Central Beam */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-40 bg-gradient-to-b from-transparent ${
        mode === 'dark' ? 'to-yellow-400' : 'to-orange-400'
      } opacity-30"></div>
    </div>
    
    {/* Secondary Light Spread */}
    <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-full h-64">
      <div className={`absolute inset-0 rounded-full ${
        mode === 'dark' ? 'bg-purple-400' : 'bg-pink-400'
      } opacity-5 blur-3xl`} style={{
        clipPath: 'ellipse(50% 30% at 50% 0%)'
      }}></div>
    </div>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <h2 className="text-3xl font-bold text-center mb-12 ${
      mode === 'dark' ? 'text-white' : 'text-gray-800'
    }">
      {language === 'en' ? 'Upcoming Events' : 'आगामी कार्यक्रम'}
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {featuredEvents.map((event, index) => (
        <div 
          key={index} 
          className={`rounded-xl overflow-hidden transition-all hover:transform hover:scale-[1.02] relative ${
            mode === 'dark' ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white shadow-xl'
          }`}
        >
          {/* Individual Card Spotlight Effect */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-48 h-48">
            <div className={`w-full h-full rounded-full ${
              index % 2 === 0 
                ? mode === 'dark' ? 'bg-yellow-400/20' : 'bg-orange-400/15'
                : mode === 'dark' ? 'bg-purple-400/20' : 'bg-pink-400/15'
            } blur-xl`}></div>
          </div>
          
          {/* Event Header with Gradient */}
          <div className={`h-40 bg-gradient-to-r ${
            index % 2 === 0 
              ? mode === 'dark' ? 'from-yellow-600 to-amber-600' : 'from-orange-500 to-amber-500'
              : mode === 'dark' ? 'from-purple-600 to-fuchsia-600' : 'from-purple-500 to-pink-500'
          } flex items-center justify-center relative overflow-hidden`}>
            {/* Light Rays Effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-white"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-white" style={{
                transform: 'rotate(30deg)',
                transformOrigin: 'top center'
              }}></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-white" style={{
                transform: 'rotate(-30deg)',
                transformOrigin: 'top center'
              }}></div>
            </div>
            
            <Calendar size={40} className="text-white/90 drop-shadow-md relative z-10" />
          </div>
          
          {/* Event Content */}
          <div className="p-6 ${
            mode === 'dark' ? 'text-gray-200' : 'text-gray-700'
          }">
            <div className={`text-sm font-medium mb-2 ${
              mode === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {event.date}
            </div>
            <h3 className={`text-xl font-bold mb-2 ${
              mode === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>{event.title}</h3>
            <p className="mb-4">{event.description}</p>
            <Link 
              to="/events" 
              className={`inline-flex items-center font-medium ${
                index % 2 === 0
                  ? mode === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-orange-600 hover:text-orange-500'
                  : mode === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'
              }`}
            >
              {language === 'en' ? 'Learn more' : 'अधिक जानें'}
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
    
    <div className="text-center mt-12">
      <Link 
        to="/events" 
        className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
          mode === 'dark'
            ? 'bg-gray-700/50 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
        }`}
      >
        <Calendar className="mr-2" size={18} />
        {language === 'en' ? 'View All Events' : 'सभी कार्यक्रम देखें'}
      </Link>
    </div>
  </div>
</section>
      
      {/* Blog Highlights */}
      <section className={`py-20 ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'From Our Blog' : 'हमारे ब्लॉग से'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredPosts.map((post, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${
                  mode === 'dark' ? 'bg-gray-700' : 'bg-white shadow-md'
                } transition-all hover:transform hover:scale-105`}
              >
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="mb-4">{post.excerpt}</p>
                <Link 
                  to="/blog" 
                  className={`inline-flex items-center ${
                    mode === 'dark' ? 'text-yellow-400' : 'text-orange-600'
                  } hover:underline`}
                >
                  {language === 'en' ? 'Read more' : 'और पढ़ें'}
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/blog" 
              className={`inline-flex items-center px-6 py-3 rounded-lg ${
                mode === 'dark'
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <MessageSquare className="mr-2" size={18} />
              {language === 'en' ? 'Visit Our Blog' : 'हमारा ब्लॉग देखें'}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Gallery Highlights' : 'गैलरी हाइलाइट्स'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className="aspect-square overflow-hidden rounded-lg transition-all hover:transform hover:scale-105"
              >
                <img 
                  src={`/api/placeholder/400/400`} 
                  alt="Gallery item" 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/gallery" 
              className={`inline-flex items-center px-6 py-3 rounded-lg ${
                mode === 'dark'
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              <Image className="mr-2" size={18} />
              {language === 'en' ? 'View Full Gallery' : 'पूरी गैलरी देखें'}
            </Link>
          </div>
        </div>
      </section>

      <Footer mode={mode}/>
</div>
);
};

export default Home;
