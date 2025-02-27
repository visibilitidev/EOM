import React from 'react'
import { assets } from '../../assets/assets'
import CardContainer from '../CardContainer/CardContainer';

const FeaturesComponent = () => {


    const productFounders = [
        "Expert mentorship from seasoned founders & investors",
        "Access to strategic growth capital",
        "Community-driven brand visibility & industry connections",
        "Exclusive partnerships with top enablers",
    ];

    const investorPoints = [
        "Early deal access in high-growth startups",
        "Rigorous deal evaluation & due diligence",
        "Co-investment opportunities with leading VCs & angel networks",
        "Ongoing portfolio support and strategic collaboration",
        "Access to live pitch events, community networking & founder interactions",
    ];




    return (
        <section
            className="min-h-screen mt-12 bg-contain bg-center p-8 pt-0 mb-8 bg-no-repeat"
            style={{ backgroundImage: `url(${assets.palace})` }}
        >
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-3xl font-bold text-center mb-4">
                    Powered by the best
                </h1>

                <p className="text-xl text-center mb-2">
                    EOM is supported by the top founders & angel Investors in the ecosystem.
                </p>
                <p className="text-xl text-center mb-12">
                    Now, what’s in it for you?
                </p>
            </div>

            <div className="max-w-full flex flex-col lg:flex-row justify-center min-h-[450px] gap-4 mt-12">
                <CardContainer
                    heading="If You’re a Startup Founder"
                    points={productFounders}
                    footer="Apply Now"
                    link='https://forms.gle/SbVX1tVico4o67kEA'
                />
                <CardContainer
                    heading="If You're an Investor"
                    points={investorPoints}
                    footer="Register as an EOM Angel"
                    link='https://docs.google.com/forms/d/1jq6zhFMrTsmYG3CmLzO-sNSDsCnDwbaz-PiikCLAPDk/edit'
                />
            </div>
        </section>
    )
}

export default FeaturesComponent






