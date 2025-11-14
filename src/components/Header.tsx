import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import saracLogo from "@/assets/sarac-logo.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-[38px] left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-accent/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={saracLogo} 
              alt="Sarac Financial Services" 
              className="h-12 w-12 object-contain rounded-full border-2 border-accent"
            />
            <div className="hidden md:block">
              <h2 className="text-xl font-bold text-background">SARAC</h2>
              <p className="text-xs text-silver">Financial Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('advantage')}
              className="text-background hover:text-accent transition-colors font-medium"
            >
              {t.nav.whyChooseUs}
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-background hover:text-accent transition-colors font-medium"
            >
              {t.nav.howItWorks}
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-background hover:text-accent transition-colors font-medium"
            >
              {t.nav.successStories}
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-background hover:text-accent transition-colors font-medium"
            >
              {t.nav.blog}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-background hover:text-accent transition-colors font-medium"
            >
              {t.nav.aboutJason}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-2 text-background hover:text-accent transition-colors font-medium px-3 py-2 rounded-lg border border-accent/30 hover:border-accent"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-sm font-bold">{language === 'en' ? 'FR' : 'EN'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-background p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-accent/20 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('advantage')}
                className="text-background hover:text-accent transition-colors font-medium text-left"
              >
                {t.nav.whyChooseUs}
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-background hover:text-accent transition-colors font-medium text-left"
              >
                {t.nav.howItWorks}
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-background hover:text-accent transition-colors font-medium text-left"
              >
                {t.nav.successStories}
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-background hover:text-accent transition-colors font-medium text-left"
              >
                {t.nav.blog}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-background hover:text-accent transition-colors font-medium text-left"
              >
                {t.nav.aboutJason}
              </button>
              
              {/* Language Toggle - Mobile */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className="flex items-center gap-2 text-background hover:text-accent transition-colors font-medium px-3 py-2 rounded-lg border border-accent/30 hover:border-accent w-fit"
                aria-label="Toggle language"
              >
                <Globe size={18} />
                <span className="text-sm font-bold">{language === 'en' ? 'Français' : 'English'}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
