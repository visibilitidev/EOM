import React from "react";

const BlogTextSection = ({ mainText, subText }) => {
  // Extract the first letter and remaining text
  const firstLetter = mainText.charAt(0);
  const remainingText = mainText.slice(1);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 mt-16">
      <div className="prose lg:prose-xl">
        <p className="text-lg leading-relaxed">
          <span className="float-left text-7xl font-bold mr-3 mt-1">
            {firstLetter}
          </span>
          {remainingText}
        </p>

        {subText && <p className="text-lg leading-relaxed mt-6">{subText}</p>}
      </div>
    </div>
  );
};

export default BlogTextSection;
