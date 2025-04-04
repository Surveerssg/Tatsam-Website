import React, { useState, useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; // Adjust the path as needed

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { language } = useContext(LanguageContext);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (language === 'en') {
      alert(`Subscribed with: ${email}`);
    } else {
      alert(`आपका ईमेल ${email} के साथ सब्सक्राइब हो गया!`);
    }
    setEmail('');
  };

  return (
    <section className="py-8 bg-black text-white text-center">
      <h2 className="text-3xl font-bold text-green-500 mb-4">
        {language === 'en'
          ? 'Subscribe to Our Newsletter'
          : 'हमारे न्यूज़लेटर की सदस्यता लें'}
      </h2>
      <p className="text-lg mb-6">
        {language === 'en'
          ? 'Get updates on upcoming events, blog posts, and more!'
          : 'आगामी कार्यक्रमों, ब्लॉग पोस्ट और अन्य अपडेट प्राप्त करें!'}
      </p>
      <form onSubmit={handleSubscribe} className="mt-4">
        <input
          type="email"
          value={email}
          required
          placeholder={
            language === 'en' ? 'Enter your email' : 'अपना ईमेल दर्ज करें'
          }
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 w-64 mr-4 text-black rounded border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          {language === 'en' ? 'Subscribe' : 'सब्सक्राइब करें'}
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
