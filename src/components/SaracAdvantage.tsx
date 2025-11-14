import { CheckCircle2, TrendingUp, Users, Truck, Shield } from "lucide-react";
import AvaWidgetInline from "./AvaWidgetInline";

const advantages = [
  {
    icon: Shield,
    title: "Subprime Expert",
    description: "12+ years specializing in difficult approvals. When banks say no, Jason finds a way.",
  },
  {
    icon: TrendingUp,
    title: "Fast Approvals Up to $75,000",
    description: "Direct relationships with all major banks and 15+ lenders. Decisions in hours, not days.",
  },
  {
    icon: Users,
    title: "All Major Banks + 15+ Lenders",
    description: "The strongest lender network in Ontario. More options means better deals for you.",
  },
  {
    icon: CheckCircle2,
    title: "Personalized Deal Hunting",
    description: "Like a real estate broker—Jason sources vehicles from auctions, Enterprise, and exclusive dealer networks.",
  },
  {
    icon: Truck,
    title: "Delivered to Your Driveway",
    description: "Keys in hand, hassle-free. Jason handles everything from approval to delivery.",
  },
];

const SaracAdvantage = () => {
  return (
    <section className="py-24 bg-gradient-dark relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(hsl(43 96% 56% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(43 96% 56% / 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black text-background mb-4 tracking-tight">
            The Sarac <span className="text-transparent bg-clip-text bg-gradient-accent">Advantage</span>
          </h2>
          <p className="text-xl text-silver max-w-2xl mx-auto font-medium">
            Why Jason closes deals others cannot
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-black/60 backdrop-blur-sm rounded-lg border-2 border-accent/20 hover:border-accent hover:shadow-glow transition-all duration-300 animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-background mb-3 group-hover:text-accent transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-silver/80 leading-relaxed group-hover:text-silver transition-colors">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* AVA Widget CTA */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Experience the <span className="text-accent">Sarac Advantage</span>
            </h3>
            <p className="text-xl text-silver">
              See if you qualify for financing in minutes
            </p>
          </div>
          <AvaWidgetInline />
        </div>
      </div>
    </section>
  );
};

export default SaracAdvantage;
