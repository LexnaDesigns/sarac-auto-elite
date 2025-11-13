import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Bankruptcy to BMW in 48 hours.",
    name: "Michael R.",
    location: "Toronto, ON",
    details: "Credit score 520 → Approved $42,000",
  },
  {
    quote: "No credit. No cosigner. Still driving.",
    name: "Sarah K.",
    location: "Mississauga, ON",
    details: "New to Canada → Mercedes GLE",
  },
  {
    quote: "Every bank turned me down. Jason didn't.",
    name: "David L.",
    location: "Brampton, ON",
    details: "3 repos on file → Audi A6 approved",
  },
  {
    quote: "He found me a deal I didn't even know existed.",
    name: "Jennifer P.",
    location: "Oakville, ON",
    details: "First-time buyer → $38K approval",
  },
  {
    quote: "I was skeptical. Now I'm a believer.",
    name: "Robert M.",
    location: "Hamilton, ON",
    details: "Consumer proposal → BMW 5 Series",
  },
  {
    quote: "Jason treats you like family, not a file number.",
    name: "Lisa T.",
    location: "Markham, ON",
    details: "Divorced, rebuilding → Got approved",
  },
];

const ClientWins = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Wins
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real people. Real approvals. Real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-accent mb-6" />
              
              <blockquote className="text-xl font-semibold text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground mb-2">{testimonial.location}</p>
                <p className="text-sm text-primary font-medium">{testimonial.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic">
            These are real client outcomes. Your results will vary based on your unique situation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientWins;
