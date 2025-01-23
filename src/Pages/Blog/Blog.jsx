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
import Blog10 from "../../Components/BlogData/Blog10/Blog10";
import Blog11 from "../../Components/BlogData/Blog11/Blog11";
import { blogList } from "../../data/blogs";
import Blog12 from "../../Components/BlogData/Blog12";
import Blog13 from "../../Components/BlogData/Blog13";

// Function to normalize titles: remove non-alphabetical characters and replace hyphens with spaces
const generateBlogUrl = (title) => {
  // Remove all special characters, replace spaces with hyphens, and clean up multiple hyphens
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")  // Remove special characters
    .replace(/\s+/g, "-")          // Replace spaces with hyphens
    .replace(/-+/g, "-")           // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, "")            // Remove leading hyphens
    .replace(/-+$/, "");           // Remove trailing hyphens
};

// Function to parse the incoming blogName from the URL
const parseBlogUrl = (blogName) => {
  // Normalize the URL parameter by removing non-alphabetical characters and replacing hyphens with spaces

  // Find the matching blog from the blog list by comparing the normalized titles
  const matchingBlog = blogList.find(
    (blog) => generateBlogUrl(blog.title) === blogName
  );

  // Return the matching blog or undefined if no match is found
  return matchingBlog ? matchingBlog : undefined;
};

export default function Blog() {
  const { blogName } = useParams(); // Get the blog name from the URL

  // Parse the blogName to find the corresponding blog
  const matchedBlog = parseBlogUrl(blogName);

  // Map blog IDs to components
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
    10: <Blog10 />,
    11: <Blog11 />,
    12: <Blog12 />,
    13: <Blog13 />
  };

  if (!matchedBlog) {
    return <div>Blog not found!</div>; // Handle unmatched blog case
  }

  return (
    <section className="p-2 overflow-hidden">
      <BlogHeader
        title={matchedBlog.title}
        image={matchedBlog.image}
        imageAlt={matchedBlog.title}
        authorImage={matchedBlog?.authorImage}
        authorNameURL={matchedBlog?.authorNameURL}
        authorName={matchedBlog?.authorName}
      />
      <div>{blogComponents[matchedBlog.id]}</div>
      <TagsShare />
    </section>
  );
}
