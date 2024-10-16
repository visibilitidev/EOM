import React from "react";
import { assets } from "../../assets/assets";

const WhyEOM = () => {
  return (
    <>
      <div
        className="max-w-full flex flex-col justify-center mb-8 bg-cover bg-center py-12"
        style={{ backgroundImage: `url(${assets.palace})` }}
      >
        <h1 className="font-Montserrat font-bold text-3xl text-center my-1">
          Why is EOM one of a kind?
        </h1>
        <h5 className="font-OpenSans text-lg font-normal text-center my-2">
          This isn’t just another networking group. Here’s what sets us apart:
        </h5>

        <div className="w-5/6 max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-8">
          {/* Card 1 - Image aligned to bottom left */}
          <Card
            title={["Candid", "Conversations"]}
            imgSrc={assets.img3c}
            imgWidth="223px"
            imgHeight="246px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads."
            imgPosition={{ bottom: "0", right: "-30px" }} // Position for image 1
          />

          {/* Card 2 */}
          <Card
            title={["Founder-to-", "Founder Support"]}
            imgSrc={assets.img1}
            imgWidth="236px"
            imgHeight="256px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads."
            imgPosition={{ bottom: "-40px", right: "-20px" }} // Position for image 2
          />

          {/* Card 3 */}
          <Card
            title={["Curated", "Knowledge"]}
            imgSrc={assets.img5c}
            imgWidth="200px"
            imgHeight="220px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads."
            imgPosition={{bottom: "0", right: "-20px" }} // Position for image 3
          />

          {/* Card 4 */}
          <Card
            title={["Closed-Door", "Events"]}
            imgSrc={assets.img4c}
            imgWidth="215px"
             imgHeight="246px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads."
            imgPosition={{ bottom: "-26px", right: "-15px" }} // Position for image 4
          />

          {/* Card 5 */}
          <Card
            title={["Focus on", "Scaling"]}
            imgSrc={assets.img2c}
            imgWidth="210px"
            imgHeight="240px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads."
            imgPosition={{ bottom: "-36px", right: "-35px" }} // Position for image 5
          />

          {/* Card 6 */}
          <Card
            title={["Masterclass", "Sessions"]}
            imgSrc={assets.img6c}
            imgWidth="178px"
            imgHeight="200px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads."
            imgPosition={{ bottom: "0px", right: "-15px" }} // Position for image 6
          />
        </div>
      </div>
    </>
  );
};
const Card = ({ title, imgSrc, imgWidth, imgHeight, description, imgPosition }) => (
  <div className="relative w-full h-48 rounded-2xl overflow-hidden hover:overflow-hidden group bg-gray-300 transition-all duration-300 group-hover:rounded-none">
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue opacity-0 group-hover:opacity-100 transition duration-300 overflow-hidden rounded-2xl">
      <div className="absolute top-6 left-5 font-bold z-50 text-white text-base">
        {title.map((line, index) => (
          <span key={index}>
            {line}
            {index < title.length - 1 && <br />}
          </span>
        ))}
      </div>
      <p className="text-white mt-16 z-50 px-5 text-sm">{description}</p>
    </div>
    <div className="absolute top-6 left-5 font-bold z-10 group-hover:opacity-0 text-lg">
      {title.map((line, index) => (
        <span key={index}>
          {line}
          {index < title.length - 1 && <br />}
        </span>
      ))}
    </div>

    <img
      src={imgSrc}
      alt={title.join(" ")}
      style={{
        width: imgWidth,
        height: imgHeight,
        ...imgPosition // Apply custom position
      }}
      className="absolute object-contain z-10 transition-opacity duration-300 group-hover:opacity-0"
    />
  <div
  className="absolute inset-0 h-full bg-contain bg-no-repeat group-hover:opacity-0 bg-bottom"
  style={{ backgroundImage: `url(${assets.mountain})` }}
></div>

    <div className="absolute inset-0 bg-blue opacity-0 group-hover:opacity-50 transition duration-300"></div>
  </div>
);

export default WhyEOM;
