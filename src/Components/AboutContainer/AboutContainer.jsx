import React from "react";

function AboutContainer() {
  return (
    <>
      <div class="max-w-full ps-4 pe-4 sm:ps-20 sm:pe-20 max-h-screen ">
        <div class="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 p-10">
          <div className="max-w-Section1col1">
            <h2 class="text-3xl leading-9 font-bold">This isn’t a community for everyone — It’s about founders helping founders</h2>
            <p class="text-base font-normal leading-5">
              EOM is a space for founders who are ready to engage in honest conversations, share experiences, and grow alongside peers who truly understand the journey. <br /> <br />

              Entrepreneurs of Madras offers a trusted, high-level environment where you can talk openly, connect deeply, and exchange growth potential – from finance to hiring, marketing to operations, pitching to fundraising – all in one place.
            </p>
            <button type="button" class="focus:outline-none font-OpenSans font-extrabold text-lg text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-lg px-5 py-2.5 me-2 mb-2 my-4 dark:focus:ring-yellow-900">STORY OF EOM</button>
          </div>
          <div class="max-w-xl flex justify-center">
            <img class="max-w-full max-h-96" src="https://dummyimage.com/564x463/#D9D9D/0011ff.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContainer;
