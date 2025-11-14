import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AvaWidgetButton from "@/components/AvaWidgetButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90 block mb-8">
          Return to Home
        </a>
        
        <div className="mt-12 p-8 bg-background rounded-lg border border-border">
          <h2 className="text-2xl font-bold mb-4">While You're Here...</h2>
          <p className="text-muted-foreground mb-6">Check your credit and get pre-approved for automotive financing</p>
          <AvaWidgetButton className="inline-block" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
