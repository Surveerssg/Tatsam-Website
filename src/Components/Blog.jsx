import React, { useContext, useState } from 'react';
import { LanguageContext } from '../LanguageContext';

const blogPostsData = {
  en: [
    {
      title: 'The Power of Hindi in Modern Literature',
      author: 'Tatsam Team',
      date: 'March 10, 2024',
      snippet: 'Hindi continues to influence literature deeply. Let’s explore how today’s youth are keeping it alive...',
      fullText: 'Hindi continues to influence literature deeply. Today’s youth are increasingly embracing the language in contemporary forms of storytelling, such as blogs, podcasts, and independent publishing. Writers are experimenting with hybrid styles, blending Hindi with English, and incorporating traditional expressions in new contexts. Platforms like social media and self-publishing apps are helping emerging writers share their voices and reach wider audiences. Hindi is not just surviving but evolving, becoming a tool for identity and expression. This shift has given rise to a new wave of Hindi literature that is fresh, engaging, and rooted in culture. From poetry slams to digital zines, the language is being celebrated in urban and rural circles alike. The richness of Hindi allows for a depth of emotion and nuance that resonates with readers. In preserving and promoting the language, today’s writers are shaping its future with pride and innovation.',
    },
    {
      title: 'Behind the Scenes of Nukkad Natak',
      author: 'Riya Kapoor',
      date: 'February 18, 2024',
      snippet: 'Get an inside look at the preparation and passion behind our impactful street play.',
      fullText: 'Nukkad Natak, or street theatre, is more than just performance—it’s a movement. The effort starts long before the actors take the stage. Writers spend days crafting scripts that resonate with real-world issues like gender equality, mental health, and civic duties. Rehearsals are intense and often take place in open public spaces to simulate real conditions. Every actor brings a personal connection to their role, often drawing from lived experiences. The group works collaboratively, adjusting lines and actions based on feedback from the community. Costumes are minimal, props are often handmade, and the focus is on raw storytelling. These plays attract diverse audiences, from daily commuters to street vendors, and leave a lasting impact. The passion and spontaneity behind each performance make Nukkad Natak a powerful tool for social change. It’s not just theatre—it’s activism, empathy, and education delivered right at the doorstep of the common people.',
    },
  ],
  hi: [
    {
      title: 'आधुनिक साहित्य में हिंदी की ताकत',
      author: 'तत्सम टीम',
      date: '10 मार्च, 2024',
      snippet: 'हिंदी साहित्य पर गहरा प्रभाव डालती है। आइए देखें कि आज की पीढ़ी इसे जीवित कैसे रख रही है...',
      fullText: 'हिंदी साहित्य आज भी युवाओं के बीच प्रासंगिक बना हुआ है। नई पीढ़ी ब्लॉग, पॉडकास्ट और सोशल मीडिया के माध्यम से हिंदी को आधुनिक संदर्भों में प्रस्तुत कर रही है। लेखक पारंपरिक शब्दों का प्रयोग करते हुए नई लेखन शैलियों को अपना रहे हैं। सोशल मीडिया और सेल्फ-पब्लिशिंग प्लेटफॉर्म नए रचनाकारों को अपनी आवाज़ साझा करने का मौका दे रहे हैं। कविता, कहानी और लेखों के ज़रिए हिंदी को एक नए रूप में देखा जा रहा है। ये साहित्य न केवल मनोरंजन करता है, बल्कि सामाजिक चेतना भी जाग्रत करता है। हिंदी की गहराई और अभिव्यक्ति की शक्ति इसे पाठकों से जोड़ती है। शहरों से लेकर गांवों तक, हिंदी साहित्य को नई ऊर्जा और पहचान मिल रही है। यह भाषा केवल जीवित नहीं है, बल्कि सृजन और बदलाव का माध्यम बन गई है, जिसमें आज की सोच और संस्कृति की झलक मिलती है।',
    },
    {
      title: 'नुक्कड़ नाटक के पर्दे के पीछे',
      author: 'रिया कपूर',
      date: '18 फ़रवरी, 2024',
      snippet: 'हमारे प्रभावशाली सड़क नाटक के पीछे की तैयारी और जुनून की एक झलक प्राप्त करें।',
      fullText: 'नुक्कड़ नाटक सिर्फ़ प्रदर्शन नहीं, बल्कि एक सामाजिक अभियान है। इसकी तैयारी मंच पर जाने से बहुत पहले शुरू हो जाती है। लेखक सामाजिक मुद्दों जैसे लैंगिक समानता, मानसिक स्वास्थ्य और स्वच्छता पर आधारित स्क्रिप्ट तैयार करते हैं। कलाकार खुले मैदानों में अभ्यास करते हैं ताकि असली माहौल का अनुभव हो। उनकी भावनाएं किरदारों में झलकती हैं, जो दर्शकों को सीधे जोड़ती हैं। वेशभूषा साधारण होती है, और प्रॉप्स स्थानीय सामग्री से बनाए जाते हैं। ये नाटक राह चलते लोगों, दुकानदारों और बच्चों तक पहुंचते हैं और एक सशक्त संदेश छोड़ते हैं। पूरी टीम मिलकर संवाद और अभिनय में सुधार करती है ताकि प्रस्तुति अधिक प्रभावशाली हो। नुक्कड़ नाटक सामाजिक जागरूकता का ज़रिया है, जिसमें सच्चाई, भावनाएं और शिक्षा का अनोखा मिश्रण होता है। यह मंचन केवल कला नहीं, बल्कि बदलाव की आवाज़ है जो सीधे लोगों तक पहुंचती है।',
    },
  ],
};


const Blog = () => {
  const { language } = useContext(LanguageContext);
  const blogPosts = blogPostsData[language] || blogPostsData.en;
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {language === 'en' ? 'Blog' : 'ब्लॉग'}
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:border-orange-500"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              <em>
                {language === 'en'
                  ? `by ${post.author} on ${post.date}`
                  : `द्वारा ${post.author} पर ${post.date}`}
              </em>
            </p>
            <p className="text-gray-700 mb-4">
              {expanded[index] ? post.fullText : post.snippet}
            </p>
            <button
              onClick={() => toggleExpand(index)}
              className="text-orange-700 font-semibold hover:underline focus:outline-none"
            >
              {expanded[index]
                ? language === 'en'
                  ? 'Read less'
                  : 'कम पढ़ें'
                : language === 'en'
                ? 'Read more...'
                : 'और पढ़ें...'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
