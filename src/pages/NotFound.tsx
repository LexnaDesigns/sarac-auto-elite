import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AvaWidgetButton from "@/components/AvaWidgetButton";
import AvaWidgetBanner from "@/components/AvaWidgetBanner";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <AvaWidgetBanner />
      <div className="flex-grow flex items-center justify-center bg-muted pt-[38px]">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="mb-4 text-4xl font-bold">{t.notFound.title}</h1>
          <p className="mb-4 text-xl text-muted-foreground">{t.notFound.subtitle}</p>
          <a href="/" className="text-primary underline hover:text-primary/90 block mb-8">
            {t.notFound.returnHome}
          </a>
          
          <div className="mt-12 p-8 bg-background rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">{t.notFound.whileHere}</h2>
            <p className="text-muted-foreground mb-6">{t.notFound.checkCredit}</p>
            <AvaWidgetButton className="inline-block" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
