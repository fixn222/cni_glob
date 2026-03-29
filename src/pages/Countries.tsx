import { ArrowBigDown, FlagIcon } from "lucide-react";
import ContriesCard from "../components/Contries-card";
import { Button } from "../components/ui/button";

// import React from 'react'
export interface Country {
    code: string;
    name: string;
    visaType: string[];
    image: string;
    flag: string;
    popular?: boolean;
}

export const COUNTRIES: Country[] = [
    {
        code: "CA",
        name: "Canada",
        visaType: ["Tourist ", "Student ", " Work "],
        image:
            "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop",
        flag: "🇨🇦",
        popular: true,
    },
    {
        code: "AU",
        name: "Australia",
        visaType: ["Tourist", "Student", "Work"],
        image:
            "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=1200&auto=format&fit=crop",
        flag: "🇦🇺",
        popular: true,
    },
    {
        code: "UK",
        name: "United Kingdom",
        visaType: ["Tourist", "Student", "Work"],
        image:
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop",
        flag: "🇬🇧",
        popular: true,
    },
    {
        code: "US",
        name: "United States",
        visaType: ["Tourist", "Student", "Work"],
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
        flag: "🇺🇸",
    },

];
const Countries = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#29a89a26,transparent_60%)]" />

            {/* Container */}
            <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* LEFT SIDE */}
                <div className="flex flex-col w-full max-w-xl items-center lg:items-start text-center lg:text-left">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
                        <FlagIcon size={18} />
                        <span className="text-sm font-semibold tracking-wide">
                            DESTINATIONS
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Supported Countries
                    </h1>

                    {/* Description */}
                    <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-md">
                        Apply for visas to 190+ countries. Here are some of our most popular destinations.
                    </p>

                    {/* Cards Grid */}
                    <div className="mt-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {COUNTRIES.map((c) => {
                            const cleanedVisaTypes = c.visaType.map((v) => v.trim());

                            return (
                                <ContriesCard
                                    key={c.code}
                                    code={c.code}
                                    flag={c.flag}
                                    image={c.image}
                                    name={c.name}
                                    visaType={cleanedVisaTypes}
                                    popular={c.popular}
                                />
                            );
                        })}

                    </div>
                    <div className="flex flex-row w-full mt-5 justify-center items-center">
                        <Button className="hover:scale-100" variant={"secondary"}><ArrowBigDown /> More Cuntries</Button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full flex justify-center items-center">
                    <img
                        src="./ct.png"
                        alt="Countries illustration"
                        className="
              w-[280px] 
              sm:w-[400px] 
              lg:w-[520px] 
              xl:w-[580px] 
              rounded-3xl 
              shadow-2xl
              backdrop-blur-xl
            "
                    />
                </div>

            </div>
        </section>
    );
};
export default Countries