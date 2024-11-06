import React from "react";
import { Share2, Mail, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";

const BlogHeader = ({ title, image, imageAlt }) => {
  const socialLinks = [
    { icon: Facebook },
    { icon: Twitter },
    { icon: Linkedin },
    { icon: Share2 },
    { icon: Mail },
    { icon: Link2 },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="max-w-7xl md:max-w-5xl mx-auto px-4 py-8 space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
          {title}
        </h1>

        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <button className="bg-white hover:bg-orange-500 p-3 rounded-full border border-gray-200 transition-colors duration-200 hover:border-orange-500 group">
                <Icon
                  size={20}
                  className="text-gray-700 group-hover:text-white"
                />
              </button>
            );
          })}
        </div>

        <div className="overflow-hidden  mt-8 ">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
