import React from "react";
import { Zap, ChevronRight } from "lucide-react";

const TrendingPost = ({ time, title, isLast }) => (
  <div className={`py-4 ${!isLast && "border-b border-gray-100"}`}>
    <div className="flex items-start gap-3 flex-col">
      <span className="text-sm text-gray-500 font-medium min-w-[50px]">
        {time}
      </span>
      <h3 className="text-gray-900 font-medium line-clamp-2 w-4/5 hover:text-blue-600 transition-colors cursor-pointer">
        {title}
      </h3>
    </div>
  </div>
);

const TrendingPosts = ({
  title = "Trending now",
  posts = [],
  onSeeAllClick,
  className = "",
}) => {
  return (
    <div className={`bg-white shadow-sm p-4 mt-10 ${className}`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Zap className="text-orange-500" size={20} />
        <h2 className="text-lg font-bold flex flex-col">
          <span className="text-gray-900">{title.split(" ")[0]}</span>
          <span className="text-orange-500 ml-1">{title.split(" ")[1]}</span>
        </h2>
      </div>

      {/* Posts List with Fixed Height and Overflow Scroll */}
      <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
        {" "}
        {/* Adjust max-h as needed */}
        {posts.map((post, index) => (
          <TrendingPost
            key={post.id}
            time={post.time}
            title={post.title}
            isLast={index === posts.length - 1}
          />
        ))}
      </div>

      {/* See All Link */}
      <button
        onClick={onSeeAllClick}
        className="flex items-center gap-1 text-orange-500 font-medium mt-4 hover:text-orange-600 transition-colors"
      >
        SEE ALL POSTS
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

// Example Usage
const Trending = () => {
  const trendingPosts = [
    {
      id: 1,
      time: "10:23",
      title: "The Rise of AI-Powered Personal Assistants: How...",
    },
    {
      id: 2,
      time: "09:30",
      title: "Tech Innovations Reshaping the Retail...",
    },
    {
      id: 3,
      time: "09:10",
      title: "Balancing Work and Wellness: Tech Solutions f...",
    },
    {
      id: 4,
      time: "08:00",
      title: "The Importance of Sleep: Tips for Better Rest and...",
    },
    {
      id: 5,
      time: "22:00",
      title: "The Future of Sustainable Living: Driving Eco-Friendl...",
    },
    // Add more posts as needed
  ];

  const handleSeeAllClick = () => {
    console.log("See all posts clicked");
  };

  return (
    <div className="">
      <TrendingPosts posts={trendingPosts} onSeeAllClick={handleSeeAllClick} />
    </div>
  );
};

export default Trending;
