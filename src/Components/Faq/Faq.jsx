import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Faq.css';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
    <div className={`border-1 rounded-xl mb-6 overflow-hidden transition-colors shadow-[2px_2px_8px_rgba(0,0,0,0.1)] ${isOpen ? 'border-[#041334]' : 'border-gray-200'}`}>
    <button
      className="w-full text-left p-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
      onClick={toggleOpen}
    >
      <span className="text-lg md:text-2xl font-medium">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-6 h-6 bright-yellow rounded-full text-white" />
      ) : (
        <ChevronDown className="w-6 h-6 bright-yellow rounded-full text-white" />
      )}
    </button>
    {isOpen && (
      <div className="p-4 bg-gray-50">
        <p className="text-base">{answer}</p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Is EOM for entrepreneurs only in Madras (Chennai)?",
      answer: "Not at all! We celebrate the relentless spirit of the South (aka \"Madrasi\"). Our members are from all districts of Tamil Nadu, a few even from neighboring states such as Bangalore, Hyderabad & Mumbai."
    },
    {
      question: "What are the benefits of joining EOM?",
      answer: "Joining EOM provides networking opportunities, mentorship, access to resources, and a supportive community for entrepreneurs."
    },
    {
      question: "How can I get more information?",
      answer: "You can visit our website, reach out to us via email, or attend one of our open events to learn more about EOM."
    },
    {
      question: "How do I stay updated on EOM events and initiatives?",
      answer: "Follow us on social media, subscribe to our newsletter, or become a member to receive regular updates on our events and initiatives."
    },
    {
      question: "Does EOM invest in startups?",
      answer: "While EOM primarily focuses on providing support and resources, we occasionally connect promising startups with potential investors in our network."
    }
  ];

  return (
    <div className="w-full md:w-4/5 lg:w-[77%] mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={index === openIndex}
          toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default FAQ;