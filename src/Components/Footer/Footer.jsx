import React from 'react';
import { Linkedin, Youtube, Instagram } from 'lucide-react';
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <footer className="bg-blue text-white p-6 mt-8">
      <div className="container mx-auto md:w-3/4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center">
          <div className="mb-6 md:mb-0 w-24">
            <img src={assets.logo}alt='' />
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=' bg-white rounded-full p-1.5'>
              <Linkedin className="w-5 h-5 text-black" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className=' bg-white rounded-full p-1.5'>
              <Youtube className="w-5 h-5 text-black" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className=' bg-white rounded-full p-1.5'>
              <Instagram className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-yellow-500 my-6"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center">
          <div className="mb-6 md:mb-0 items-center">
            <h3 className=" text-sm lg:text-base font-semibold mb-2">LET'S START WORKING TOGETHER</h3>
            <a href="tel:+919710727517" className=" text-3xl lg:text-5xl font-bold">+91 97107 27517</a>
          </div>
          
          <nav className="flex flex-col  space-y-2 md:space-y-2 md:space-x-6">
            <a href="#about" className="hover:text-yellow-500 transition-colors lg:ml-8">About</a>
            <a href="#mentors" className="hover:text-yellow-500 transition-colors">Mentors</a>
            <a href="#partners" className="hover:text-yellow-500 transition-colors">Partners</a>
            <a href="#join" className="hover:text-yellow-500 transition-colors">Join EOM</a>
          </nav>
        </div>
        
        <div className="mt-9 text-sm lg:text-base text-center md:text-left">
          © Copyright 2024 by <a href="https://www.entrepreneursofmadras.com/index.html" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">EntrepreneursOfMadras</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;