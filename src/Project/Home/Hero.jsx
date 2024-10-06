import React from 'react'

function Hero() {
  return (
    <>
    <div className='max-w-full flex justify-center mt-12'>
      <div className='max-w-3xl max-h-80 flex flex-col justify-center items-center'>
        <h5 className='font-OpenSans text-base font-normal my-2'>START STRONG, SCALE STRONGER WITH</h5>
        <h1 className=' font-Montserrat font-black text-text_54px text-center leading-LH_65px my-1'>THE FINEST <br /> FOUNDERS-ONLY CLUB</h1>
        <h6 className='text-center font-OpenSans text-base font-normal my-1 leading-5'>EOM is an exclusive community for growth-focused entrepreneurs who are ready <br /> for the next big leap.</h6>
        <button type="button" class="focus:outline-none font-OpenSans font-extrabold text-lg text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 my-4 dark:focus:ring-yellow-900">Become a Member</button>
      </div>
      <div>
      </div>
    </div>
    </>
  )
}

export default Hero