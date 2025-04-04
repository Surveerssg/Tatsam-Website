import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; // Adjust the import path as needed

const imagesData = {
  en: [
    { src: 'Kavi Sammelan.jpg', alt: 'Kavita Sammelan 2024' },
    { src: 'Nukkad Natak.jpg', alt: 'Nukkad Natak Performance' },
    { src: 'Tatsam Logo.jpg', alt: 'Debate Competition' },
  ],
  hi: [
    { src: 'Kavi Sammelan.jpg', alt: 'कविता सम्मेलन 2024' },
    { src: 'Nukkad Natak.jpg', alt: 'नुक्कड़ नाटक प्रदर्शन' },
    { src: 'Tatsam Logo.jpg', alt: 'बहस प्रतियोगिता' },
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
          <div key={index} style={imageWrapperStyle}>
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
  paddingTop: '75%', // 4:3 aspect ratio
  overflow: 'hidden',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#000', // Optional: add a background to highlight images that don't fill the container completely
};

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'contain', // Use contain to ensure the whole image is visible
  display: 'block',
};

export default Gallery;
