import PasswordGate from "@/components/PasswordGate";
import NavBar from "@/components/NavBar";
import ScrollAnimations from "@/components/ScrollAnimations";
import HeroSection from "@/components/HeroSection";
import CityViewSection from "@/components/CityViewSection";
import OpportunitySection from "@/components/OpportunitySection";
import MarketSection from "@/components/MarketSection";
import PhotoDividerSection from "@/components/PhotoDividerSection";
import RevenueModelSection from "@/components/RevenueModelSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import ArenaDividerSection from "@/components/ArenaDividerSection";
import VenueSection from "@/components/VenueSection";
import FinancialProjectionsSection from "@/components/FinancialProjectionsSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <PasswordGate>
      <NavBar />
      <ScrollAnimations />
      <main>
        <HeroSection />
        <CityViewSection />
        <OpportunitySection />
        <MarketSection />
        <PhotoDividerSection />
        <RevenueModelSection />
        <TrackRecordSection />
        <ArenaDividerSection />
        <VenueSection />
        <FinancialProjectionsSection />
        <TimelineSection />
        <ContactSection />
      </main>
    </PasswordGate>
  );
}
