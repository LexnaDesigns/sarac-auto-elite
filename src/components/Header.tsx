import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import saracLogo from "@/assets/sarac-logo.jpeg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-[52px] left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-accent/20">
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
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-background hover:text-accent transition-colors font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-background hover:text-accent transition-colors font-medium"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="text-background hover:text-accent transition-colors font-medium"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-background hover:text-accent transition-colors font-medium"
            >
              About Jason
            </button>
          </nav>

          {/* Contact Phone */}
          <div className="hidden lg:flex items-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-silver text-background hover:bg-silver/10"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span className="font-semibold">(555) 123-4567</span>
            </Button>
          </div>

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
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-background hover:text-accent transition-colors font-medium text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-background hover:text-accent transition-colors font-medium text-left"
              >
                Success Stories
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-background hover:text-accent transition-colors font-medium text-left"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-background hover:text-accent transition-colors font-medium text-left"
              >
                About Jason
              </button>
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-silver text-background hover:bg-silver/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  <span className="font-semibold">(555) 123-4567</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
