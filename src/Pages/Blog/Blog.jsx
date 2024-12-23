import React from "react";
import { useParams } from "react-router-dom";
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
import Blog9 from "../../Components/BlogData/Blog9/Blog9";
import { blogList } from "../../data/blogs";

export default function Blog() {
  const { blogName } = useParams(); // Get the blog name from the URL

  // Replace hyphens in the blogName from the URL with spaces to match the blogList title
  const normalizedBlogName = blogName.replace(/-/g, " ");

  // Map blog components to blog IDs
  const blogComponents = {
    1: <StartupCapital />,
    2: <Blog2 />,
    3: <Blog3 />,
    4: <Blog4 />,
    5: <Blog5 />,
    6: <Blog6 />,
    7: <Blog7 />,
    8: <Blog8 />,
    9: <Blog9 />,
  };

  // Find the matching blog entry based on the normalized blog name
  const matchedBlog = blogList.find(
    (blog) => blog.title.toLowerCase() === normalizedBlogName.toLowerCase()
  );

  if (!matchedBlog) {
    return <div>Blog not found!</div>; // Handle unmatched blog case
  }

  return (
    <>
      <BlogHeader
        title={matchedBlog.title}
        image={matchedBlog.image}
        imageAlt={matchedBlog.title}
      />
      <div>{blogComponents[matchedBlog.id]}</div>
      <TagsShare />
    </>
  );
}
