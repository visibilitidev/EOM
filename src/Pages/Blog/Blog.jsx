import React from "react";
import { useLocation } from "react-router-dom";
import BlogHeader from "../../Components/BlogHeader/BlogHeader";
import TagsShare from "../../Components/TagsShare/TagsShare";
import StartupCapital from "../../Components/BlogData/Blog1/Blog1";
import Blog2 from "../../Components/BlogData/Blog2/Blog2";
import Blog3 from "../../Components/BlogData/Blog3/Blog3";
import Blog4 from "../../Components/BlogData/Blog4/Blog4";
import Blog5 from "../../Components/BlogData/Blog5/Blog5";
import Blog6 from "../../Components/BlogData/Blog6/Blog6";
import Blog7 from "../../Components/BlogData/Blog7/Blog7";
import Blog8 from "../../Components/BlogData/Blog8/Blog8";

export default function Blog() {
  const location = useLocation();
  const { title, image, description, componentId } = location.state || {
    title: "Default Blog Title",
    image: "defaultImagePath",
    description: "Default blog description text.",
    componentId: 0,
  };

  // Create an array of blog components for looping
  const blogComponents = [
    <StartupCapital />,
    <Blog2 />,
    <Blog3 />,
    <Blog4 />,
    <Blog5 />,
    <Blog6 />,
    <Blog7 />,
    <Blog8 />,
  ];

  // Loop through the blog components based on componentId
  const selectedComponent = blogComponents[componentId % blogComponents.length];

  return (
    <>
      <BlogHeader title={title} image={image} imageAlt={title} />
      <div>
        {/* Render the selected blog component dynamically */}
        {selectedComponent}
      </div>
      <TagsShare />
    </>
  );
}
