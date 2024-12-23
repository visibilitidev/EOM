import React from "react";
import { Zap, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TrendingPost = ({ time, title, isLast, handlePostClick }) => (
  <div onClick={handlePostClick} className={`py-4 ${!isLast && "border-b border-gray-100"}`}>
    <div className="flex items-start gap-3 flex-col">
      <span className="text-sm text-gray-500 font-medium min-w-[50px]">
        {
          new Date(time).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short", // "short" for abbreviated month (e.g., "Sept")
            year: "numeric",
          })}
      </span>
      <h3 className="text-gray-900 font-medium line-clamp-2 w-4/5 hover:text-blue-600 transition-colors cursor-pointer">
        {title}
      </h3>
    </div>
  </div>
);

const TrendingPosts = ({ title = "Trending now", posts = [], onSeeAllClick, className = "" }) => {
  const navigate = useNavigate();

  // Corrected function to handle post click
  const handlePostClick = (post) => {
    const blogUrl = post.title.toLowerCase().replace(/ /g, "-"); // Replace spaces with hyphens
    navigate(`/resources/${blogUrl}`, {
      state: {
        componentId: post.id, // Pass the component ID or other required state
      },
    });
  };

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
      <div className="max-h-[81vh] overflow-y-auto divide-y divide-gray-100">
        {posts.map((post, index) => (
          <TrendingPost
            key={post.id}
            time={post.timeAgo}
            title={post.title}
            isLast={index === posts.length - 1}
            handlePostClick={() => handlePostClick(post)} // Pass a reference, not a call
          />
        ))}
      </div>

      {/* See All Link */}
      {/* <button
        onClick={onSeeAllClick}
        className="flex items-center gap-1 text-orange-500 font-medium mt-4 hover:text-orange-600 transition-colors"
      >
        SEE ALL POSTS
        <ChevronRight size={16} />
      </button> */}
    </div>
  );
};


const Trending = ({ blogPosts }) => {
  const handleSeeAllClick = () => {
    console.log("See all posts clicked");
  };

  return (
    <div className="">
      <TrendingPosts posts={blogPosts} onSeeAllClick={handleSeeAllClick} />
    </div>
  );
};

export default Trending;
