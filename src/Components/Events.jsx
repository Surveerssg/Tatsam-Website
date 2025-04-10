import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; // Adjust the import path as needed

// Define event data with DD-MM-YYYY display format and eventDate in YYYY-MM-DD for logic
const eventsData = {
  en: [
    {
      title: 'Kavita Sammelan',
      date: '21-01-2025',
      eventDate: '2025-01-21',
      description: 'An open mic night where students shared their original poems and shayari in Hindi.',
    },
    {
      title: 'Nukkad Natak',
      date: '16-02-2025',
      eventDate: '2025-02-16',
      description: 'A street play competition highlighting social issues with powerful performances.',
    },
    {
      title: 'Hindi Debate',
      date: '11-03-2025',
      eventDate: '2025-03-11',
      description: 'A fiery debate on the relevance of Hindi in the modern world.',
    },
    {
      title: 'Poetry Competition',
      date: '27-04-2025',
      eventDate: '2025-04-27',
      description: 'A competitive stage for students to present their original Hindi poems and explore poetic excellence.',
    },
    {
      title: 'Hindi Diwas Celebration',
      date: '12-05-2025',
      eventDate: '2025-05-12',
      description: 'An event to honor Hindi as a language of heritage and identity with performances, speeches, and quizzes.',
    },
  ],
  hi: [
    {
      title: 'कविता सम्मेलन',
      date: '21-01-2025',
      eventDate: '2025-01-21',
      description: 'एक ओपन माइक नाइट जहाँ छात्रों ने अपनी मूल कविताएँ और शायरी साझा की।',
    },
    {
      title: 'नुक्कड़ नाटक',
      date: '16-02-2025',
      eventDate: '2025-02-16',
      description: 'सामाजिक मुद्दों को उजागर करते हुए दमदार प्रदर्शनों के साथ एक सड़क नाटक प्रतियोगिता।',
    },
    {
      title: 'हिंदी बहस',
      date: '11-03-2025',
      eventDate: '2025-03-11',
      description: 'आधुनिक दुनिया में हिंदी की प्रासंगिकता पर एक उग्र बहस।',
    },
    {
      title: 'कविता प्रतियोगिता',
      date: '27-04-2025',
      eventDate: '2025-04-27',
      description: 'छात्रों के लिए अपनी मौलिक हिंदी कविताओं को प्रस्तुत करने और काव्य-प्रतिभा को प्रदर्शित करने का एक मंच।',
    },
    {
      title: 'हिंदी दिवस समारोह',
      date: '12-05-2025',
      eventDate: '2025-05-12',
      description: 'हिंदी को विरासत और पहचान की भाषा के रूप में सम्मानित करने वाला एक समारोह, जिसमें प्रस्तुतियाँ, भाषण और क्विज़ होते हैं।',
    },
  ],
};

const Events = () => {
  const { language } = useContext(LanguageContext);
  const events = eventsData[language] || eventsData.en;

  const today = new Date();

  const pastEvents = events.filter(event => new Date(event.eventDate) < today);
  const upcomingEvents = events.filter(event => new Date(event.eventDate) >= today);

  return (
    <section style={sectionStyle}>
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {language === 'en' ? 'Our Events' : 'हमारे कार्यक्रम'}
      </h2>

      {upcomingEvents.length > 0 && (
        <>
          <h3 style={subheadingStyle}>
            {language === 'en' ? 'Upcoming Events' : 'आगामी कार्यक्रम'}
          </h3>
          <div style={eventsContainer}>
            {upcomingEvents.map((event, index) => (
              <div key={`up-${index}`} style={cardStyle} className="event-card">
                <h3>{event.title}</h3>
                <p><strong>{language === 'en' ? 'Date:' : 'तिथि:'}</strong> {event.date}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {pastEvents.length > 0 && (
        <>
          <h3 style={subheadingStyle}>
            {language === 'en' ? 'Past Events' : 'पिछले कार्यक्रम'}
          </h3>
          <div style={eventsContainer}>
            {pastEvents.map((event, index) => (
              <div key={`past-${index}`} style={cardStyle} className="event-card">
                <h3>{event.title}</h3>
                <p><strong>{language === 'en' ? 'Date:' : 'तिथि:'}</strong> {event.date}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

// ✅ Styles
const sectionStyle = {
  padding: '2rem',
  backgroundColor: '#f4f4f4',
};

const subheadingStyle = {
  marginTop: '2rem',
  marginBottom: '1.5rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#444',
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
