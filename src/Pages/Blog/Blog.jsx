import React from "react";
import BlogHeader from "../../Components/BlogHeader/BlogHeader";
import { assets } from "../../assets/assets";
import BlogTextSection from "../../Components/BlogTextSection/BlogTextSection";
import BlogSection from "../../Components/BlogSection/BlogSection";
import BlogSection2 from "../../Components/BlogSection2/BlogSection2";
import BlogImageContent from "../../Components/BlogImageContent/BlogImageContent";
import TagsShare from "../../Components/TagsShare/TagsShare";

export default function Blog() {
  return (
    <>
      <BlogHeader
        title="The Rise of Gourmet Street Food: Trends and Top Picks"
        image={assets.aboutimg}
        imageAlt="Journalists holding microphones and recording devices"
      />
      <BlogTextSection
        mainText="She started her blog exactly six months before I launched Camels & Chocolate, and she really set the bar high for my own blog birthday, Y’all this summer! I’ve already been brainstorming party ideas … who wants to come? It’s no coincidence that Buster Keaton and Charlot’s movies of the and award-winning chefs about what exactly makes their hometowns In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words. A range of amenities provides many things to do in Bellevue. About 40 percent of the city’s population are minorities, which contributes to an overall diverse range of lifestyles and ideas."
        subText="I talked to climbers, Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun."
      />
      <BlogSection
        paragraphs={[
          "Bike paths and sidewalks make getting to and from the city's many festivals, museums, restaurants and music venues easy. A range of amenities provides many things to do in Bellevue. About 40 percent of the city's population are minorities, which contributes to an overall diverse range of lifestyles and ideas.",
          "While Denver sits at the base of the Rocky Mountains, it's not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained. Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun.",
          "In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words. They fully understood and used the power of showing without words. They fully understood and used the power of showing without words.",
        ]}
        image={assets.aboutimg2}
        imageAlt="EU voting ballot"
        imageCredit="Holding flower, by Anthony Tran"
      />
      <BlogSection2
        title="Capital of Texas"
        paragraphs={[
          "Visual storytelling is simply the way most brands will decide to go in 2016 & beyond, as they try to tell their story to their customers the oldest and most important unwritten rule in film industry says that you shouldn't rely much on words to tell your story. In fact, you should rely on them as less as possible. It's no coincidence that Buster Keaton and Charlot's movies remain among the biggest classic movies of all time. In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words.",

          "While Denver sits at the base of the Rocky Mountains, it's not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained sits at the base of the Rocky Mountains, it's not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained.",
        ]}
      />
      <BlogImageContent
        image={assets.abouthero}
        imageCredit="Pink Marketing"
        creditAuthor="Mak"
        paragraphs={[
          "While Denver sits at the base of the Rocky Mountains, it's not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained. Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun.",
          "In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words.",
          "Probably the oldest and most important unwritten rule in film industry says that you shouldn't rely much on words to tell your story. In fact, you should rely on them as less as possible is simply the way most brands will decide to go in 2016 & beyond, as they try to tell their story to their customers.",
        ]}
      />
      <BlogSection2
        title="Great Schools and Entertainment"
        paragraphs={[
          "Visual storytelling is simply the way most brands will decide to go in 2016 & beyond, as they try to tell their story to their customers the oldest and most important unwritten rule in film industry says that you shouldn't rely much on words to tell your story. In fact, you should rely on them as less as possible. It's no coincidence that Buster Keaton and Charlot's movies remain among the biggest classic movies of all time. In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words.",

          "While Denver sits at the base of the Rocky Mountains, it's not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained sits at the base of the Rocky Mountains, it's not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained.",
        ]}
      />
      <BlogSection
        paragraphs={[
          "Bike paths and sidewalks make getting to and from the city's many festivals, museums, restaurants and music venues easy. A range of amenities provides many things to do in Bellevue. About 40 percent of the city's population are minorities, which contributes to an overall diverse range of lifestyles and ideas.",
          "While Denver sits at the base of the Rocky Mountains, it's not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained. Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun.",
          "In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words. They fully understood and used the power of showing without words. They fully understood and used the power of showing without words.",
        ]}
        image={assets.aboutimg2}
        imageAlt="Description"
        imageCredit="Credit info"
        imagePosition="left"
      />
      <TagsShare />
    </>
  );
}
