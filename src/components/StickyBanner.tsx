import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCheckPreApproval = () => {
    // Trigger AskAva modal
    if (window.AskAva) {
      window.AskAva.openModal();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-black via-primary to-black border-b-2 border-accent shadow-glow animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-4 gap-3 md:gap-6">
          {/* Left: Message Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-background text-sm md:text-base font-semibold leading-tight">
              <span className="hidden md:inline">Great financing options are waiting for you. </span>
              <span className="text-accent font-bold">Get pre-approved in minutes.</span>
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex items-center gap-3">
            <Button 
              variant="premium" 
              size="sm"
              onClick={handleCheckPreApproval}
              className="group relative overflow-hidden font-bold whitespace-nowrap"
            >
              <span className="relative z-10">Check Your Pre-Approval</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            {/* Close Button (Optional) */}
            <button
              onClick={() => setIsVisible(false)}
              className="text-silver hover:text-background transition-colors p-1"
              aria-label="Close banner"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
