import React from 'react';
import { Linkedin, Youtube, Instagram } from 'lucide-react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
const Footer = () => {
  const email = 'entrepreneursofmadras@gmail.com.';
  return (
    <footer className="bg-blue text-white p-6">
      <div className="container mx-auto md:w-3/4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center">
          <div className="mb-6 md:mb-0 w-24">
            <Link to='/'>
             <img src={assets.logo} alt='' />
            </Link>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a href="https://www.linkedin.com/company/entrepreneurs-of-madras/" target="_blank" rel="noopener noreferrer" className=' bg-white rounded-full p-1.5'>
              <Linkedin className="w-5 h-5 text-black" />
            </a>
            <a href="https://www.youtube.com/@entrepreneursofmadras" target="_blank" rel="noopener noreferrer" className=' bg-white rounded-full p-1.5'>
              <Youtube className="w-5 h-5 text-black" />
            </a>
            <a href="https://www.instagram.com/entrepreneursofmadras/" target="_blank" rel="noopener noreferrer" className=' bg-white rounded-full p-1.5'>
              <Instagram className="w-5 h-5 text-black" />
            </a>
          </div>
        </div>

        <div className="border-t border-yellow-500 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <h3 className=" text-sm lg:text-base font-semibold mb-2">LET'S START WORKING TOGETHER</h3>
            <a href="tel:+919710727517" className=" text-3xl lg:text-5xl font-bold">+91 97107 27517</a>
            <p><a href={`mailto:${email}`} className='text-white md:text-base lg:text-2xl font-semibold hover:text-slate-300 active:text-white mt-3'>entrepreneursofmadras@gmail.com.</a></p>
          </div>

          <nav className="flex flex-col items-center md:items-end  space-y-2 md:space-y-2 md:space-x-6">
            <Link to="/about" className="hover:text-yellow-500 transition-colors lg:ml-8">About</Link>
            <Link to="/angels" className="hover:text-yellow-500 transition-colors lg:ml-8">Angels</Link>
            <Link to="/comingsoon" className="hover:text-yellow-500 transition-colors">FEBE</Link>
            <Link to="/comingsoon" className="hover:text-yellow-500 transition-colors">Resources</Link>
            <a href="https://nas.io/entrepreneurs-of-madras-application" className="hover:text-yellow-500 transition-colors">Join EOM</a>
          </nav>
        </div>

        <div className="mt-9 text-sm lg:text-base text-center md:text-left">
          © Copyright 2024 by <a href="#" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">EntrepreneursOfMadras</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;