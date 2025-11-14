import { MapPin, Clock } from "lucide-react";
import AvaWidgetInline from "./AvaWidgetInline";
import AvaWidgetButton from "./AvaWidgetButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* AVA Credit Widget CTA Section */}
      <div className="border-b border-primary-foreground/10 bg-gradient-to-br from-primary via-charcoal to-primary">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-background">
                {t.footer.ctaTitle}<span className="text-accent">{t.footer.ctaAccent}</span>
              </h2>
              <p className="text-xl text-primary-foreground/90">
                {t.footer.ctaSubtitle}
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
            <h3 className="text-2xl font-bold mb-6">{t.footer.serviceAreaTitle}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">{t.footer.servingLabel}</p>
                  <p className="text-primary-foreground/80">
                    {t.footer.servingText}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">{t.footer.availabilityLabel}</p>
                  <p className="text-primary-foreground/80" style={{ whiteSpace: 'pre-line' }}>
                    {t.footer.availabilityText}
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
            <h3 className="text-2xl font-bold mb-6">{t.footer.quickLinksTitle}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#deals" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.footer.featuredDeals}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.footer.clientStories}
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  {t.nav.aboutJason}
                </a>
              </li>
            </ul>
          </div>

          {/* Why Choose Jason */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t.footer.whyJasonTitle}</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>✓ {t.footer.reason1}</li>
              <li>✓ {t.footer.reason2}</li>
              <li>✓ {t.footer.reason3}</li>
              <li>✓ {t.footer.reason4}</li>
              <li>✓ {t.footer.reason5}</li>
              <li>✓ {t.footer.reason6}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-accent transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#terms" className="hover:text-accent transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
