import React, { useContext } from 'react';
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { LanguageContext } from '../LanguageContext'; // Adjust the path as needed

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer className="bg-black text-white py-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tatsam Section */}
        <div>
          <h2 className="text-3xl font-bold mb-3">
            {language === 'en' ? 'Tatsam' : 'तत्सम'}
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            {language === 'en'
              ? 'The Hindi Society of NSUT — celebrating the elegance of Hindi literature, poetry, and culture. Be part of our journey into expression, art, and identity.'
              : 'NSUT की हिंदी सोसाइटी — हिंदी साहित्य, कविता और संस्कृति की सुंदरता का उत्सव। हमारी अभिव्यक्ति, कला और पहचान की यात्रा का हिस्सा बनें।'}
          </p>
          <div className="flex space-x-4 mt-3 text-gray-400">
            <a href="https://www.instagram.com/tatsam.nsut?igsh=MTV2NHk3ZDcxbWZ3dA==" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/1KW4Rpz8Cy/" className="hover:text-white transition">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Bottom Bar */}
      <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm text-gray-400">
        {language === 'en'
          ? `Made with ❤️ for Tatsam • © ${new Date().getFullYear()} NSUT`
          : `तत्सम के लिए ❤️ के साथ बनाया गया • © ${new Date().getFullYear()} NSUT`}
      </div>
    </footer>
  );
};

export default Footer;
