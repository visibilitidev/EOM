import React from 'react'

const CardContainer = ({ heading, points, footer }) => {
    return (
        <div>
            <div className="max-w-section3W max-h-section3H flex-1 border py-6 pb-2 px-8 justify-center text-center rounded-xl bg-gradient-to-b from-blue-900 from-90% to-yellow-300 to-10%">
                <h3 className="font-Inter font-bold text-text_32px text-left text-white">{heading}</h3>
                <ul className="font-OpenSans font-normal text-lg text-left text-white py-6 ps-10 list-disc marker:text-yellow-300 marker:text-4xl flex flex-col gap-2 w-[90%]">
                    {
                        points?.map((point) => (
                            <li className='py-2'>{point}</li>
                        ))
                    }
                </ul>
                <h2 className="font-OpenSans font-extrabold text-lg text-black text-center">{footer}</h2>
            </div>
        </div>
    )
}

export default CardContainer