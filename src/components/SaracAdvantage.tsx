import { CheckCircle2, TrendingUp, Users, Truck, Shield } from "lucide-react";

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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Sarac Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Why Jason closes deals others cannot
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SaracAdvantage;
