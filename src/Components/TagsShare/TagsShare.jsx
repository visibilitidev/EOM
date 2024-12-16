import React from "react";
import { FaFacebookF, FaTimes, FaEnvelope, FaLink } from "react-icons/fa";

const TagsShare = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto sm:flex-row justify-between items-center border-t border-gray-300 py-4 px-2 sm:px-4">
      {/* Tags Section */}
      <div className="flex items-center mb-4 sm:mb-0">
        <span className="font-semibold mr-2">Tags:</span>
        <div className="space-x-2">
          <span className="text-orange-500 hover:text-orange-600">
            Finanace
          </span>
          ,
          <span className="text-orange-500 hover:text-orange-600">
            Startup
          </span>
          ,
          <span className="text-orange-500 hover:text-orange-600">
            Tech
          </span>
          ,
          <span className="text-orange-500 hover:text-orange-600">
            Goverment Initiative
          </span>
        </div>
      </div>

      {/* Share Section */}
      {/* <div className="flex items-center">
        <span className="font-semibold mr-2">Share:</span>
        <div className="flex space-x-2">
          <span

            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
          >
            <FaFacebookF />
          </span>
          <span

            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
          >
            <FaTimes />
          </span>
          <span

            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
          >
            <FaEnvelope />
          </span>
          <span

            className="flex items-center justify-center w-8 h-8 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
          >
            <FaLink />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default TagsShare;
