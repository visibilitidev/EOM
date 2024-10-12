import React, { useState } from "react";
import { assets } from "../../assets/assets";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={assets.logo}
              className="h-8"
              alt="Flowbite Logo"
              style={{ width: "103px", height: "47px" }}
            />
          </a>
          <button
            onClick={toggleSidebar}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-OpenSans font-extrabold text-base flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="/about" className="block py-2 px-3 text-black">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black">
                  DEALS
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-black">
                  RESOURCES
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="focus:outline-none font-OpenSans font-extrabold text-base text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                  JOIN THE CLUB
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-600"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="p-6 space-y-4">
          <li>
            <a href="/about" className="block py-2 px-3 text-black">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-black">
              DEALS
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-black">
              RESOURCES
            </a>
          </li>
          <li>
            <button
              type="button"
              className="w-full focus:outline-none font-OpenSans font-extrabold text-base text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 dark:focus:ring-yellow-900"
            >
              JOIN THE CLUB
            </button>
          </li>
        </ul>
      </div>
      {/* Overlay for when the sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

export default Navbar;
