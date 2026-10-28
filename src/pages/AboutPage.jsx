import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Compass,
  ArrowRight,
  ShieldCheck,
  Gem,
  Globe,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionHeading from "../components/common/SectionHeading";
import { profileData } from "../data/profileData";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Neeraj Sharma | Heritage, Leadership & Vision";
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Top Header Banner */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "About Neeraj Sharma" }]} />

          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B] block mb-2">
              BIOGRAPHY & ARCHITECTURAL LINEAGE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              A Legacy of Stone, Enterprise, and Vision
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Bridging Rajasthan's ancient architectural heritage with modern
              international commerce and large-scale hospitality development.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Key Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Luxury Frame for Portrait */}
              <div className="relative rounded-xl overflow-hidden border border-[#C8A96B]/40 bg-[#081B33] shadow-2xl p-3">
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#102A4C] to-[#040D1A] flex items-end justify-center pt-8">
                  <img
                    src={profileData.portrait}
                    alt="Neeraj Sharma"
                    className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#081B33] via-[#081B33]/80 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 bg-[#081B33]/90 backdrop-blur-md border border-[#C8A96B]/40 rounded p-3 text-center">
                    <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                      NEERAJ SHARMA
                    </h3>
                    <p className="text-xs text-[#C8A96B] font-medium tracking-wider">
                      Joy Hospitality Group • Rajasthan & Dubai
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast Facts Card */}
              <div className="p-6 rounded-lg bg-white border border-[#C8A96B]/25 shadow-md space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#081B33] border-b border-gray-100 pb-2">
                  Profile At A Glance
                </h4>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#081B33] block">
                        Heritage Roots:
                      </span>
                      <span className="text-[#536174]">
                        Hindaun City, Karauli District, Rajasthan
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Gem className="w-4 h-4 text-[#1557A6] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#081B33] block">
                        Foundation:
                      </span>
                      <span className="text-[#536174]">
                        Natural stone craftsmanship & temple masonry (1998)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#081B33] block">
                        Global Footprint:
                      </span>
                      <span className="text-[#536174]">
                        Dubai (2003–2013), Bahrain, Riyadh, Saudi Arabia
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#1557A6] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#081B33] block">
                        Current Focus:
                      </span>
                      <span className="text-[#536174]">
                        Joy Hospitality Group, 200-Bigha Flagship Resort,
                        Pan-India Destination Pipeline
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Narrative Biography */}
          <div className="lg:col-span-7 space-y-8 text-[#536174] leading-relaxed">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                The Heritage Foundation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081B33] leading-snug">
                Generational Craftsmanship in Rajasthan's Stone Heartland
              </h2>
              <p className="text-sm sm:text-base">
                Neeraj Sharma’s entrepreneurial story is deeply intertwined with
                the geological and cultural landscape of eastern Rajasthan.
                Raised in Hindaun City within the Karauli district—a region
                globally celebrated for its rich red and pink sandstone—his
                formative years were shaped by family connections to natural
                stone quarrying, dimensional dressing, and traditional temple
                construction.
              </p>
              <p className="text-sm sm:text-base">
                In Rajasthan, stone is not merely a construction material; it is
                a sacred canvas. Generations of master carvers chiseled temples,
                stepwells, and royal palaces using geometric proportions
                governed by Shilpa Shastra. Observing this profound synthesis of
                art and structural engineering instilled in Neeraj Sharma an
                enduring commitment to material honesty, precision
                craftsmanship, and patience.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border-l-4 border-[#C8A96B] shadow-sm space-y-2">
              <p className="font-serif text-lg font-semibold text-[#081B33] italic">
                "Real development must honor the heritage of the land while
                forging economic opportunities that empower generations to
                come."
              </p>
              <p className="text-xs text-[#C8A96B] font-bold uppercase tracking-wider">
                — Neeraj Sharma
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                The Entrepreneurial Leap (1998)
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081B33] leading-snug">
                Pioneering Natural Stone Export & Sacred Architecture
              </h2>
              <p className="text-sm sm:text-base">
                In 1998, Neeraj Sharma took his first major entrepreneurial
                leap, establishing direct commercial channels for natural stone
                supply and specialized temple construction contracts.
                Recognizing that temple architecture demands sacred accuracy and
                zero margin for error, he assembled guilds of seasoned
                Rajasthani artisans.
              </p>
              <p className="text-sm sm:text-base">
                By maintaining direct ties with key quarry owners and investing
                in stone-dressing standards, he established an early reputation
                for delivering museum-grade sandstone for sacred shrines and
                civic institutions.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                International Era: Dubai & The GCC (2003–2013)
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081B33] leading-snug">
                Navigating the Arabian Gulf Construction Boom
              </h2>
              <p className="text-sm sm:text-base">
                As the Arabian Gulf embarked on historic real estate and
                infrastructure transformations at the dawn of the millennium,
                Neeraj Sharma relocated to Dubai in 2003. Establishing operating
                bases in the United Arab Emirates, he quickly scaled
                international trade corridors connecting Indian quarry products
                with high-prestige Middle Eastern projects.
              </p>
              <p className="text-sm sm:text-base">
                Over the next decade, his business footprint extended across
                Sharjah, the Kingdom of Bahrain, and Riyadh in Saudi Arabia. He
                participated in material supply networks associated with
                monumental developments, including Downtown Dubai (Burj Khalifa
                precinct), Palm Jumeirah coastal hardscapes, and diplomatic
                structures such as the Bahrain Embassy. This ten-year
                international tenure instilled a deep command of multi-modal
                freight logistics, cross-border corporate governance, and
                multinational contracting.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                Strategic Repatriation & Diversification (2013 Onwards)
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081B33] leading-snug">
                The Joy Adventure Group & Destination Hospitality
              </h2>
              <p className="text-sm sm:text-base">
                In 2013, Neeraj Sharma returned to India with an expanded global
                perspective and capital network. Recognizing India’s impending
                surge in domestic leisure tourism, wellness retreats, and
                experiential travel, he diversified in 2014 by founding the Joy
                Adventure Group and Joy Hospitality platform.
              </p>
              <p className="text-sm sm:text-base">
                The crown jewel of this vision is the{" "}
                <strong>200-bigha flagship resort destination</strong> currently
                under development in Rajasthan. Representing approximately 8
                years of meticulous land grading, water conservation
                engineering, and monumental stone erection, the project has
                reached approximately 70% completion with a projected valuation
                of ₹300+ crore as reported in his profile.
              </p>
              <p className="text-sm sm:text-base">
                Beyond real estate, Neeraj Sharma has continually invested in
                youth culture and sports diplomacy, notably supporting the 2023
                international season of the Women's Kabaddi initiative hosted in
                Dubai.
              </p>
            </div>

            {/* Strategic CTAs */}
            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
              <Link
                to="/journey"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#081B33] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#0E2B52] transition-colors"
              >
                <span>View Chronological Timeline</span>
                <ArrowRight className="w-4 h-4 text-[#C8A96B]" />
              </Link>

              <Link
                to="/business"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-gray-300 hover:border-[#C8A96B] text-[#081B33] font-bold text-xs uppercase tracking-widest transition-colors bg-white"
              >
                <span>Explore Business Verticals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
