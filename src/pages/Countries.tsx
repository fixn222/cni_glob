// Responsive refresh: country cards now stack predictably on phones and animate into view with low motion.
import { motion } from "motion/react";
import { ArrowBigDown, FlagIcon } from "lucide-react";

import ContriesCard from "../components/Contries-card";
import { Button } from "../components/ui/button";
import type { CardProps } from "../components/Contries-card";

export type Country = CardProps;

export const COUNTRIES: Country[] = [
  {
    code: "CA",
    name: "Canada",
    visaType: ["Tourist", "Student", "Work"],
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
    <section
      id="countries"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#29a89a26,transparent_60%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,500px)] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full"
        >
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <FlagIcon size={18} />
              <span className="text-xs font-semibold tracking-[0.22em] sm:text-sm">
                DESTINATIONS
              </span>
            </div>

            <h2 className="mt-6 text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Supported Countries
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Apply for visas to 190+ countries. These are some of the most
              requested destinations, presented in a layout that remains usable
              on compact screens.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {COUNTRIES.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                <ContriesCard
                  {...country}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex justify-center lg:justify-start">
            <Button
              variant="secondary"
              className="rounded-xl px-5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <ArrowBigDown />
              More countries
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
          className="mx-auto flex w-full max-w-sm justify-center lg:sticky lg:top-24 lg:max-w-none"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
            <img
              src="/ct.png"
              alt="Countries illustration"
              className="aspect-[4/4.5] w-full rounded-[1.5rem] object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Countries;
