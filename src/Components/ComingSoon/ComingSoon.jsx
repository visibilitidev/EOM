import React from 'react';
import { assets } from '../../assets/assets'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {

  const navigate = useNavigate();

  const redirectToPreviousPage = () => {
    navigate(-1)
  }

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden">
      {/* Background image */}
      <img
        src={assets.central}
        alt="Central Station"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Overlay */}
      <div className="bg-blue-900 b p-10 text-center rounded-lg shadow-lg">
        <h1 className="text-yellow-400 text-6xl font-bold mb-4">Great things take time</h1>
        <p className="text-white text-xl mb-6">Stay tuned – something more exciting under construction!</p>
        <button className="bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-yellow-300 transition duration-300"
          onClick={redirectToPreviousPage}
        >
          Go to Previous Page
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
