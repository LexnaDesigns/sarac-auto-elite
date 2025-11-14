import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SaracAdvantage from "@/components/SaracAdvantage";
import FeaturedDeals from "@/components/FeaturedDeals";
import HowItWorks from "@/components/HowItWorks";
import ClientWins from "@/components/ClientWins";
import LenderTrust from "@/components/LenderTrust";
import Blog from "@/components/Blog";
import ApplicationForm from "@/components/ApplicationForm";
import AboutJason from "@/components/AboutJason";
import Footer from "@/components/Footer";
import AvaWidgetBanner from "@/components/AvaWidgetBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AvaWidgetBanner />
      <Header />
      <Hero />
      <div id="advantage">
        <SaracAdvantage />
      </div>
      <FeaturedDeals />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="testimonials">
        <ClientWins />
      </div>
      <LenderTrust />
      <Blog />
      <ApplicationForm />
      <div id="about">
        <AboutJason />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
