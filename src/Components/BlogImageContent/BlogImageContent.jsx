import React from "react";

const BlogImageContent = ({ image, imageCredit, creditAuthor, paragraphs }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Image Container */}
      <div className="space-y-2">
        <div className="overflow-hidden rounded-lg">
          <img
            src={image}
            alt="Blog content image"
            className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        {imageCredit && creditAuthor && (
          <p className="text-sm text-gray-500 italic text-center">
            {imageCredit}, by {creditAuthor}
          </p>
        )}
      </div>

      {/* Text Content */}
      <div className="max-w-5xl mx-auto space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed text-gray-800">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogImageContent;
