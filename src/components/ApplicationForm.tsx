import { CheckCircle2 } from "lucide-react";

const ApplicationForm = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden" id="apply">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-background mb-6 tracking-tight">
              Ready to Get <span className="text-transparent bg-clip-text bg-gradient-accent">Pre-Approved?</span>
            </h2>
            <p className="text-xl md:text-2xl text-silver mb-8 font-medium">
              Start your application with Jason in minutes — no credit impact, no obligation.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl border-2 border-accent/20 p-8 md:p-12 mb-8 animate-scale-in">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-background font-bold mb-1">No Hard Credit Check</p>
                  <p className="text-silver/80 text-sm">Won't affect your credit score</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-background font-bold mb-1">100% Confidential</p>
                  <p className="text-silver/80 text-sm">Your information stays private</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-background font-bold mb-1">Personal Review</p>
                  <p className="text-silver/80 text-sm">Jason reviews every application</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-silver/70 text-base italic">
                Get approved in minutes • Financing up to $75,000 • Bad credit specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
