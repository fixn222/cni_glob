import { CreditCard, EyeIcon, Globe, Upload, WholeWord, WholeWordIcon } from "lucide-react"
// import React from 'react'

import LogoLoop from '../components/LogoLoop';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import {TbWorldCheck} from 'react-icons/tb'
const techLogos = [
    { node: <Globe size={50} />, title: "Select Destination", href: "https://react.dev" },
    { node: <Upload size={50}/>, title: "Upload Details", href: "https://nextjs.org" },
    { node: <CreditCard size={50} />, title: "Pay Securely", href: "https://www.typescriptlang.org" },
    { node: <EyeIcon size={50} />, title: "Track Status", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];



const CTA = () => {
    return (
        <section className="w-full flex flex-col items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col items-center text-center space-y-5 max-w-3xl">

                {/* Badge */}
                <div className="bg-white/5 backdrop-blur-2xl flex items-center space-x-3 px-5 py-2 rounded-full">
                    <Upload size={18} />
                    <span className="font-semibold text-xs sm:text-sm tracking-wide">
                        HOW IT WORKS
                    </span>
                </div>

                {/* Heading */}
                <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Four Simple Steps
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg max-w-[350px] text-muted-foreground">
                    From country selection to visa approval streamlined for speed and clarity.
                </p>

                {/* Carousel Container */}
                <div className="w-[400px] lg:w-full  mt-6">
                    <LogoLoop
                        logos={techLogos}
                        speed={25}
                        direction="left"
                        logoHeight={50}
                        gap={50}
                        hoverSpeed={0.3}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="transparent"
                        ariaLabel="Technology partners"

                        renderItem={(item, key) => {
                            const isNode = "node" in item;

                            return (
                                <div
                                    key={key}
                                    className="flex flex-col items-center justify-center min-w-[90px]"
                                >
                                    {/* Logo */}
                                    <div className="text-3xl sm:text-4xl">
                                        {isNode ? item.node : (
                                            <img src={item.src} alt={item.alt} className="h-8" />
                                        )}
                                    </div>

                                    {/* Title */}
                                    <span className="text-xs sm:text-sm mt-2 text-muted-foreground">
                                        {item.title}
                                    </span>
                                </div>
                            );
                        }}
                    />

                </div>

            </div>

        </section>
    )
}

export default CTA