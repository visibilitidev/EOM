import React from "react";
import { useNavigate } from "react-router-dom";
import { Clock, MessageSquare } from "lucide-react";

const CommonGrid = ({
  id,
  image,
  category,
  title,
  timeAgo,
  commentsCount,
  className = "",
}) => {

  return (
    <article
      id={`post-${id}`}
      className={`bg-white overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Category Badge */}
        <span className="px-3 py-1 bg-white text-gray-800 text-sm font-medium border-2 border-black shadow-sm">
          {category}
        </span>

        <h2 className="text-xl font-bold text-gray-900 mt-4 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
          {title}
        </h2>

        {/* Metadata Footer */}
        <div className="flex items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{
              new Date(timeAgo).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short", // "short" for abbreviated month (e.g., "Sept")
                year: "numeric",
              })}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CommonGrid;
