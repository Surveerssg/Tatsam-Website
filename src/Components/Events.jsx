import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; // Adjust the import path as needed

// Define event data in both languages
const eventsData = {
  en: [
    {
      title: 'Kavita Sammelan',
      date: 'March 2024',
      description: 'An open mic night where students shared their original poems and shayari in Hindi.',
    },
    {
      title: 'Nukkad Natak',
      date: 'February 2024',
      description: 'A street play competition highlighting social issues with powerful performances.',
    },
    {
      title: 'Hindi Debate',
      date: 'January 2024',
      description: 'A fiery debate on the relevance of Hindi in the modern world.',
    },
  ],
  hi: [
    {
      title: 'कविता सम्मेलन',
      date: 'मार्च 2024',
      description: 'एक ओपन माइक नाइट जहाँ छात्रों ने अपनी मूल कविताएँ और शायरी साझा की।',
    },
    {
      title: 'नुक्कड़ नाटक',
      date: 'फ़रवरी 2024',
      description: 'सामाजिक मुद्दों को उजागर करते हुए दमदार प्रदर्शनों के साथ एक सड़क नाटक प्रतियोगिता।',
    },
    {
      title: 'हिंदी बहस',
      date: 'जनवरी 2024',
      description: 'आधुनिक दुनिया में हिंदी की प्रासंगिकता पर एक उग्र बहस।',
    },
  ],
};

const Events = () => {
  const { language } = useContext(LanguageContext);
  // Select the event data based on the current language
  const events = eventsData[language] || eventsData.en;

  return (
    <section style={sectionStyle}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {language === 'en' ? 'Our Events' : 'हमारे कार्यक्रम'}
      </h2>
      <div style={eventsContainer}>
        {events.map((event, index) => (
          <div key={index} style={cardStyle} className="event-card">
            <h3>{event.title}</h3>
            <p>
              <strong>{language === 'en' ? 'Date:' : 'तिथि:'}</strong> {event.date}
            </p>
            <p>{event.description}</p>
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

const eventsContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
};

const cardStyle = {
  width: '300px',
  padding: '1.5rem',
  backgroundColor: '#fff',
  boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  transition: 'all 0.3s ease-in-out',
  textAlign: 'center',
};

// Add hover effect via CSS-in-JS
const styles = document.createElement('style');
styles.innerHTML = `
  .event-card:hover {
    border: 2px solid lightgreen;
    transform: scale(1.05);
  }
`;
document.head.appendChild(styles);

export default Events;
