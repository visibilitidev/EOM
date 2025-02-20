import React from 'react'

const CTAWithImage = ({ imgSrc, title, ctaText, className }) => {
    return (
        <div className="max-w-5xl mx-auto p-8 font-sans mt-4 md:mt-20 overflow-hidden">
            <div className={`flex flex-col md:flex-row ${className}`}>
                <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col justify-center gap-6">
                    <h1 className="text-3xl font-bold leading-tight font-Montserrat">
                        {title}
                    </h1>
                    <div className="bg-yellow-400 px-4 w-fit  hover:bg-white hover:shadow-[0_0_15px_5px_rgba(250,204,21,0.8)] transition-shadow duration-300 inline-block rounded-lg ">
                        <button className="b text-black font-extrabold py-2 px-4 rounded-md duration-300   text-lg  transition-transform transform 
               hover:scale-105 active:scale-75 active:bg-yellow-400 active:shadow-md 
               active:translate-y-1"
                        >
                            {ctaText}
                        </button>
                    </div>
                </div>
                <div className=" w-full mx-auto md:w-1/2 relative">
                    <div className="bg-gray-200 h-full rounded-[10px] overflow-hidden">
                        <img
                            src={imgSrc}
                            alt="Placeholder"
                            className="w-full h-full object-cover"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTAWithImage