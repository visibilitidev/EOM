import React from "react";

const BlogSection2 = ({ title, paragraphs }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold">{title}</h1>

      {/* Article content */}
      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg leading-relaxed text-gray-800">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogSection2;
