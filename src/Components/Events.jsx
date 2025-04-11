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

const Events = ({ mode }) => {
  const { language } = useContext(LanguageContext);
  const events = eventsData[language] || eventsData.en;

  const today = new Date();

  const pastEvents = events.filter(event => new Date(event.eventDate) < today);
  const upcomingEvents = events.filter(event => new Date(event.eventDate) >= today);

  // Dynamic styles based on mode==='dark'
  const styles = {
    section: {
      backgroundColor: mode==='dark' ? '#1a1a1a' : '#f8f9fa',
      color: mode==='dark' ? '#e4e4e4' : '#212529',
      transition: 'all 0.3s ease',
    },
    heading: {
      color: mode==='dark' ? '#f8f9fa' : '#343a40',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '2rem',
      borderBottom: `2px solid ${mode==='dark' ? '#4d4d4d' : '#dee2e6'}`,
      paddingBottom: '0.75rem',
    },
    subheading: {
      color: mode==='dark' ? '#e4e4e4' : '#495057',
      marginTop: '2.5rem',
      marginBottom: '1.5rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subheadingLine: {
      content: '""',
      flex: 1,
      borderBottom: `1px solid ${mode==='dark' ? '#4d4d4d' : '#dee2e6'}`,
      margin: '0 1rem',
    },
    eventsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap',
      padding: '0.5rem',
    },
    card: {
      width: '300px',
      padding: '1.5rem',
      backgroundColor: mode==='dark' ? '#2d2d2d' : '#ffffff',
      color: mode==='dark' ? '#e4e4e4' : '#212529',
      boxShadow: mode==='dark' 
        ? '0 4px 8px rgba(0,0,0,0.3)' 
        : '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: '10px',
      transition: 'all 0.3s ease-in-out',
      textAlign: 'center',
      border: `1px solid ${mode==='dark' ? '#3d3d3d' : '#eaeaea'}`,
    },
    cardTitle: {
      color: mode==='dark' ? '#61dafb' : '#0d6efd',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.75rem',
    },
    cardDate: {
      color: mode==='dark' ? '#ffc107' : '#6c757d',
      fontSize: '0.9rem',
      marginBottom: '0.75rem',
      fontWeight: 'bold',
    },
    cardDescription: {
      fontSize: '0.95rem',
      lineHeight: '1.5',
    },
    noEvents: {
      textAlign: 'center',
      padding: '2rem',
      color: mode==='dark' ? '#adb5bd' : '#6c757d',
      fontStyle: 'italic',
    },
    badge: {
      display: 'inline-block',
      padding: '0.25rem 0.5rem',
      borderRadius: '50px',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      marginBottom: '0.75rem',
      backgroundColor: mode==='dark' ? '#0a58ca' : '#e9ecef',
      color: mode==='dark' ? '#ffffff' : '#0d6efd',
    }
  };

  // Generate a unique ID for the style element
  const styleId = 'events-component-styles';

  // Create and inject CSS for hover effects
  React.useEffect(() => {
    // Remove any existing style with the same ID
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }

    // Create new style element
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    
    // Define hover effects based on current mode==='dark'
    styleElement.innerHTML = `
      .event-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: ${mode==='dark' 
          ? '0 10px 15px rgba(0,0,0,0.4)' 
          : '0 10px 15px rgba(0,0,0,0.1)'};
        border: 2px solid ${mode==='dark' ? '#61dafb' : '#0d6efd'};
      }
    `;
    
    // Append to document head
    document.head.appendChild(styleElement);
    
    // Cleanup on unmount
    return () => {
      const style = document.getElementById(styleId);
      if (style) {
        style.remove();
      }
    };
  }, [mode==='dark']);
  
  return (
    <section className='py-20' style={styles.section}>
      <h2 style={styles.heading}>
        {language === 'en' ? 'Our Events' : 'हमारे कार्यक्रम'}
      </h2>

      {upcomingEvents.length > 0 ? (
        <>
          <div style={styles.subheading}>
            <div style={styles.subheadingLine}></div>
            <span>
              {language === 'en' ? 'Upcoming Events' : 'आगामी कार्यक्रम'}
            </span>
            <div style={styles.subheadingLine}></div>
          </div>
          <div style={styles.eventsContainer}>
            {upcomingEvents.map((event, index) => (
              <div key={`up-${index}`} style={styles.card} className="event-card">
                <h3 style={styles.cardTitle}>{event.title}</h3>
                <div style={styles.badge}>
                  {language === 'en' ? 'UPCOMING' : 'आगामी'}
                </div>
                <p style={styles.cardDate}>
                  <span>{language === 'en' ? 'Date: ' : 'तिथि: '}</span>
                  {event.date}
                </p>
                <p style={styles.cardDescription}>{event.description}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={styles.noEvents}>
          {language === 'en' 
            ? 'No upcoming events at the moment. Stay tuned!' 
            : 'अभी कोई आगामी कार्यक्रम नहीं है। बने रहिये!'}
        </div>
      )}

      {pastEvents.length > 0 && (
        <>
          <div style={styles.subheading}>
            <div style={styles.subheadingLine}></div>
            <span>
              {language === 'en' ? 'Past Events' : 'पिछले कार्यक्रम'}
            </span>
            <div style={styles.subheadingLine}></div>
          </div>
          <div style={styles.eventsContainer}>
            {pastEvents.map((event, index) => (
              <div key={`past-${index}`} style={styles.card} className="event-card">
                <h3 style={styles.cardTitle}>{event.title}</h3>
                <div style={{
                  ...styles.badge,
                  backgroundColor: mode==='dark' ? '#581c0c' : '#f8d7da',
                  color: mode==='dark' ? '#ffc9c9' : '#842029',
                }}>
                  {language === 'en' ? 'COMPLETED' : 'संपन्न'}
                </div>
                <p style={styles.cardDate}>
                  <span>{language === 'en' ? 'Date: ' : 'तिथि: '}</span>
                  {event.date}
                </p>
                <p style={styles.cardDescription}>{event.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Events;