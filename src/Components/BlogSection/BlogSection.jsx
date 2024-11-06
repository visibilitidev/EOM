import React from "react";

const BlogSection = ({
  paragraphs,
  image,
  imageAlt,
  imageCredit,
  imagePosition = "right",
}) => {
  const ImageContainer = () => (
    <div className="lg:w-1/3 space-y-2">
      <div className="overflow-hidden rounded-lg md:mt-16">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      {imageCredit && (
        <p className="text-sm text-gray-500 italic text-center">
          {imageCredit}
        </p>
      )}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div
        className={`flex flex-col lg:flex-row gap-8 ${
          imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        <ImageContainer />

        <div className="lg:w-2/3 space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
