import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Conversation from "@/components/Conversation";
import Comparison from "@/components/Comparison";
import Dashboard from "@/components/Dashboard";
import FAQ from "@/components/FAQ";
import Integrations from "@/components/Integrations";
import Benefits from "@/components/Benefits";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <SocialProof />
      <PainPoints />
      <Benefits />
      <Solution />
      <HowItWorks />
      <Conversation />
      <Dashboard />
      <FAQ />
      <Integrations />
      <FinalCTA />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
