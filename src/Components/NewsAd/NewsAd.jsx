import React from "react";
import { assets } from "../../assets/assets";

const NewsAdCard = ({
  title = "NEWS",
  subtitle = "Multi-Layout News & Editorial Blogging Template",
  buttonText = "BUY NOW",
  adText = "AD SLOT DEMO",
  onButtonClick,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#1c1c1c] shadow-2xl overflow-hidden sticky top-0 ${className}`}
    >
      <div className="px-6 py-8 text-center">
        <h1 className="text-4xl font-bold text-white tracking-wider mb-3">
          {title}
        </h1>
        <p className="text-gray-400 text-sm mb-6">{subtitle}</p>
        <button
          onClick={onButtonClick}
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-2.5 rounded-full transition-colors duration-300"
        >
          {buttonText}
        </button>
        <p className="text-gray-500 text-xs mt-4">{adText}</p>
      </div>
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 relative">
            <div className="bg-gray-800 rounded-lg overflow-hidden aspect-[16/9]">
              <img
                src={assets.book}
                alt="Main preview"
                className="w-full h-full object-cover"
              />
              {/* Vertical Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example Usage
const NewsAd = () => {
  const handleBuyNow = () => {
    console.log("Buy Now clicked");
  };

  return (
    <div className="min-h-screenp-8 flex sticky top-0">
      <NewsAdCard
        onButtonClick={handleBuyNow}
        title="NEWS"
        subtitle="Multi-Layout News & Editorial Blogging Template"
        buttonText="BUY NOW"
        adText="AD SLOT DEMO"
      />
    </div>
  );
};

export default NewsAd;
