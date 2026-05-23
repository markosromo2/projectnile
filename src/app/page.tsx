import PasswordGate from "@/components/PasswordGate";
import NavBar from "@/components/NavBar";
import ScrollAnimations from "@/components/ScrollAnimations";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import CityViewSection from "@/components/CityViewSection";
import OpportunitySection from "@/components/OpportunitySection";
import MarketSection from "@/components/MarketSection";
import PhotoDividerSection from "@/components/PhotoDividerSection";
import RevenueModelSection from "@/components/RevenueModelSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import PlayerDevelopmentSection from "@/components/PlayerDevelopmentSection";
import PhotoStripSection from "@/components/PhotoStripSection";
import ArenaDividerSection from "@/components/ArenaDividerSection";
import VenueSection from "@/components/VenueSection";
import FinancialProjectionsSection from "@/components/FinancialProjectionsSection";
import WaterfrontDividerSection from "@/components/WaterfrontDividerSection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import SectionIndicator from "@/components/SectionIndicator";

export default function Home() {
  return (
    <PasswordGate>
      <NavBar />
      <SectionIndicator />
      <ScrollAnimations />
      <main>
        <HeroSection />
        <MarqueeSection />
<CityViewSection />
        <OpportunitySection />
        <MarketSection />
        <PhotoDividerSection />
        <RevenueModelSection />
        <SectionDivider />
        <TrackRecordSection />
        <PlayerDevelopmentSection />
        <PhotoStripSection />
        <ArenaDividerSection />
        <VenueSection />
        <SectionDivider />
        <FinancialProjectionsSection />
        <WaterfrontDividerSection />
        <ContactSection />
      </main>
    </PasswordGate>
  );
}
