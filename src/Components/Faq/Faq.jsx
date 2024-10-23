import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Faq.css';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => (
  <div
    className={`border-2 rounded-xl mb-6 overflow-hidden transition-colors shadow-[2px_2px_8px_rgba(0,0,0,0.1)] ${isOpen ? 'border-[#041334]' : 'border-gray-200'
      }`}
  >
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
        {/* Render HTML content safely */}
        <p
          className="text-base"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    )}
  </div>
);


const FAQ = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(0);

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
