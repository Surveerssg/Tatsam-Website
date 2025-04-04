import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext'; // Adjust the path as needed

const Philosophy = () => {
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    // Create an Audio object with your background sound file
    const audio = new Audio('/audio-club-amapiano-319840.mp3');
    audio.loop = true;
    audio.volume = 0.5; // Adjust volume as needed

    // Try to play the audio; note that some browsers may block autoplay
    audio.play().catch((error) => {
      console.log('Autoplay prevented:', error);
    });

    // Cleanup: Pause the audio when the component unmounts
    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">
          {language === 'en' ? 'Philosophy & Storytelling' : 'दर्शन एवं कथाकथन'}
        </h1>

        {/* Philosophy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            {language === 'en' ? 'Our Philosophy' : 'हमारा दर्शन'}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {language === 'en'
              ? 'At Tatsam Society, our philosophy transcends the material world, embracing the eternal, blissful, and boundless nature of pure consciousness. Inspired by ancient wisdom, our guiding principles emphasize the oneness of existence, the beauty of simplicity, and the importance of inner reflection.'
              : 'तत्सम सोसाइटी में, हमारा दर्शन भौतिक दुनिया से परे है, और शुद्ध चेतना की अनंत, आनंदमय और असीम प्रकृति को अपनाता है। प्राचीन ज्ञान से प्रेरित होकर, हमारे मार्गदर्शक सिद्धांत अस्तित्व की एकता, सरलता की सुंदरता और आंतरिक चिंतन के महत्व पर जोर देते हैं।'}
          </p>
          <p className="text-lg leading-relaxed">
            {language === 'en'
              ? 'We believe that every individual is a manifestation of divine energy, and that our true self lies beyond superficial labels and worldly attachments. Our community celebrates this universal truth through art, literature, and storytelling.'
              : 'हम मानते हैं कि प्रत्येक व्यक्ति दिव्य ऊर्जा का प्रकटीकरण है, और हमारा सच्चा स्वयं सतही लेबल और सांसारिक बंधनों से परे है। हमारा समुदाय कला, साहित्य, और कथाकथन के माध्यम से इस सार्वभौमिक सत्य का उत्सव मनाता है।'}
          </p>
        </section>

        {/* Storytelling Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">
            {language === 'en' ? 'Storytelling' : 'कथाकथन'}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {language === 'en'
              ? 'Stories have been our greatest teachers and carriers of wisdom. From ancient shlokas to modern narratives, storytelling is a powerful tool to connect hearts and minds. We share stories that illuminate the human experience, inspire self-reflection, and celebrate the eternal journey of the soul.'
              : 'कहानियाँ हमारे सबसे बड़े शिक्षक और ज्ञान के वाहक रहे हैं। प्राचीन श्लोकों से लेकर आधुनिक कथाओं तक, कथाकथन हृदयों और मनों को जोड़ने का एक शक्तिशाली उपकरण है। हम ऐसी कहानियाँ साझा करते हैं जो मानव अनुभव को उजागर करती हैं, आत्म-चिंतन को प्रेरित करती हैं, और आत्मा की अनंत यात्रा का उत्सव मनाती हैं।'}
          </p>
          <p className="text-lg leading-relaxed">
            {language === 'en'
              ? 'Whether through poetic verses or immersive narratives, our storytelling sessions invite you to explore the depths of philosophy and discover the essence of life.'
              : 'चाहे काव्यात्मक छंदों के माध्यम से या गहन कथाओं के जरिए, हमारे कथाकथन सत्र आपको दर्शन की गहराइयों का अन्वेषण करने और जीवन के सार को खोजने के लिए आमंत्रित करते हैं।'}
          </p>
        </section>

        {/* Call-to-Action */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
          >
            {language === 'en' ? 'Get in Touch' : 'संपर्क करें'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
