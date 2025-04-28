import { Dot } from 'lucide-react'
import React from 'react'

const CardContainer = ({ heading, points, footer, link }) => {
    return (
        <div className="bg-blue rounded-xl shadow-lg overflow-hidden flex flex-col max-w-md w-full">
            <div className="p-4 flex-grow">
                <h2 className="text-3xl font-bold text-center text-white mb-6 font-Inter">{heading}</h2>
                <ul className="space-y-4 font-OpenSans flex flex-col gap-2 w-[90%]">
                    {points.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="text-yellow-400 self-start text-3xl font-extrabold leading-none"><Dot strokeWidth={8} /></span>
                            <span className="text-white">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-yellow-400 px-4 hover:bg-yellow-500">
                <button
                    className="w-full py-2 text-navy-900 font-extrabold text-lg transition-transform transform 
                    hover:scale-105 active:scale-95 active:bg-yellow-400 active:shadow-md 
                    active:translate-y-1 active:shadow-lg"
                    onClick={() => window.location.href = link }
                >
                    {footer}
                </button>
            </div>

        </div>
    )
}

export default CardContainer