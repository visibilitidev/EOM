import React from "react";
import GridOneComponent from "../GridOneComponent/GridOneComponent";
import { assets } from "../../assets/assets";
import NewsAd from "../NewsAd/NewsAd";
import Trending from "../TrendingPost/TrendingPost";
import CommonGrid from "../CommonGrid/CommonGrid";

const GridComponent = () => {
  const sampleArticles = [
    {
      id: 1,
      image: assets.aboutimg,
      category: "Gadgets",
      title: "Balancing Work and Wellness: Tech Solutions for Healthy",
      excerpt:
        "Children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit.",
      timeAgo: "1h",
    },
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-6 mt-20">
      <div className="col-span-2 row-span-2">
        {sampleArticles.map((article, index) => (
          <GridOneComponent
            id={index}
            key={article.id}
            image={article.image}
            category={article.category}
            title={article.title}
            excerpt={article.excerpt}
            timeAgo={article.timeAgo}
            bigComponent={article?.bigComponent || false}
          />
        ))}
      </div>
      <div className="row-span-2 col-start-4 row-start-1">
        <NewsAd />
      </div>
      <div className="col-start-3 row-start-1">
        <CommonGrid
          key={1}
          image={assets.aboutimg2}
          category="Travel"
          title="Solo Travel: Some Tips and Destinations for the..."
          timeAgo="2mo"
          commentsCount={5}
        />
      </div>
      <div className="col-start-3 row-start-2">
        <CommonGrid
          key={2}
          image={assets.marquee1}
          category="Travel"
          title="Solo Travel: Some Tips and Destinations for the..."
          timeAgo="2mo"
          commentsCount={5}
        />
      </div>
      <div className="row-span-2 row-start-3">
        <Trending />
      </div>
      <div className="row-start-3">
        <CommonGrid
          key={3}
          image={assets.marquee2}
          category="Travel"
          title="Solo Travel: Some Tips and Destinations for the..."
          timeAgo="2mo"
          commentsCount={5}
        />
      </div>
      <div className="col-start-2 row-start-4">
        <CommonGrid
          key={4}
          image={assets.marquee3}
          category="Travel"
          title="Solo Travel: Some Tips and Destinations for the..."
          timeAgo="2mo"
          commentsCount={5}
        />
      </div>
      <div className="col-start-3 row-start-3">
        <CommonGrid
          key={5}
          image={assets.marquee4}
          category="Travel"
          title="Solo Travel: Some Tips and Destinations for the..."
          timeAgo="2mo"
          commentsCount={5}
        />
      </div>
      <div className="col-start-3 row-start-4">
        <CommonGrid
          key={6}
          image={assets.marquee6}
          category="Travel"
          title="Solo Travel: Some Tips and Destinations for the..."
          timeAgo="2mo"
          commentsCount={5}
        />
      </div>
      <div className="col-start-4 row-start-3">
        <CommonGrid
          key={7}
          image={assets.marquee7}
          category="Travel"
          title="Solo Travel: Some Tips and Destinations for the..."
          timeAgo="2mo"
          commentsCount={5}
        />
      </div>
      <div className="col-start-4 row-start-4">
        <CommonGrid
          key={8}
          image={assets.marquee8}
          category="Travel"
          title="Solo Travel: Some Tips and Destinations for the..."
          timeAgo="2mo"
          commentsCount={5}
        />
      </div>
    </div>
  );
};

export default GridComponent;
