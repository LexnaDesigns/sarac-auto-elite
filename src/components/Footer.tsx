import { MapPin, Clock } from "lucide-react";
import AvaWidgetInline from "./AvaWidgetInline";
import AvaWidgetButton from "./AvaWidgetButton";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* AVA Credit Widget CTA Section */}
      <div className="border-b border-primary-foreground/10 bg-gradient-to-br from-primary via-charcoal to-primary">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-background">
                Ready to Get <span className="text-accent">Started?</span>
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Check your credit and get pre-approved in minutes — no hard credit check required.
              </p>
            </div>
            
            {/* AVA Widget Inline */}
            <AvaWidgetInline className="mb-6" />
            
            {/* AVA Widget Button as secondary option */}
            <div className="flex justify-center mt-6">
              <AvaWidgetButton />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Service Area Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Service Area</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">Serving</p>
                  <p className="text-primary-foreground/80">
                    Greater Toronto Area & All of Ontario
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">Availability</p>
                  <p className="text-primary-foreground/80">
                    Mon-Sat: 9AM - 8PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* AVA Widget in Footer */}
            <div className="mt-6">
              <AvaWidgetButton className="w-full" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#deals" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Featured Deals
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Client Success Stories
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Jason
                </a>
              </li>
            </ul>
          </div>

          {/* Why Choose Jason */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Jason?</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>✓ 12+ years subprime expertise</li>
              <li>✓ All major banks + 15+ lenders</li>
              <li>✓ Approvals up to $75,000</li>
              <li>✓ No credit check to apply</li>
              <li>✓ Vehicles delivered to you</li>
              <li>✓ Bad credit specialists</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Jason Sarac Finance. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
