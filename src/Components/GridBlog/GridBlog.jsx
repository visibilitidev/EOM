import React from "react";
import GridOneComponent from "../GridOneComponent/GridOneComponent";
import { assets } from "../../assets/assets";
import CommonGrid from "../CommonGrid/CommonGrid";
import Trending from "../TrendingPost/TrendingPost";
import NewsAd from "../NewsAd/NewsAd";

export default function GridBlog() {
  const sampleArticles = [
    {
      bigComponent: true,
      id: 1,
      image: assets.aboutimg,
      category: "Gadgets",
      title: "Balancing Work and Wellness: Tech Solutions for Healthy",
      excerpt:
        "Children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit.",
      timeAgo: "1h",
    },
  ];
  const samplePosts = [
    {
      id: 1,
      image: assets.aboutimg2,
      category: "Travel",
      title: "Solo Travel: Some Tips and Destinations for the...",
      timeAgo: "2mo",
      commentsCount: 5,
    },
    {
      id: 2,
      image: assets.marquee2,
      category: "Travel2",
      title: "Solo Travel: Some Tips and Destinations for the...",
      timeAgo: "2mo",
      commentsCount: 5,
    },
    {
      id: 3,
      image: assets.marquee3,
      category: "Travel3",
      title: "Solo Travel: Some Tips and Destinations for the...",
      timeAgo: "2mo",
      commentsCount: 5,
    },
    {
      id: 4,
      image: assets.marquee4,
      category: "Travel4",
      title: "Solo Travel: Some Tips and Destinations for the...",
      timeAgo: "2mo",
      commentsCount: 5,
    },
    {
      id: 5,
      image: assets.marquee5,
      category: "Travel5",
      title: "Solo Travel: Some Tips and Destinations for the...",
      timeAgo: "2mo",
      commentsCount: 5,
    },
    {
      id: 6,
      image: assets.marquee6,
      category: "Travel6",
      title: "Solo Travel: Some Tips and Destinations for the...",
      timeAgo: "2mo",
      commentsCount: 5,
    },
    {
      id: 7,
      image: assets.marquee7,
      category: "Travel7",
      title: "Solo Travel: Some Tips and Destinations for the...",
      timeAgo: "2mo",
      commentsCount: 5,
    },
    {
      id: 8,
      image: assets.marquee8,
      category: "Travel",
      title: "Solo Travel: Some Tips and Destinations for the...",
      timeAgo: "2mo",
      commentsCount: 5,
    },
  ];
  return (
    <>
      <div className="mt-16 grid grid-cols-4 gap-4">
        {sampleArticles.map((article, index) => (
          <React.Fragment key={article.id}>
            <GridOneComponent
              id={index}
              image={article.image}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              timeAgo={article.timeAgo}
              bigComponent={article?.bigComponent || false}
            />

            {/* Conditionally render AnotherComponent after the third item (index 3) */}
            {index === 3 && <NewsAd />}
            {index === 4 && <Trending />}
          </React.Fragment>
        ))}
        {samplePosts.map((article) => (
          <CommonGrid
            key={article.id}
            image={article.image}
            category={article.category}
            title={article.title}
            timeAgo={article.timeAgo}
            commentsCount={article.commentsCount}
          />
        ))}
      </div>
    </>
  );
}
