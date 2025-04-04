import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext'; // Adjust the import path as needed

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={headerStyle}>
      <div style={headerContainerStyle}>
        {/* Logo */}
        <Link to="/" style={logoContainerStyle}>
          <img src="/Tatsam Logo.jpg" alt="Tatsam Logo" style={logoImageStyle} />
          <span style={logoTextStyle}>
            {language === 'en' ? 'Tatsam Society' : 'तत्सम सोसाइटी'}
          </span>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button 
          style={hamburgerStyle} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Navigation Menu */}
      <nav style={{ ...navStyle, display: isMenuOpen ? 'block' : 'none' }}>
        <ul style={navListStyle}>
          <li>
            <Link to="/" style={navLinkStyle} onClick={() => setIsMenuOpen(false)}>
              {language === 'en' ? 'Home' : 'होम'}
            </Link>
          </li>
          <li>
            <Link to="/about-us" style={navLinkStyle} onClick={() => setIsMenuOpen(false)}>
              {language === 'en' ? 'About Us' : 'हमारे बारे में'}
            </Link>
          </li>
          <li>
            <Link to="/events" style={navLinkStyle} onClick={() => setIsMenuOpen(false)}>
              {language === 'en' ? 'Events' : 'कार्यक्रम'}
            </Link>
          </li>
          <li>
            <Link to="/members-corner" style={navLinkStyle} onClick={() => setIsMenuOpen(false)}>
              {language === 'en' ? "Members' Corner" : 'सदस्य अनुभाग'}
            </Link>
          </li>
          <li>
            <Link to="/blog" style={navLinkStyle} onClick={() => setIsMenuOpen(false)}>
              {language === 'en' ? 'Blog' : 'ब्लॉग'}
            </Link>
          </li>
          <li>
            <Link to="/gallery" style={navLinkStyle} onClick={() => setIsMenuOpen(false)}>
              {language === 'en' ? 'Gallery' : 'गैलरी'}
            </Link>
          </li>
          {/* Philosophy Page Link */}
          <li>
            <Link to="/philosophy" style={navLinkStyle} onClick={() => setIsMenuOpen(false)}>
              {language === 'en' ? 'Philosophy' : 'दर्शन'}
            </Link>
          </li>
          {/* Language Toggle Button Inside Navbar */}
          <li>
            <button
              onClick={toggleLanguage}
              style={languageToggleStyle}
            >
              {language === 'en' ? 'हिंदी' : 'English'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Styles
const headerStyle = {
  backgroundColor: '#111',
  color: '#fff',
  padding: '1rem 2rem',
};

const headerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#fff',
};

const logoImageStyle = {
  width: '40px',
  height: '40px',
  marginRight: '0.5rem',
};

const logoTextStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const navStyle = {
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#222',
  padding: '1rem 0',
};

const navListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column', // Stacks items vertically in mobile
  gap: '1rem',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1.1rem',
  transition: 'color 0.3s ease',
};

const languageToggleStyle = {
  background: 'none',
  border: 'none',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1.1rem',
};

const hamburgerStyle = {
  fontSize: '1.8rem',
  background: 'none',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  display: 'block', // Always visible in small screens
};

// Apply Responsive Styles with CSS Media Queries (No JS Resize Listeners)
const applyResponsiveStyles = `
@media (min-width: 768px) {
  nav {
    display: flex !important;
    justify-content: center;
  }
  ul {
    flex-direction: row !important;
    gap: 2rem !important;
  }
  button.hamburger {
    display: none !important;
  }
}
`;

// Inject styles in the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = applyResponsiveStyles;
document.head.appendChild(styleSheet);

export default Header;
