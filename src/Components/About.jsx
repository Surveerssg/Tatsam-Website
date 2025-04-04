import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; // Adjust the path as needed

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle} className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {language === 'en' ? 'About Tatsam' : 'तत्सम के बारे में'}
      </h2>
      <div style={contentContainer}>
        <div style={textStyle}>
          {language === 'en' ? (
            <>
              <p>
                <strong>Tatsam</strong> is the esteemed official Hindi literary society of <strong>Netaji Subhas University of Technology (NSUT)</strong>. Rooted in a profound appreciation for the beauty and heritage of the Hindi language, Tatsam serves as a vibrant platform for students who are passionate about literature, storytelling, and cultural expression.
              </p>
              <p>
                At Tatsam, we celebrate the richness of Hindi not only as a language but as a powerful medium of thought, identity, and creativity. Our society regularly organizes a wide array of events such as <strong>Kavita Sammelans (poetry slams)</strong>, <strong>Nukkad Nataks (street plays)</strong>, <strong>Vaad-Vivaad (debates)</strong>, and <strong>Rachna Pratiyogitas (creative writing competitions)</strong>. These events are thoughtfully curated to encourage artistic expression, build confidence, and promote the values embedded in our literary traditions.
              </p>
              <p>
                What truly sets Tatsam apart is its commitment to nurturing a space where students can proudly communicate in their mother tongue. We strive to revive the cultural legacy of Hindi while keeping it relevant to modern perspectives and student life. Through our events and initiatives, we aim to ignite a renewed interest in Hindi literature, from timeless classics to contemporary pieces.
              </p>
              <p>
                Whether you are a seasoned writer, a curious listener, or someone seeking to rediscover your roots, Tatsam welcomes you to be a part of a community that celebrates Hindi with <strong>pride, passion, and purpose</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>तत्सम</strong> <strong>नेताजी सुभाष विश्वविद्यालय (NSUT)</strong> का प्रतिष्ठित आधिकारिक हिंदी साहित्य समाज है। हिंदी भाषा की सुंदरता और विरासत के प्रति गहरी सराहना से जड़ित, तत्सम उन छात्रों के लिए एक जीवंत मंच के रूप में कार्य करता है जो साहित्य, कथाकथन, और सांस्कृतिक अभिव्यक्ति के प्रति उत्साही हैं।
              </p>
              <p>
              तत्सम में, हम हिंदी की समृद्धता का जश्न मनाते हैं, न केवल एक भाषा के रूप में, बल्कि विचार, पहचान और रचनात्मकता के एक शक्तिशाली माध्यम के रूप में। हमारा समाज नियमित रूप से विभिन्न प्रकार के कार्यक्रम आयोजित करता है, जैसे कि <strong>कविता सम्मेलनों (कविता स्पर्धाएँ)</strong>, <strong>नुक्कड़ नाटक (सड़क नाटक)</strong>, <strong>वाद-विवाद</strong>, और <strong>रचना प्रतियोगिताएँ (सृजनात्मक लेखन प्रतियोगिताएँ)</strong>। ये कार्यक्रम सृजनात्मक अभिव्यक्ति को प्रोत्साहित करने, आत्मविश्वास बढ़ाने, और हमारे साहित्यिक परंपराओं में निहित मूल्यों को बढ़ावा देने के लिए सावधानीपूर्वक आयोजित किए जाते हैं।
              </p>
              <p>
                जो बात तत्सम को वास्तव में अलग बनाती है, वह है यह प्रतिबद्धता कि छात्रों के लिए एक ऐसा स्थान बनाया जाए जहाँ वे गर्व से अपनी मातृभाषा में संवाद कर सकें। हम हिंदी की सांस्कृतिक विरासत को पुनर्जीवित करने का प्रयास करते हैं, साथ ही इसे आधुनिक दृष्टिकोण और छात्र जीवन के अनुरूप बनाए रखते हैं। अपने कार्यक्रमों और पहलों के माध्यम से, हमारा लक्ष्य हिंदी साहित्य में एक नयी रुचि जगाना है, चाहे वह शाश्वत क्लासिक्स हों या समकालीन कृतियाँ।
              </p>
              <p>
                चाहे आप एक अनुभवी लेखक हों, एक जिज्ञासु श्रोता हों, या अपने मूल से पुनः परिचित होने की इच्छा रखते हों, तत्सम आपका स्वागत करता है उस समुदाय का हिस्सा बनने के लिए, जो <strong>गौरव, जुनून और उद्देश्य</strong> के साथ हिंदी का उत्सव मनाता है।
              </p>
            </>
          )}
        </div>
        <div style={imageWrapper}>
          <img
            src="Hindi Literature.jpeg" // Replace with your actual image path in the public folder
            alt="Celebrating Hindi Literature"
            style={imageStyle}
          />
        </div>
      </div>
    </section>
  );
};

// ✅ Styles
const sectionStyle = {
  padding: '2rem',
  backgroundColor: '#f9f9f9',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '2rem',
};

const contentContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  alignItems: 'center',
  justifyContent: 'center',
};

const textStyle = {
  flex: '1 1 400px',
  fontSize: '1.1rem',
  lineHeight: '1.6',
};

const imageWrapper = {
  flex: '1 1 400px',
  maxWidth: '500px',
  overflow: 'hidden',
  borderRadius: '10px',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px',
};

export default About;
