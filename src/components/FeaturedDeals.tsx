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
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Deals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked vehicles Jason sourced for clients like you
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={deal.image}
                  alt={`${deal.year} ${deal.make} ${deal.model}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {deal.payment}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {deal.year} {deal.make}
                </h3>
                <p className="text-lg text-muted-foreground mb-4">{deal.model}</p>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-semibold text-primary">Why Jason picked this:</span> {deal.reason}
                  </p>
                </div>

                <Button variant="outline" className="w-full group">
                  Get This Deal
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            These are just examples. Jason sources exactly what you need.
          </p>
          <Button variant="hero" size="lg">
            Tell Jason What You Want
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
