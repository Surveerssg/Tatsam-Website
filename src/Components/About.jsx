import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

const About = ({ mode }) => {
  const { language } = useContext(LanguageContext);
  const isDarkMode = mode === 'dark';

  return (
    <section className={`py-20 px-6 md:px-8 lg:px-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
          {language === 'en' ? 'About Tatsam' : 'तत्सम के बारे में'}
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="lg:w-3/5">
            <div className={`prose ${isDarkMode ? 'prose-invert' : ''} max-w-none`}>
              {language === 'en' ? (
                <>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <strong>Tatsam</strong> is the esteemed official Hindi literary society of <strong>Netaji Subhas University of Technology (NSUT)</strong>. Rooted in a profound appreciation for the beauty and heritage of the Hindi language, Tatsam serves as a vibrant platform for students who are passionate about literature, storytelling, and cultural expression.
                  </p>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    At Tatsam, we celebrate the richness of Hindi not only as a language but as a powerful medium of thought, identity, and creativity. Our society regularly organizes a wide array of events such as <strong>Kavita Sammelans (poetry slams)</strong>, <strong>Nukkad Nataks (street plays)</strong>, <strong>Vaad-Vivaad (debates)</strong>, and <strong>Rachna Pratiyogitas (creative writing competitions)</strong>. These events are thoughtfully curated to encourage artistic expression, build confidence, and promote the values embedded in our literary traditions.
                  </p>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    What truly sets Tatsam apart is its commitment to nurturing a space where students can proudly communicate in their mother tongue. We strive to revive the cultural legacy of Hindi while keeping it relevant to modern perspectives and student life. Through our events and initiatives, we aim to ignite a renewed interest in Hindi literature, from timeless classics to contemporary pieces.
                  </p>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Whether you are a seasoned writer, a curious listener, or someone seeking to rediscover your roots, Tatsam welcomes you to be a part of a community that celebrates Hindi with <strong>pride, passion, and purpose</strong>.
                  </p>
                </>
              ) : (
                <>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <strong>तत्सम</strong> <strong>नेताजी सुभाष विश्वविद्यालय (NSUT)</strong> का प्रतिष्ठित आधिकारिक हिंदी साहित्य समाज है। हिंदी भाषा की सुंदरता और विरासत के प्रति गहरी सराहना से जड़ित, तत्सम उन छात्रों के लिए एक जीवंत मंच के रूप में कार्य करता है जो साहित्य, कथाकथन, और सांस्कृतिक अभिव्यक्ति के प्रति उत्साही हैं।
                  </p>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    तत्सम में, हम हिंदी की समृद्धि का जश्न मनाते हैं, न केवल एक भाषा के रूप में, बल्कि विचार, पहचान और रचनात्मकता के एक शक्तिशाली माध्यम के रूप में। हमारा समाज नियमित रूप से विभिन्न प्रकार के कार्यक्रम आयोजित करता है, जैसे कि <strong>कविता सम्मेलनों (कविता स्पर्धाएँ)</strong>, <strong>नुक्कड़ नाटक (सड़क नाटक)</strong>, <strong>वाद-विवाद</strong>, और <strong>रचना प्रतियोगिताएँ (सृजनात्मक लेखन प्रतियोगिताएँ)</strong>। ये कार्यक्रम सृजनात्मक अभिव्यक्ति को प्रोत्साहित करने, आत्मविश्वास बढ़ाने, और हमारे साहित्यिक परंपराओं में निहित मूल्यों को बढ़ावा देने के लिए सावधानीपूर्वक आयोजित किए जाते हैं।
                  </p>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    जो बात तत्सम को वास्तव में अलग बनाती है, वह है यह प्रतिबद्धता कि छात्रों के लिए एक ऐसा स्थान बनाया जाए जहाँ वे गर्व से अपनी मातृभाषा में संवाद कर सकें। हम हिंदी की सांस्कृतिक विरासत को पुनर्जीवित करने का प्रयास करते हैं, साथ ही इसे आधुनिक दृष्टिकोण और छात्र जीवन के अनुरूप बनाए रखते हैं। अपने कार्यक्रमों और पहलों के माध्यम से, हमारा लक्ष्य हिंदी साहित्य में एक नयी रुचि जगाना है, चाहे वह शाश्वत क्लासिक्स हों या समकालीन कृतियाँ।
                  </p>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    चाहे आप एक अनुभवी लेखक हों, एक जिज्ञासु श्रोता हों, या अपने मूल से पुनः परिचित होने की इच्छा रखते हों, तत्सम आपका स्वागत करता है उस समुदाय का हिस्सा बनने के लिए, जो <strong>गौरव, जुनून और उद्देश्य</strong> के साथ हिंदी का उत्सव मनाता है।
                  </p>
                </>
              )}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="lg:w-2/5">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="Hindi Literature.jpeg"
                alt="Celebrating Hindi Literature"
                className="w-full object-cover h-80 md:h-96 transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-gray-900/80' : 'from-gray-800/50'} to-transparent opacity-60`}></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold">
                  {language === 'en' ? 'Celebrating Hindi Literature' : 'हिंदी साहित्य का उत्सव'}
                </h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all duration-300 hover:shadow-lg`}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-indigo-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {language === 'en' ? 'Poetry Slams' : 'कविता सम्मेलन'}
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === 'en' ? 'Express your thoughts through the power of Hindi verses' : 'हिंदी छंदों के माध्यम से अपने विचारों को व्यक्त करें'}
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all duration-300 hover:shadow-lg`}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${isDarkMode ? 'bg-rose-600' : 'bg-rose-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-rose-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {language === 'en' ? 'Creative Writing' : 'रचनात्मक लेखन'}
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === 'en' ? 'Craft stories and essays that resonate with readers' : 'पाठकों के साथ गूंजती कहानियां और निबंध लिखें'}
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all duration-300 hover:shadow-lg`}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${isDarkMode ? 'bg-amber-600' : 'bg-amber-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-amber-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {language === 'en' ? 'Debates' : 'वाद-विवाद'}
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === 'en' ? 'Sharpen your critical thinking and oratory skills' : 'अपने विचार और वाक् कौशल को तेज़ करें'}
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all duration-300 hover:shadow-lg`}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${isDarkMode ? 'bg-emerald-600' : 'bg-emerald-100'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {language === 'en' ? 'Street Plays' : 'नुक्कड़ नाटक'}
            </h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {language === 'en' ? 'Address social issues through impactful performances' : 'प्रभावशाली प्रदर्शनों के माध्यम से सामाजिक मुद्दों को संबोधित करें'}
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className={`mt-16 p-8 rounded-xl text-center ${isDarkMode ? 'bg-gradient-to-r from-indigo-800 to-purple-800' : 'bg-gradient-to-r from-indigo-100 to-purple-100'}`}>
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            {language === 'en' ? 'Join Our Literary Movement' : 'हमारे साहित्यिक आंदोलन से जुड़ें'}
          </h3>
          <p className={`mb-6 max-w-xl mx-auto ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
            {language === 'en' 
              ? 'Become a part of our vibrant community and celebrate the beauty of Hindi literature together.'
              : 'हमारे जीवंत समुदाय का हिस्सा बनें और हिंदी साहित्य की सुंदरता का एक साथ जश्न मनाएं।'}
          </p>
          <button className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            isDarkMode 
              ? 'bg-white text-indigo-900 hover:bg-gray-100' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}>
            {language === 'en' ? 'Get Involved' : 'शामिल हों'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;