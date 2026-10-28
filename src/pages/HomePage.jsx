import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import EditorialIntro from "../components/home/EditorialIntro";
import JourneyTimelinePreview from "../components/home/JourneyTimelinePreview";
import BusinessPortfolioPreview from "../components/home/BusinessPortfolioPreview";
import JoyHospitalityFeature from "../components/home/JoyHospitalityFeature";
import FeaturedProjectsPreview from "../components/home/FeaturedProjectsPreview";
import BusinessPhilosophy from "../components/home/BusinessPhilosophy";
import MilestonesPreview from "../components/home/MilestonesPreview";
import QuickContactCTA from "../components/home/QuickContactCTA";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Neeraj Sharma | Building Heritage. Creating Opportunities.";
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* 1. High-Impact Hero with Authentic Portrait */}
      <HeroSection />

      {/* 2. Editorial Introduction & Origin Story */}
      <EditorialIntro />

      {/* 3. Interactive Chronological Journey Timeline */}
      <JourneyTimelinePreview />

      {/* 4. Multiple Sectors. One Integrated Vision. (All 11 Sectors) */}
      <BusinessPortfolioPreview />

      {/* 5. Joy Hospitality Group Dedicated Feature with Metrics */}
      <JoyHospitalityFeature />

      {/* 6. Featured Projects & International Experience */}
      <FeaturedProjectsPreview />

      {/* 7. Business Philosophy & 4 Strategic Principles */}
      <BusinessPhilosophy />

      {/* 8. Verified Milestones & Achievements */}
      <MilestonesPreview />

      {/* 9. Strategic Professional Dialogue CTA */}
      <QuickContactCTA />
    </div>
  );
}
