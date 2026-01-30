import Navigation from "@/components/Navigation";
import HeaderSection from "@/components/sections/HeaderSection";
import NowSection from "@/components/sections/NowSection";
import WorkSection from "@/components/sections/WorkSection";
import SystemsSection from "@/components/sections/SystemsSection";
import LogSection from "@/components/sections/LogSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/20">
      <Navigation />
      
      <main>
        <HeaderSection />
        <NowSection />
        <WorkSection />
        <SystemsSection />
        <LogSection />
        <SkillsSection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
