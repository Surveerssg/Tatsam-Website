import React, { useContext, useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { LanguageContext } from '../LanguageContext'; // Adjust the path as needed

const Footer = ({mode}) => {
  const { language } = useContext(LanguageContext);  
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const isDark = mode === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the actual subscription logic
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Reset the subscribed message after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { text: language === 'en' ? 'Events' : 'कार्यक्रम', url: '/events' },
    { text: language === 'en' ? 'Gallery' : 'गैलरी', url: '/gallery' },
    { text: language === 'en' ? 'About Us' : 'हमारे बारे में', url: '/about' },
    { text: language === 'en' ? 'Join Us' : 'हमसे जुड़ें', url: '/join' },
    { text: language === 'en' ? 'Contact' : 'संपर्क', url: '/contact' },
  ];

  return (
    <footer className={`${isDark ? 'bg-gray-900' : 'bg-gray-100'} px-6 pt-12 pb-4 md:px-16 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Tatsam Section */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <h2 className={`text-3xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {language === 'en' ? 'Tatsam' : 'तत्सम'}
          </h2>
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {language === 'en'
              ? 'The Hindi Society of NSUT — celebrating the elegance of Hindi literature, poetry, and culture. Be part of our journey into expression, art, and identity.'
              : 'NSUT की हिंदी सोसाइटी — हिंदी साहित्य, कविता और संस्कृति की सुंदरता का उत्सव। हमारी अभिव्यक्ति, कला और पहचान की यात्रा का हिस्सा बनें।'}
          </p>
          <div className="flex space-x-4 mt-3">
            <a href="https://www.instagram.com/tatsam.nsut?igsh=MTV2NHk3ZDcxbWZ3dA==" 
               className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'} transition-colors duration-300`} 
               aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/1KW4Rpz8Cy/" 
               className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'} transition-colors duration-300`} 
               aria-label="Facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" 
               className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'} transition-colors duration-300`} 
               aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" 
               className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'} transition-colors duration-300`} 
               aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300 flex items-center`}
                >
                  <span className="mr-2">›</span>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {language === 'en' ? 'Contact Us' : 'संपर्क करें'}
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MdLocationOn className={`mt-1 mr-2 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {language === 'en' 
                  ? 'NSUT, Sector 3, Dwarka, New Delhi, Delhi 110078' 
                  : 'NSUT, सेक्टर 3, द्वारका, नई दिल्ली, दिल्ली 110078'}
              </span>
            </li>
            <li className="flex items-center">
              <MdPhone className={`mr-2 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>+91 98XXXXXXXX</span>
            </li>
            <li className="flex items-center">
              <MdEmail className={`mr-2 flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>tatsam@nsut.ac.in</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1">
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {language === 'en' ? 'Subscribe to Our Newsletter' : 'हमारे न्यूज़लेटर की सदस्यता लें'}
          </h3>
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'en'
              ? 'Stay updated with our latest events, workshops, and literary activities.'
              : 'हमारे नवीनतम कार्यक्रमों, कार्यशालाओं और साहित्यिक गतिविधियों के बारे में अपडेट रहें।'}
          </p>
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={language === 'en' ? 'Your email address' : 'आपका ईमेल पता'}
              className={`
                w-full rounded-lg py-3 px-4 pr-24 text-sm focus:outline-none focus:ring-2
                ${isDark 
                  ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-yellow-500' 
                  : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-orange-500'
                }
              `}
              required
            />
            <button
              type="submit"
              className={`
                absolute right-1 top-1 font-medium rounded-md py-2 px-4 text-sm transition-colors duration-300
                ${isDark
                  ? 'bg-yellow-600 hover:bg-yellow-500 text-black'
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
                }
              `}
            >
              {language === 'en' ? 'Subscribe' : 'सदस्यता लें'}
            </button>
          </form>
          {subscribed && (
            <p className={`text-sm mt-2 transition-opacity duration-300 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
              {language === 'en' 
                ? 'Thank you for subscribing!' 
                : 'सदस्यता लेने के लिए धन्यवाद!'}
            </p>
          )}
        </div>
      </div>

      {/* Divider & Bottom Bar */}
      <div className={`mt-8 pt-8 ${isDark ? 'border-t border-gray-800' : 'border-t border-gray-200'}`}>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            {language === 'en'
              ? `© ${new Date().getFullYear()} Tatsam, The Hindi Society of NSUT. All rights reserved.`
              : `© ${new Date().getFullYear()} तत्सम, NSUT की हिंदी सोसाइटी। सर्वाधिकार सुरक्षित।`}
          </div>


          <div className="">
            <a href="/privacy" className={`${isDark ? 'hover:text-white text-gray-400' : 'hover:text-gray-900 text-gray-600'} transition-colors duration-300`}>
              {language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}
            </a>
            <span className={`mx-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>•</span>
            <a href="/terms" className={`${isDark ? 'hover:text-white text-gray-400' : 'hover:text-gray-900 text-gray-600'} transition-colors duration-300`}>
              {language === 'en' ? 'Terms of Service' : 'सेवा की शर्तें'}
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;