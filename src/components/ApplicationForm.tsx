import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "Jason will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", vehicle: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-background" id="apply">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Start Your Application
            </h2>
            <p className="text-xl text-muted-foreground">
              No impact to your credit score. No obligation.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-lg border border-border p-8 shadow-card space-y-6 animate-scale-in"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Sarac"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(416) 555-0123"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicle">Vehicle Interest (Optional)</Label>
                <Input
                  id="vehicle"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="e.g., BMW 5 Series"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell Jason About Your Situation</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Credit challenges, budget, what you're looking for..."
                rows={5}
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
              <p className="mb-2">
                ✓ No hard credit check until you're ready
              </p>
              <p className="mb-2">
                ✓ Your information is kept confidential
              </p>
              <p>
                ✓ Jason personally reviews every application
              </p>
            </div>

            <Button type="submit" variant="premium" size="lg" className="w-full">
              <Send className="mr-2" />
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
