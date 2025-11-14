import { useState } from "react";

// Extend Window interface for AskAva
declare global {
  interface Window {
    AskAva?: {
      openModal: () => void;
    };
  }
}

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCheckPreApproval = () => {
    // Trigger AskAva modal
    if (window.AskAva) {
      window.AskAva.openModal();
    } else {
      console.warn("AskAva widget not loaded yet. Please wait a moment and try again.");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-[#1a1a1a] border-b border-gray-800 shadow-lg animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Equifax Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/equifax-logo.png" 
              alt="Equifax" 
              className="h-8 w-auto"
            />
          </div>

          {/* Center: Message Text */}
          <div className="flex-1 text-center md:text-left px-4">
            <p className="text-white text-sm md:text-base font-normal leading-snug">
              Great loan options are waiting for you. Know if you qualify before you buy.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex-shrink-0">
            <button
              onClick={handleCheckPreApproval}
              className="bg-white hover:bg-gray-100 text-black font-bold px-4 py-2 rounded transition-colors duration-200 whitespace-nowrap text-sm md:text-base border border-gray-300"
            >
              <div className="flex flex-col items-center">
                <span>GET YOUR FREE SCORE</span>
                <span className="text-[10px] md:text-xs font-normal text-gray-600 mt-0.5">
                  This will NOT impact your Credit
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;
