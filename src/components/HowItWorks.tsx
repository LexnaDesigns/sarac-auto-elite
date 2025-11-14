import { MessageSquare, CheckCircle, Key } from "lucide-react";
import AvaWidgetButton from "./AvaWidgetButton";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell Jason What You Want",
    description: "Budget, style, features—be specific or let Jason guide you to the best options.",
  },
  {
    icon: CheckCircle,
    number: "02",
    title: "He Structures the Approval",
    description: "Jason works his network of banks and lenders to get you approved—even when others have failed.",
  },
  {
    icon: Key,
    number: "03",
    title: "You Get the Keys",
    description: "Vehicle sourced, financing secured, delivered to your door. Simple as that.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-4">
            The Sarac Method
          </h2>
          <p className="text-xl text-background/90 max-w-2xl mx-auto">
            Three steps to driving your dream vehicle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg p-8 hover:bg-background/15 transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-accent/30 mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-background mb-4">
                    {step.title}
                  </h3>
                  <p className="text-background/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-background/30" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AVA Widget CTA */}
        <div className="mt-16 text-center max-w-2xl mx-auto animate-fade-in-up">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-background mb-3">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-background/90">
              Get pre-approved in minutes with our fast credit check
            </p>
          </div>
          <AvaWidgetButton className="inline-block" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
