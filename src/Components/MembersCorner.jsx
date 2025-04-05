import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; 

const members = Array.from({ length: 11 }, (_, i) => ({
  image: `/${i + 1}.jpg`,
}));

const MembersCorner = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section style={sectionStyle}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {language === 'en' ? "Members' Corner" : "सदस्य अनुभाग"}
      </h2>
      <div style={membersContainer}>
        {members.map((member, index) => (
          <div key={index} style={cardStyle} className="member-card">
            <img
              src={member.image}
              alt={language === 'en' ? `Member ${index + 1}` : `सदस्य ${index + 1}`}
              style={imageStyle}
            />
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

const headingStyle = {
  textAlign: 'center',
  marginBottom: '1rem',
};

const membersContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
};

const cardStyle = {
  width: '250px',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '8px',
};

// ✅ Hover Effect
const styles = document.createElement('style');
styles.innerHTML = `
  .member-card:hover {
    border: 2px solid lightgreen;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;
document.head.appendChild(styles);

export default MembersCorner;
