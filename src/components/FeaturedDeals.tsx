import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bmwImage from "@/assets/car-bmw.jpg";
import mercedesImage from "@/assets/car-mercedes.jpg";
import audiImage from "@/assets/car-audi.jpg";

const deals = [
  {
    image: bmwImage,
    year: "2023",
    make: "BMW",
    model: "5 Series",
    payment: "$520/mo",
    reason: "Perfect credit rebuild vehicle—luxury feel, proven reliability, strong resale value.",
  },
  {
    image: mercedesImage,
    year: "2024",
    make: "Mercedes-Benz",
    model: "GLE 350",
    payment: "$680/mo",
    reason: "Family-sized luxury with premium safety features. Banks love Mercedes approvals.",
  },
  {
    image: audiImage,
    year: "2023",
    make: "Audi",
    model: "A6",
    payment: "$595/mo",
    reason: "Executive presence at mid-tier pricing. Ideal for business professionals rebuilding credit.",
  },
];

const FeaturedDeals = () => {
  const handleApplyNow = () => {
    // Trigger AskAva modal
    if (window.AskAva) {
      window.AskAva.openModal();
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-background mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-accent">Deals</span>
          </h2>
          <p className="text-xl text-silver max-w-2xl mx-auto font-medium">
            Hand-picked vehicles Jason sourced for clients like you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="group bg-gradient-dark rounded-xl overflow-hidden border-2 border-accent/20 hover:border-accent shadow-card hover:shadow-glow transition-all duration-500 animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-72">
                <img
                  src={deal.image}
                  alt={`${deal.year} ${deal.make} ${deal.model}`}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-4 right-4 bg-gradient-accent text-black px-5 py-2 rounded-full font-black text-xl shadow-glow animate-pulse-glow">
                  {deal.payment}
                </div>
              </div>
              
              <div className="p-8 bg-black/40 backdrop-blur-sm">
                <h3 className="text-3xl font-black text-background mb-2 group-hover:text-accent transition-colors">
                  {deal.year} {deal.make}
                </h3>
                <p className="text-lg text-silver mb-6 font-semibold">{deal.model}</p>
                
                <div className="bg-primary/30 border border-accent/30 rounded-lg p-5 mb-6 group-hover:bg-primary/50 transition-colors">
                  <p className="text-sm text-silver leading-relaxed">
                    <span className="font-bold text-accent uppercase tracking-wide">Why Jason picked this:</span>{" "}
                    <span className="text-background">{deal.reason}</span>
                  </p>
                </div>

                <Button 
                  variant="premium" 
                  className="w-full group/btn"
                  onClick={handleApplyNow}
                >
                  <span className="flex items-center justify-center">
                    Get This Deal
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-dark border-2 border-accent/30 rounded-xl p-8">
          <p className="text-silver mb-6 text-lg font-medium">
            These are just examples. <span className="text-accent font-bold">Jason sources exactly what you need.</span>
          </p>
          <Button 
            variant="hero" 
            size="xl" 
            className="animate-pulse-glow"
            onClick={handleApplyNow}
          >
            Tell Jason What You Want
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
