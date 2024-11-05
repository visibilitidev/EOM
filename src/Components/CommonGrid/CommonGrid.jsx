import React from "react";
import { Clock, MessageSquare } from "lucide-react";

// Individual Blog Post Component
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
      className={`bg-white  overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Image Container */}
      <div className="relative aspect-[16/9]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Container */}
      <div className="p-4">
        {/* Category Badge */}
        <span className="px-3 py-1 bg-white  text-gray-800 text-sm font-medium border-2 border-black shadow-sm">
          {category}
        </span>

        <h2 className="text-xl font-bold text-gray-900 mt-4 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
          {title}
        </h2>

        {/* Metadata Footer */}
        <div className="flex items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{timeAgo} ago</span>
          </div>
          {commentsCount !== undefined && (
            <div className="flex items-center gap-1">
              <MessageSquare size={16} />
              <span>{commentsCount}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const ExampleBlogPage = () => {
  const samplePosts = [
    {
      id: 1,
      image: "/api/placeholder/800/600",
      category: "Travel",
      title: "Solo Travel: Some Tips and Destinations for the...",
      timeAgo: "2mo",
      commentsCount: 5,
    },
    // Add more posts as needed
  ];

  return (
    <BlogPostGrid
      posts={samplePosts}
      gridCols={{ sm: 1, md: 2, lg: 3 }}
      gap={6}
    />
  );
};

export default CommonGrid;
