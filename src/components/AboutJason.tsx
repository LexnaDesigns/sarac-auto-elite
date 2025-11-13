import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import jasonImage from "@/assets/jason-headshot.jpg";

const AboutJason = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-lg transform rotate-3" />
                <img
                  src={jasonImage}
                  alt="Jason Sarac - Elite Automotive Finance Expert"
                  className="relative rounded-lg shadow-premium w-full"
                />
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in-up">
              <div className="mb-6">
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold tracking-wide">
                  THE CLOSER
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Meet Jason Sarac
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  Jason isn't your typical finance manager. He's the guy other finance managers call when they're stuck.
                </p>
                
                <p>
                  With over 12 years specializing in subprime automotive finance, Jason has built relationships with every major bank and 15+ specialty lenders across Canada. He doesn't just submit applications—he structures deals.
                </p>

                <p>
                  Like a high-end real estate broker, Jason sources vehicles from exclusive channels: dealer auctions, Enterprise Fleet, and a private network most customers never access.
                </p>

                <p className="font-semibold text-foreground">
                  His philosophy: Every "no" is just a puzzle to solve. And Jason solves puzzles for a living.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  <Phone className="mr-2" />
                  Call Jason Directly
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJason;
