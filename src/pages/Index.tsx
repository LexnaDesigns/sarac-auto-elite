import Hero from "@/components/Hero";
import SaracAdvantage from "@/components/SaracAdvantage";
import FeaturedDeals from "@/components/FeaturedDeals";
import HowItWorks from "@/components/HowItWorks";
import ClientWins from "@/components/ClientWins";
import LenderTrust from "@/components/LenderTrust";
import ApplicationForm from "@/components/ApplicationForm";
import AboutJason from "@/components/AboutJason";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SaracAdvantage />
      <FeaturedDeals />
      <HowItWorks />
      <ClientWins />
      <LenderTrust />
      <ApplicationForm />
      <AboutJason />
      <Footer />
    </div>
  );
};

export default Index;
