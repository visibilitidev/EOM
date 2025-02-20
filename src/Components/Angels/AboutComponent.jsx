import React from 'react'
import { assets } from '../../assets/assets'

const AboutComponent = () => {
    return (
        <div className="max-w-5xl mx-auto p-8 font-OpenSans mt-4 md:mt-20 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 pr-4 mb-6 md:mb-0 space-y-2">
                    <h1 className="text-3xl font-bold mb-4 leading-tight font-Montserrat">
                        What Makes Us Different?
                    </h1>
                    <p className="mb-4 text-base text-gray-700">
                        We offer early and exclusive access to the most promising startups in South India through:
                    </p>
                    <ul className="mb-6 text-base text-gray-700 list-disc space-y-2">
                        <li><b>EOM Founder Network</b> – A strong community of experienced operators & growth-focused entrepreneurs.</li>

                        <li><b>Super Angel Circle</b> – A curated group of high-impact investors actively supporting early-stage brands.</li>

                        <li><b>Investment Committee</b> – A panel of seasoned experts ensuring thorough due diligence.</li>

                        <li><b>Partnerships with Tier-1 VCs</b> – Enabling co-investment and follow-on funding opportunities.</li>
                    </ul>
                </div>
                <div className=" w-full mx-auto md:w-1/2 relative">
                    <div className="bg-gray-200 h-full rounded-[40px] overflow-hidden">
                        <img
                            src={assets.aboutimg}
                            alt="Placeholder"
                            className="w-full h-full object-cover"
                        />
                        <div className=" hidden sm:block absolute -bottom-24 -right-16 md:-bottom-16 md:-right-20 w-48 h-52 md:w-[236.32px] md:h-[209.47px] gap-0 rotate-[-15.78deg]">
                            <img src={assets.trophy} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent