import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; // Adjust the import path as needed

const imagesData = {
  en: [
    { src: 'Kavi Sammelan.jpg', alt: 'Kavita Sammelan 2024' },
    { src: 'Nukkad Natak.jpg', alt: 'Nukkad Natak Performance' },
    { src: 'Debate Competition.jpg', alt: 'Debate Competition' },
    { src: 'Hindi Diwas.webp', alt: 'Hindi Diwas' },
  ],
  hi: [
    { src: 'Kavi Sammelan.jpg', alt: 'कविता सम्मेलन 2024' },
    { src: 'Nukkad Natak.jpg', alt: 'नुक्कड़ नाटक प्रदर्शन' },
    { src: 'Debate Competition.jpg', alt: 'बहस प्रतियोगिता' },
    { src: 'Hindi Diwas.webp', alt: 'हिंदी दिवस' },
  ],
};

const Gallery = () => {
  const { language } = useContext(LanguageContext);
  const images = imagesData[language] || imagesData.en;

  return (
    <section style={sectionStyle}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {language === 'en' ? 'Event Gallery' : 'कार्यक्रम गैलरी'}
      </h2>
      <div style={galleryContainerStyle}>
        {images.map((img, index) => (
          <div key={index} className="image-card" style={imageWrapperStyle}>
            <img src={img.src} alt={img.alt} style={imageStyle} />
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ Styles
const sectionStyle = {
  padding: '2rem',
  backgroundColor: '#f4f4f4',
};

const galleryContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
  justifyItems: 'center',
};

const imageWrapperStyle = {
  width: '100%',
  position: 'relative',
  paddingTop: '75%',
  overflow: 'hidden',
  borderRadius: '12px',
  backgroundColor: '#000',
  transition: 'transform 0.3s ease-in-out, border 0.3s ease-in-out',
};

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  display: 'block',
};

// 👇 Add hover effect via CSS-in-JS
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  .image-card:hover {
    border: 2px solid #28a745;
    transform: scale(1.05);
  }
`;
document.head.appendChild(styleTag);

export default Gallery;
