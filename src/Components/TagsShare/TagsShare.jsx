import React from "react";
import { FaFacebookF, FaTimes, FaEnvelope, FaLink } from "react-icons/fa";

const TagsShare = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto sm:flex-row justify-between items-center border-t border-gray-300 py-4 px-2 sm:px-4">
      {/* Tags Section */}
      <div className="flex items-center mb-4 sm:mb-0">
        <span className="font-semibold mr-2">Tags:</span>
        <div className="space-x-2">
          <a href="#" className="text-orange-500 hover:text-orange-600">
            Food
          </a>
          ,
          <a href="#" className="text-orange-500 hover:text-orange-600">
            Life Style
          </a>
          ,
          <a href="#" className="text-orange-500 hover:text-orange-600">
            Tech
          </a>
          ,
          <a href="#" className="text-orange-500 hover:text-orange-600">
            Travel
          </a>
        </div>
      </div>

      {/* Share Section */}
      <div className="flex items-center">
        <span className="font-semibold mr-2">Share:</span>
        <div className="flex space-x-2">
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
          >
            <FaTimes />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
          >
            <FaEnvelope />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
          >
            <FaLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TagsShare;
