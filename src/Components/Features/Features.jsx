import React from "react";
import CardContainer from "../CardContainer/CardContainer";

function Features() {

  const productFounders = [
    "Access to 100 Cr founders-only WhatsApp group",
    "Industry-specific high power network ",
    "Free pass to inperson macro events",
    "50% Off on 3 private dinner meetups",
    "Full access to Madrasi Connect AI bot",
    "Get your story featured on EOM page",
    "Get more visibility beyond the ecosystem",
  ]
  const serviceProviders = [
    "Access to Madrasi Connect AI bot for hiring",
    "Get a verified profile on the EOM club",
    "Industry-specific high power network ",
    "50% off on EOM inperson macro editions",
    "Unlock opportunities for collaboration",
    "Get your story featured on EOM page",
    "Get more visibility beyond the ",
  ]

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
      <div className="max-w-full flex justify-center gap-4 mt-12">
        <CardContainer heading="For Product Founders" points={productFounders} footer="Join the Founder's Circle" />
        <CardContainer heading="For Service Providers" points={serviceProviders} footer="Coming soon" />
      </div>
    </>
  );
}

export default Features;
