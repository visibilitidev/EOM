import React from "react";
import Styles from "../CSS/Style.module.css"

function Section3() {
  return (
    <>
    <div className="max-w-full flex justify-center mt-12">
      <div className="max-w-3xl max-h-80 flex flex-col justify-center items-center">
        <h1 className=" font-Montserrat font-black text-text_54px text-center leading-LH_65px my-1">
          No more solo journeys
        </h1>
        <h5 className="font-OpenSans text-base font-normal my-2">
          If you’re serious about scaling—join the like-minded people to
          fast-track success.
        </h5>
      </div>
    </div>
    <div className="max-w-full flex justify-center mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 p-10 gap-10 justify-center">
        <div className="max-w-section3W max-h-section3H border py-6 pb-2 px-8 justify-center text-center rounded-xl bg-gradient-to-b from-blue-900 from-90% to-yellow-300 to-10%">
            <h3 className="font-Inter font-bold text-text_32px text-left text-white">For Product Founders</h3>
            <ul className="font-OpenSans font-normal text-lg text-left text-white py-6 ps-10 list-disc marker:text-yellow-300 marker:text-4xl">
                <li className="py-2">Access to 100 Cr founders-only WhatsApp group</li>
                <li className="py-2">Industry-specific high power network</li>
                <li className="py-2">Free pass to inperson macro events</li>
                <li className="py-2">50% Off on 3 private dinner meetups</li>
                <li className="py-2">Full access to Madrasi Connect AI bot</li>
                <li className="py-2">Get your story featured on EOM page</li>
                <li className="py-2">Get more visibility beyond the ecosystem</li>
            </ul>
            <h2 className="font-OpenSans font-extrabold text-lg text-black text-center">Join the Founders’ Circle</h2>
        </div>
        <div className="max-w-section3W max-h-section3H border py-6 pb-2 px-8 justify-center text-center rounded-xl bg-gradient-to-b from-blue-900 from-90% to-yellow-300 to-10%" >
        <h3 className="font-Inter font-bold text-text_32px text-left text-white">For Service Providers</h3>
            <ul className="font-OpenSans font-normal text-lg text-left text-white ps-10 list-disc marker:text-yellow-300 marker:text-4xl marker:leading-4 marker:pt-8">
                <li className="py-2">Access to Madrasi Connect AI bot for hiring</li>
                <li className="py-2">Get a verified profile on the EOM club</li>
                <li className="py-2">Industry-specific high power network</li>
                <li className="py-2">50% off on EOM inperson macro editions</li>
                <li className="py-2">Unlock opportunities for collaboration</li>
                <li className="py-2">Get your story featured on EOM page</li>
                <li className="py-2">Get more visibility beyond the ecosystem</li>
            </ul>
            <h2 className="font-OpenSans font-extrabold text-lg text-black text-center">Coming Soon</h2>
        </div>
      </div>
    </div>
    </>
  );
}

export default Section3;
