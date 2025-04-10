import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext';
import { Menu, X, ChevronDown, Globe, Sun, Moon, Search, Bell, User } from 'lucide-react';
import * as THREE from 'three';

const Header = ({ mode, setMode }) => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const threeContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setSearchOpen(false);
  }, [location]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  // Focus search input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  // Three.js animation for dark mode
  useEffect(() => {
    if (mode !== 'dark' || !canvasRef.current) return;
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 100, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, 100);
    camera.position.z = 5;
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 150; // Increased particles
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material with better lighting
    const particlesMaterial = new THREE.PointsMaterial({ 
      size: 0.08, 
      color: 0x8a5cf7, // More purple-ish
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Animation with mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    const animate = () => {
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;
      
      // Subtle follow mouse effect
      particlesMesh.rotation.y += mouseX * 0.0003;
      particlesMesh.rotation.x += mouseY * 0.0003;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, 100);
      camera.aspect = window.innerWidth / 100;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      cancelAnimationFrame(animationRef.current);
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [mode, canvasRef.current]);

  // Toggle between light and dark mode
  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  // Set theme colors based on mode
  const themeColors = {
    background: mode === 'dark' 
      ? isScrolled ? 'bg-gray-900/70' : 'bg-transparent' 
      : isScrolled ? 'bg-white/70' : 'bg-transparent',
    text: mode === 'dark' ? 'text-white' : 'text-gray-800',
    highlight: mode === 'dark' ? 'text-purple-400' : 'text-indigo-600',
    menuBg: mode === 'dark' ? 'bg-gray-900' : 'bg-white',
    dropdownBg: mode === 'dark' ? 'bg-gray-900/95' : 'bg-white/95',
    menuHover: mode === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
    menuText: mode === 'dark' ? 'text-gray-300' : 'text-gray-600',
    menuHoverText: mode === 'dark' ? 'hover:text-purple-400' : 'hover:text-indigo-600',
    border: mode === 'dark' ? 'border-gray-700' : 'border-gray-200',
    button: mode === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-indigo-600 hover:bg-indigo-700',
    buttonAlt: mode === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200',
    shadow: mode === 'dark' ? 'shadow-lg shadow-purple-900/30' : 'shadow-lg shadow-indigo-500/30',
    gradientFrom: mode === 'dark' ? 'from-purple-900' : 'from-indigo-500',
    gradientTo: mode === 'dark' ? 'to-blue-900' : 'to-purple-100',
    activeBg: mode === 'dark' ? 'bg-gray-800' : 'bg-gray-100',
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="">
      {/* Fixed height header with consistent spacing */}
      <header 
        className={`fixed w-full text-center z-50 transition-all duration-500 ${themeColors.background} backdrop-blur-sm top-4 left-0 right-0 mx-auto px-4 max-w-7xl h-16 rounded-2xl`} 
        style={{ 
          boxShadow: isScrolled 
            ? mode === 'dark' 
              ? '0 8px 32px -8px rgba(124, 58, 237, 0.3)' 
              : '0 8px 32px -8px rgba(79, 70, 229, 0.2)'
            : 'none'
        }}
        ref={threeContainerRef}
      >
        {/* Three.js Canvas for Dark Mode */}
        {mode === 'dark' && (
          <canvas 
            ref={canvasRef} 
            className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none rounded-2xl overflow-hidden" 
            style={{ zIndex: -1 }}
          />
        )}
        
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-r ${themeColors.gradientFrom} ${themeColors.gradientTo} opacity-20 rounded-2xl`}></div>
        
        <div className="h-full flex items-center justify-between mx-auto px-2 relative" style={{ maxWidth: '1200px' }}>
          {/* Left Side - Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group h-full"
            aria-label="Home"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <div className={`w-full h-full bg-gradient-to-br ${themeColors.gradientFrom} to-purple-500 flex items-center justify-center`}>
                <img 
                  src="Tatsam_Logo.jpg" 
                  alt="Tatsam Logo" 
                  className="w-3/4 h-3/4 object-cover rounded-full opacity-90 transition-transform duration-700 transform group-hover:scale-110 group-hover:rotate-12"
                />
              </div>
              {/* Logo ring effect */}
              <div className="absolute inset-0 border-2 border-purple-300 rounded-full scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700"></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight transition-all duration-300 ${isScrolled ? themeColors.text : themeColors.highlight}`}>
                {language === 'en' ? 'Tatsam Society' : 'तत्सम सोसाइटी'}
              </span>
              <span className={`text-xs ${themeColors.menuText} transition-all duration-300 transform ${isScrolled ? 'opacity-100' : 'opacity-80'}`}>
                {language === 'en' ? 'Exploring Knowledge' : 'ज्ञान की खोज'}
              </span>
            </div>
          </Link>

          {/* Center - Desktop Navigation */}
          <nav className="hidden lg:flex h-full items-center justify-center">
            <ul className="flex items-center space-x-2 h-full">
              <NavItem 
                to="/" 
                label={language === 'en' ? 'Home' : 'होम'} 
                currentPath={location.pathname} 
                themeColors={themeColors}
              />
              <NavItem 
                to="/about-us" 
                label={language === 'en' ? 'About Us' : 'हमारे बारे में'} 
                currentPath={location.pathname} 
                themeColors={themeColors}
              />
              <NavItem 
                to="/events" 
                label={language === 'en' ? 'Events' : 'कार्यक्रम'} 
                currentPath={location.pathname} 
                themeColors={themeColors}
              />
              <NavItem 
                to="/blog" 
                label={language === 'en' ? 'Blog' : 'ब्लॉग'} 
                currentPath={location.pathname} 
                themeColors={themeColors}
              />
              
              {/* Resources Dropdown Menu */}
              <li className="relative dropdown-container h-full flex items-center" ref={dropdownRef}>
                <button 
                  className={`flex items-center px-3 py-2 ${themeColors.menuText} ${themeColors.menuHoverText} transition-all duration-300 group rounded-md`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  <span>{language === 'en' ? 'Resources' : 'संसाधन'}</span>
                  <ChevronDown 
                    size={16} 
                    className={`ml-1 transition-transform duration-300 group-hover:text-purple-400 ${dropdownOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {dropdownOpen && (
                  <div 
                    className={`absolute mt-2 w-60 ${themeColors.dropdownBg} backdrop-blur-md rounded-lg ${themeColors.shadow} py-2 z-20 border ${themeColors.border} border-opacity-40`}
                    style={{
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 5% 100%, 0% 90%)',
                      top: '100%'
                    }}
                  >
                    <DropdownItem 
                      to="/members-corner" 
                      label={language === 'en' ? "Members' Corner" : 'सदस्य अनुभाग'} 
                      themeColors={themeColors}
                      icon={<User size={14} />}
                    />
                    <DropdownItem 
                      to="/gallery" 
                      label={language === 'en' ? 'Gallery' : 'गैलरी'} 
                      themeColors={themeColors}
                      icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 16L8.586 11.414C9.367 10.633 10.632 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.632 11.633 18.414 12.414L20 14M14 8H14.01M3 19H21C21.552 19 22 18.552 22 18V6C22 5.448 21.552 5 21 5H3C2.448 5 2 5.448 2 6V18C2 18.552 2.448 19 3 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>}
                    />
                    <DropdownItem 
                      to="/philosophy" 
                      label={language === 'en' ? 'Philosophy' : 'दर्शन'}
                      themeColors={themeColors}
                      icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 8V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>}
                    />
                    <div className="border-t border-gray-700 my-2"></div>
                    <DropdownItem 
                      to="/library" 
                      label={language === 'en' ? 'Digital Library' : 'डिजिटल पुस्तकालय'}
                      themeColors={themeColors}
                      icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>}
                    />
                  </div>
                )}
              </li>
            </ul>
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 md:space-x-3 h-full">
            {/* Language Toggle Button */}
            <button 
              onClick={toggleLanguage}
              className={`hidden md:flex items-center ${themeColors.buttonAlt} px-3 py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 text-sm`}
              aria-label={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
            >
              <Globe size={14} className="mr-1 opacity-80" />
              <span className={themeColors.menuText}>
                {language === 'en' ? 'हिंदी' : 'English'}
              </span>
            </button>
            
            {/* Search Button */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-full transition-all duration-300 transform ${
                searchOpen ? `${themeColors.button} text-white rotate-90` : `${themeColors.menuText} ${themeColors.menuHover}`
              }`}
              aria-label="Search"
              aria-expanded={searchOpen}
            >
              <Search size={18} className={`transition-transform duration-300 ${searchOpen ? 'rotate-90' : ''}`} />
            </button>
            
            {/* Theme Toggle with Enhanced Animation */}
            <button 
              onClick={toggleMode}
              className={`p-2 rounded-full transition-all duration-500 transform hover:rotate-12 ${
                mode === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-indigo-600'
              }`}
              aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {mode === 'dark' ? (
                <Sun size={18} className="transition-all duration-700" />
              ) : (
                <Moon size={18} className="transition-all duration-700" />
              )}
            </button>
            
            {/* Join Button - Visible on larger screens */}
            <button 
              className={`hidden md:flex items-center ${themeColors.button} text-white px-4 py-1.5 rounded-md transition-all duration-300 transform hover:scale-105 text-sm font-medium ml-1`}
            >
              {language === 'en' ? 'Join Us' : 'हमसे जुड़ें'}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className={`lg:hidden p-2 ${themeColors.text} focus:outline-none transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Search Bar - Expandable */}
        <div className={`absolute left-0 right-0 px-4 transition-all duration-300 overflow-hidden ${searchOpen ? 'max-h-16 opacity-100 top-16' : 'max-h-0 opacity-0 -top-16'}`}>
          <form 
            onSubmit={handleSearch}
            className={`flex items-center p-2 rounded-lg ${mode === 'dark' ? 'bg-gray-800/90 backdrop-blur-md border border-gray-700' : 'bg-white/90 backdrop-blur-md border border-gray-200'} ${themeColors.shadow}`}
          >
            <Search size={18} className={`${themeColors.menuText} mx-2 flex-shrink-0`} />
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder={language === 'en' ? "Search..." : "खोजें..."} 
              className={`w-full p-1.5 bg-transparent border-none focus:outline-none ${themeColors.text} text-sm`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              type="submit"
              className={`${themeColors.button} text-white px-4 py-1 rounded-md text-sm ml-2 transition-all duration-300 hover:scale-105 flex-shrink-0`}
            >
              {language === 'en' ? 'Search' : 'खोजें'}
            </button>
          </form>
        </div>
        
        {/* Mobile Navigation - Enhanced Slide Down Animation */}
        <div 
          className={`lg:hidden absolute left-0 right-0 px-4 transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 top-16' : 'max-h-0 opacity-0 -top-4'
          }`}
        >
          <nav className={`${themeColors.menuBg} rounded-lg ${themeColors.shadow} overflow-hidden border border-opacity-20 ${themeColors.border}`}>
            <ul className="py-2 divide-y divide-opacity-10 ${themeColors.border}">
              <MobileNavItem 
                to="/" 
                label={language === 'en' ? 'Home' : 'होम'} 
                currentPath={location.pathname} 
                themeColors={themeColors}
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
              />
              <MobileNavItem 
                to="/about-us" 
                label={language === 'en' ? 'About Us' : 'हमारे बारे में'} 
                currentPath={location.pathname} 
                themeColors={themeColors}
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
              />
              <MobileNavItem 
                to="/events" 
                label={language === 'en' ? 'Events' : 'कार्यक्रम'} 
                currentPath={location.pathname} 
                themeColors={themeColors}
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
              />
              <MobileNavItem 
                to="/blog" 
                label={language === 'en' ? 'Blog' : 'ब्लॉग'} 
                currentPath={location.pathname} 
                themeColors={themeColors}
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 5H18M6 9H18M13 13H18M13 17H18M6 13H10V17H6V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
              />
              
              {/* Resources Section with Accordion Style */}
              <li>
                <MobileAccordion 
                  title={language === 'en' ? 'Resources' : 'संसाधन'}
                  themeColors={themeColors}
                  icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>}
                >
                  <ul>
                    <MobileSubNavItem 
                      to="/members-corner" 
                      label={language === 'en' ? "Members' Corner" : 'सदस्य अनुभाग'} 
                      themeColors={themeColors} 
                    />
                    <MobileSubNavItem 
                      to="/gallery" 
                      label={language === 'en' ? "Gallery" : 'गैलरी'} 
                      themeColors={themeColors} 
                    />
                    <MobileSubNavItem 
                      to="/philosophy" 
                      label={language === 'en' ? "Philosophy" : 'दर्शन'} 
                      themeColors={themeColors} 
                    />
                    <MobileSubNavItem 
                      to="/library" 
                      label={language === 'en' ? "Digital Library" : 'डिजिटल पुस्तकालय'} 
                      themeColors={themeColors} 
                    />
                  </ul>
                </MobileAccordion>
              </li>
              
              {/* Mobile Bottom Action Buttons */}
              <li className="py-4">
                <div className="flex flex-col space-y-3 px-4">
                  {/* Language Toggle Button */}
                  <button 
                    onClick={toggleLanguage}
                    className={`flex items-center justify-center ${themeColors.buttonAlt} px-3 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105`}
                    aria-label={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
                  >
                    <Globe size={16} className="mr-2 opacity-80" />
                    <span className={themeColors.menuText}>
                      {language === 'en' ? 'Switch to हिंदी' : 'Switch to English'}
                    </span>
                  </button>
                  
                  {/* Join Button */}
                  <button 
                    className={`flex items-center justify-center ${themeColors.button} text-white px-4 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium`}
                  >
                    {language === 'en' ? 'Join Us' : 'हमसे जुड़ें'}
                  </button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

// NavItem component for desktop navigation
const NavItem = ({ to, label, currentPath, themeColors }) => {
  const isActive = to === currentPath || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <li className="h-full flex items-center">
      <Link 
        to={to} 
        className={`relative h-full flex items-center px-3 ${themeColors.menuText} ${themeColors.menuHoverText} transition-all duration-300 group`}
      >
        <span className={`relative ${isActive ? themeColors.highlight : ''}`}>
          {label}
          <span className={`absolute left-0 right-0 bottom-0 h-0.5 ${themeColors.highlight} transform origin-bottom scale-x-0 transition-transform duration-300 ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
        </span>
      </Link>
    </li>
  );
};

// DropdownItem component for desktop dropdowns
const DropdownItem = ({ to, label, themeColors, icon }) => {
  return (
    <Link 
      to={to}
      className={`block px-4 py-2 ${themeColors.menuText} ${themeColors.menuHover} ${themeColors.menuHoverText} transition-all duration-300 flex items-center`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </Link>
  );
};

// MobileNavItem component for mobile navigation items
const MobileNavItem = ({ to, label, currentPath, themeColors, icon }) => {
  const isActive = to === currentPath || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <li>
      <Link 
        to={to} 
        className={`flex items-center px-4 py-3 ${themeColors.menuText} ${isActive ? `${themeColors.highlight} ${themeColors.activeBg}` : themeColors.menuHoverText}`}
      >
        <span className={`mr-3 ${isActive ? themeColors.highlight : 'opacity-70'}`}>
          {icon}
        </span>
        <span>{label}</span>
        {isActive && (
          <span className={`ml-auto ${themeColors.highlight}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </Link>
    </li>
  );
};

// MobileSubNavItem component for mobile nested navigation
const MobileSubNavItem = ({ to, label, themeColors }) => {
  return (
    <li>
      <Link 
        to={to} 
        className={`block px-4 py-2 ${themeColors.menuText} ${themeColors.menuHoverText} ml-6 border-l ${themeColors.border} text-sm`}
      >
        {label}
      </Link>
    </li>
  );
};

// MobileAccordion component for collapsible sections
const MobileAccordion = ({ title, children, themeColors, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 ${themeColors.menuText} ${themeColors.menuHoverText}`}
      >
        <div className="flex items-center">
          <span className="mr-3 opacity-70">{icon}</span>
          <span>{title}</span>
        </div>
        <ChevronDown 
          size={18} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  );
};

export default Header;