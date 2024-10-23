import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Faq.css';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div className={`border-2 rounded-xl mb-6 overflow-hidden transition-colors shadow-[2px_2px_8px_rgba(0,0,0,0.1)] ${isOpen ? 'border-[#041334]' : 'border-gray-200'}`}>
      <button
          className="w-full text-left p-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
          onClick={toggleOpen}
      >
          <span className="text-lg md:text-2xl font-medium">{question}</span>
          <div className="flex items-center">
              {isOpen ? (
                  <ChevronUp className="bright-yellow width-6 height-6 rounded-full text-white" />
              ) : (
                  <ChevronDown className="bright-yellow width-6 height-6 rounded-full text-white" />
              )}
          </div>
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
      answer: "Not at all! We celebrate the relentless spirit of the South (aka “Madrasi”). Our members are from all districts of Tamil Nadu, a few even from neighboring states such as Bangalore, Hyderabad & Mumbai.",
    },
    {
      question: "What are the benefits of joining EOM?",
      answer: "Check out all the perks on our [Membership Page].",
    },
    {
      question: "How can I get more information?",
      answer: "Send us a message on WhatsApp at +91 97107 27517, and we'll figure out the best way to assist you. We welcome all questions and concern.",
    },
    {
      question: "How do I stay updated on EOM events and initiatives?",
      answer: "Join our exclusive EOM Founders-only WhatsApp group. As a member, you get priority invites to investor meetups, private dinners, and early registration for major editions & getaways. Or you can always follow us on our social media handles.",
    },
    {
      question: "Does EOM invest in startups?",
      answer: "No, we don’t. But we do connect you with the right investors!",
    },
    {
      question: "Can EOM help me raise funds?",
      answer: "Absolutely! We partner with VCs and angels. Our Investor Meetups and Private Dinners are perfect opportunities to connect.",
    },
    {
      question: "What is Madrasi Connect?",
      answer: "Madrasi Connect is an AI-powered Whatsapp bot. It helps members find resources, connect, and network through keyword searches & recommendations from the vast EOM database.",
    },
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
