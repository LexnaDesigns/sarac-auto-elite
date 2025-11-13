import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/FINALEDIT1.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure the video doesn't loop
    video.removeAttribute('loop');

    // Try to play the video
    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay failed; keep muted and wait for user gesture
        console.log('Autoplay blocked - video will play on user interaction');
      });
    };

    tryPlay();

    // When video ends, pause and keep on last frame
    const handleEnded = () => {
      video.pause();
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
      </div>

      {/* Background Video (hidden on mobile) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none z-0 hidden md:block"
        playsInline
        autoPlay
        muted
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Background Image Fallback (shown on mobile) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src={heroImage}
          alt="Premium luxury vehicle"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-black/50 to-black/40" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="mb-6 inline-block animate-pulse-glow">
            <span className="px-6 py-2 bg-gradient-accent text-black border-2 border-accent rounded-full text-sm font-bold tracking-widest uppercase shadow-glow">
              Elite Subprime Specialist
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-background mb-6 leading-tight tracking-tight">
            The Deal Starts When<br />
            <span className="text-transparent bg-clip-text bg-gradient-accent">Everyone Else Says No.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-silver mb-10 leading-relaxed font-medium">
            Bad credit, new credit, bruised credit — <span className="text-accent font-bold">Jason still gets it done.</span>
          </p>

          {/* AskAva CTA Banner */}
          <div className="mb-8">
            <div className="AskAva-cta" data-product="creditTool" data-type="banner"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="premium" size="xl" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Apply Now
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button variant="outlineLight" size="xl" className="group">
              <Phone className="mr-2 group-hover:rotate-12 transition-transform" />
              Talk to Jason
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-accent border-2 border-black" />
              ))}
            </div>
            <p className="text-background/90 text-sm font-medium">
              <span className="text-accent font-bold">500+</span> approvals in the last 12 months
            </p>
          </div>

          <p className="mt-6 text-silver/70 text-sm italic border-l-2 border-accent pl-4">
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
