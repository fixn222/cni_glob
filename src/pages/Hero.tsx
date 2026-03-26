import { Brain, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
// import Earth from "../components/earth";
import Particles from "../components/Particles";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#29a89a26,transparent_60%)] " >
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center items-center lg:items-start lg:mt-0 sm:mt-10 text-center lg:text-left max-w-xl">

          <div className="bg-white/5 backdrop-blur-2xl flex items-center space-x-3 px-5 py-2 rounded-full w-fit">
            <Brain size={20} />
            <span className="font-semibold text-sm">AI POWERED</span>
          </div>

          <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Apply for Your Visa
            <br />
            with Confidence
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl max-w-[600px]">
            Streamlined visa applications powered by AI. From document verification
            to real time tracking we make global mobility simple.
          </p>

          <div className="flex items-center mt-4 space-x-2 justify-center lg:justify-start">
            <Shield size={18} />
            <span className="text-sm">Secured with Arcject</span>
          </div>

          <div className="flex flex-col sm:flex-row mt-6 gap-4 w-full sm:w-auto">
            <Button className="h-12 px-8 text-lg w-full sm:w-auto">
              Apply now
            </Button>
            <Button variant="secondary" className="h-12 px-8 text-lg w-full sm:w-auto">
              Learn More
            </Button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center items-center">
          <img
            src="./cni1.png"
            alt="Hero visual"
            className="w-[500px] lg:w-[580px] rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;