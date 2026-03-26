// import React from 'react'

import PixelCard from "./PixelCard";
import { Button } from "./ui/button";

export interface CardProps {
    code: string;
    name: string;
    visaType: string[];
    image: string;
    flag: string;
    popular?: boolean;
}

const ContriesCard = ({ code, name, visaType, image, flag, popular }: CardProps) => {
    return (

        <div className="flex  flex-col p-10 border-2 backdrop-blur-2xl  shadow-2xl items-center justify-center ">
            <div className="flex flex-col justify-center items-center">
                <img src={image} alt="" className="w-full h-[100px]" />
                <span className="font-bold mt-3 text-sm mb-5">
                    {name}
                </span>
                <p className="font-poppins font-bold text-sm">
                    {visaType}
                </p>
                <p className="font-poppins  text-center text-2xl">
                    {flag}
                </p>
                <Button className="mt-5" >Apply now</Button>
            </div>
        </div>

    )
}

export default ContriesCard