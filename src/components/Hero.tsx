import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium luxury vehicle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent text-sm font-semibold tracking-wide">
              ELITE SUBPRIME SPECIALIST
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-background mb-6 leading-tight">
            The Deal Starts When Everyone Else Says No.
          </h1>
          
          <p className="text-xl md:text-2xl text-background/90 mb-8 leading-relaxed">
            Bad credit, new credit, bruised credit — Jason still gets it done.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="premium" size="xl" className="group">
              Apply Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-light" size="xl">
              <Phone className="mr-2" />
              Talk to Jason
            </Button>
          </div>

          <p className="mt-6 text-background/80 text-sm">
            No impact to your credit score. No obligation.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
