import { Settings } from "lucide-react";
import ServiceCard from "../components/Service-Card";
import { SERVICES } from "../lib/constants";

const Service = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#29a89a26,transparent_60%)]" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* LEFT (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/servis.png"
            alt="services"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* RIGHT (Content) */}
        <div className="w-full mt-20 lg:w-1/2 max-w-xl text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl shadow-lg border border-white/10">
            <Settings size={20} />
            <span className="text-sm font-semibold tracking-wide">
              SERVICES
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Smart Application Hub
          </h1>

          {/* Description */}
          <p className="mt-4 text-muted-foreground text-sm sm:text-base">
            Everything you need to navigate the visa process powered by
            intelligent automation.
          </p>

          {/* CTA (optional but hero-like) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                icon={service.icon}
                description={service.description}
                highlight={service.highlight}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;