import React, { useState, useEffect } from 'react';

const AnimatedWelcome = ({mode}) => {
  const messages = [
    { lang: 'en', text: 'Welcome to Tatsam Society' },
    { lang: 'hi', text: 'तत्सम में आपका स्वागत है' },
  ];

  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out over 1 second
      setOpacity(0);
      // After fade-out, update index and fade back in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setOpacity(1);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ opacity: opacity, transition: 'opacity 1s' }}>
        <h1 className={mode === 'light' ? "text-black" : "text-white"} style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>
          {messages[index].text}
        </h1>
      </div>
    </div>
  );
};

export default AnimatedWelcome;
