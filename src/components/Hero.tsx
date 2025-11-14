import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/FINALEDIT1.mp4";
import jasonProfessional from "@/assets/jason-professional.jpeg";
import AvaWidgetHero from "./AvaWidgetHero";
import AvaWidgetButton from "./AvaWidgetButton";

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-[132px]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
      </div>

      {/* Background Video (hidden on mobile) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0 hidden md:block"
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
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6 inline-block animate-pulse-glow">
              <span className="px-6 py-2 bg-gradient-accent text-black border-2 border-accent rounded-full text-sm font-bold tracking-widest uppercase shadow-glow">
                Elite Subprime Specialist
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-background mb-6 leading-tight tracking-tight">
              The Deal Starts When<br />
              <span className="text-transparent bg-clip-text bg-gradient-accent">Everyone Else Says No.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-silver mb-8 leading-relaxed font-medium">
              Bad credit, new credit, bruised credit — <span className="text-accent font-bold">Jason still gets it done.</span>
            </p>

            {/* Trust Indicators */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3 text-background/90">
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <span className="font-medium">12+ Years Subprime Finance Expertise</span>
              </div>
              <div className="flex items-center gap-3 text-background/90">
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <span className="font-medium">Fast Approvals Up to $75,000</span>
              </div>
              <div className="flex items-center gap-3 text-background/90">
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <span className="font-medium">500+ Approvals in 12 Months</span>
              </div>
            </div>

            <p className="text-silver/70 text-sm italic border-l-2 border-accent pl-4 mt-8 mb-8">
              No impact to your credit score. No obligation. Get approved in minutes.
            </p>

            {/* AVA Credit Widget Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <AvaWidgetButton className="flex-1" />
            </div>
          </div>

          {/* Right Content - Jason's Photo */}
          <div className="hidden lg:block animate-fade-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
              
              {/* Jason's Image */}
              <div className="relative z-10">
                <img 
                  src={jasonProfessional} 
                  alt="Jason Sarac - Elite Automotive Finance Specialist"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-accent/30 object-cover"
                />
                
                {/* Badge on image */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-md rounded-xl p-4 border border-accent/40">
                  <p className="text-background font-bold text-lg mb-1">Jason Sarac</p>
                  <p className="text-accent text-sm font-semibold">Subprime Finance Expert</p>
                  <p className="text-silver text-xs mt-1">Serving Ontario for 12+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AVA Widget Hero Banner - Full Width at Bottom of Hero */}
        <div className="mt-16 animate-fade-in-up">
          <AvaWidgetHero />
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
