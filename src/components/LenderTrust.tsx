import { Building2, Award, Handshake, Zap } from "lucide-react";

const credentials = [
  {
    icon: Building2,
    title: "All Major Banks",
    description: "TD, RBC, Scotiabank, BMO, CIBC—Jason has direct approval lines.",
  },
  {
    icon: Handshake,
    title: "15+ Specialty Lenders",
    description: "Exclusive access to subprime and alternative lenders across Canada.",
  },
  {
    icon: Award,
    title: "12+ Years Experience",
    description: "Over a decade mastering Ontario's toughest automotive finance cases.",
  },
  {
    icon: Zap,
    title: "The Closer Finance Managers Call",
    description: "When dealerships get stuck, they call Jason to close the deal.",
  },
];

const LenderTrust = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Lenders Pick Up His Calls
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Relationships built on performance and trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-card">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {credential.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {credential.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="bg-card rounded-lg p-8 border border-border max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Trusted Lender Network
            </h3>
            <p className="text-muted-foreground">
              Jason's proven track record means faster approvals and better rates
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
            {["TD", "RBC", "Scotiabank", "BMO", "CIBC"].map((bank, index) => (
              <div
                key={index}
                className="text-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="text-2xl font-bold text-primary">{bank}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LenderTrust;
