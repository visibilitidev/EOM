import React from "react";
import GridOneComponent from "../GridOneComponent/GridOneComponent";
import { assets } from "../../assets/assets";
import CommonGrid from "../CommonGrid/CommonGrid";
import Trending from "../TrendingPost/TrendingPost";
import NewsAd from "../NewsAd/NewsAd";
import styles from './GridBlog.module.css'
import { useNavigate } from "react-router-dom";

export default function GridBlog({ blogList }) {

  const navigate = useNavigate();

  const handleBlogClick = (componentId, title, image) => {
    navigate("/blog", {
      replace: true,  // Use replace to avoid adding extra history entries
      state: { title, image, componentId }
    });
  };

  const adjustedBlogList = [...blogList]; // Clone the original blog list

  // Insert placeholders for NewsAd and Trending at specific positions
  adjustedBlogList.splice(3, 0, { type: "NewsAd" }); // Insert NewsAd at index 3
  adjustedBlogList.splice(4, 0, { type: "Trending" }); // Insert Trending at index 4



  return (
    <>
      <div className={styles.blogContainer}>
        {adjustedBlogList.map((article, index) => {
          if (article.type === "NewsAd") {
            return (
              <React.Fragment key={`newsAd-${index}`}>
                <div className={styles.gridItem4}>
                  <NewsAd />
                </div>
              </React.Fragment>
            );
          }

          if (article.type === "Trending") {
            return (
              <React.Fragment key={`trending-${index}`}>
                <div className={styles.gridItem5}>
                  <Trending />
                </div>
              </React.Fragment>
            );
          }

          const isBigComponent = article?.bigComponent || false;

          return (
            <React.Fragment key={article.id}>
              <div
                className={isBigComponent ? styles.gridItem1 : styles[`gridItem${index + 1}`]}
                onClick={() => handleBlogClick(article.id, article.title, article.image)} // Handle blog click
              >
                {isBigComponent ? (
                  <GridOneComponent
                    id={index}
                    outsideDescription={article.outsideDescription}
                    image={article.image}
                    category={article.category}
                    title={article.title}
                    excerpt={article.excerpt}
                    timeAgo={article.timeAgo}
                  />
                ) : (
                  <CommonGrid
                    key={article.id}
                    image={article.image}
                    category={article.category}
                    title={article.title}
                    timeAgo={article.timeAgo}
                    commentsCount={article.commentsCount}
                  />
                )}
              </div>
            </React.Fragment>
          );
        })}

      </div>
    </>
  );
}
