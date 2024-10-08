import React from "react";

const WhyEOM = () => {
  return (
    <>
      <div className="max-w-full flex flex-col justify-center mt-32 bg-[url('./public/palace.png')] bg-cover bg-center py-12">
        <h1 className="font-Montserrat font-bold text-3xl text-center my-1">
          Why is EOM one of a kind?
        </h1>
        <h5 className="font-OpenSans text-lg font-normal text-center my-2">
          This isn’t just another networking group. Here’s what sets us apart:
        </h5>

        <div className="w-5/6 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 place-items-center mt-8">
          {/* Card 1 - Image aligned to bottom left */}
          <Card
            title={["Candid", "Conversations"]}
            imgSrc="Cardimg/img1.png"
            backgroundImage="./public/mountain.png"
            imgWidth="215px"
            imgHeight="210px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads."
            isBottomRight={true}
          />

          {/* Card 2 */}
          <Card
            title={["Founder-to-", "Founder Support"]}
            imgSrc="Cardimg/img2.png"
            backgroundImage="./public/mountain.png"
            imgWidth="215px"
            imgHeight="210px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads."
          />

          {/* Card 3 */}
          <Card
            title={["Curated", "Knowledge"]}
            imgSrc="Cardimg/img3.png"
            backgroundImage="./public/mountain.png"
            imgWidth="200px"
            imgHeight="220px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads."
          />

          {/* Card 4 */}
          <Card
            title={["Closed-Door", "Events"]}
            imgSrc="Cardimg/img4.png"
            backgroundImage="./public/mountain.png"
            imgWidth="145px"
            imgHeight="205px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads"
          />

          {/* Card 5 */}
          <Card
            title={["Focus on", "Scaling"]}
            imgSrc="Cardimg/img5.png"
            backgroundImage="./public/mountain.png"
            imgWidth="200px"
            imgHeight="215px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads"
          />

          {/* Card 6 */}
          <Card
            title={["Masterclass", "Sessions"]}
            imgSrc="Cardimg/img6.png"
            backgroundImage="./public/mountain.png"
            imgWidth="210px"
            imgHeight="230px"
            description="Get The Chance To Engage In Honest, No-Nonsense Discussions With Fellow Founders. Share Your Challenges, Explore Opportunities & Gain Insights From Those Who've Faced Similar Crossroads"
          />
        </div>
      </div>
    </>
  );
};

const Card = ({ title, imgSrc, backgroundImage, imgWidth, imgHeight, description, isBottomLeft }) => (
  <div className="relative w-full h-48 rounded-2xl overflow-hidden group bg-gray-300 transition-all duration-300 group-hover:rounded-none">
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue opacity-0 group-hover:opacity-100 transition duration-300 overflow-hidden rounded-2xl ">
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
      style={{ width: imgWidth, height: imgHeight }}
      className={`absolute object-contain z-10 transition-opacity duration-300 group-hover:opacity-0 ${
        isBottomLeft ? "left-0 bottom-0" : "right-0 bottom-0"
      }`}
    />

    <div
      className={`absolute inset-0 h-full bg-[url('${backgroundImage}')] bg-contain bg-no-repeat bg-bottom group-hover:opacity-0`}
    ></div>

    <div className="absolute inset-0 bg-blue opacity-0 group-hover:opacity-50 transition duration-300"></div>
  </div>
);

export default WhyEOM;
