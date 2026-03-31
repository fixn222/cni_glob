// import React from 'react'

// import PixelCard from "./PixelCard";
import { Button } from "./ui/button";

export interface CardProps {
    code: string;
    name: string;
    visaType: string[];
    image: string;
    flag: string;
    popular?: boolean;
}

// cimport { Button } from "./ui/button";

const ContriesCard = ({ code, name, visaType, image, flag, popular }: CardProps) => {
    return (
        <div className="flex flex-col p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:scale-[1.03] transition duration-300">

            {/* Image */}
            <img
                src={image}
                alt={name}
                className="w-full h-[120px] object-cover rounded-xl"
            />

            {/* Content */}
            <div className="flex flex-col items-center mt-4 text-center">

                {/* Country Name */}
                <span className="font-bold text-base">{name}</span>

                {/* Visa Types */}
                <div className="flex flex-wrap justify-center gap-2 mt-3">

                    <span

                        className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10"
                    >
                        {visaType}
                    </span>

                </div>

                {/* Flag */}
                <div className="text-2xl mt-3">{flag}</div>

                {/* Button */}
                <Button className="mt-4 w-full">Apply now</Button>

            </div>
        </div>
    );
};
export default ContriesCard