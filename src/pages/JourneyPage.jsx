import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Gem,
  Globe,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Building2,
} from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionHeading from "../components/common/SectionHeading";
import { profileData } from "../data/profileData";

export default function JourneyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Professional Journey | Neeraj Sharma Timeline (1998 – Present)";
  }, []);

  const getStageIcon = (index) => {
    switch (index) {
      case 0:
        return <Gem className="w-5 h-5 text-[#C8A96B]" />;
      case 1:
        return <Globe className="w-5 h-5 text-[#1557A6]" />;
      case 2:
        return <RefreshCw className="w-5 h-5 text-[#C8A96B]" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-[#C8A96B]" />;
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Journey & Milestones" }]} />

          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B] block mb-2">
              THE CHRONOLOGICAL RECORD
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              An Entrepreneurial Odyssey: 1998 to Present
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Tracking twenty-five years of strategic growth, international
              expansion across the Middle East, and the creation of visionary
              Indian destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 1: Personal Background Foundation */}
        <div className="mb-20 p-8 sm:p-10 rounded-xl bg-white border border-[#C8A96B]/30 shadow-md">
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#1557A6] mb-3">
            <MapPin className="w-4 h-4 text-[#C8A96B]" />
            <span>Personal Heritage & Origins</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081B33] mb-4">
            Roots in Karauli District & Hindaun City, Rajasthan
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#536174] leading-relaxed">
            <p>
              Neeraj Sharma’s personal origins trace to Hindaun City in the
              Karauli district of eastern Rajasthan. For centuries, this region
              has been renowned across the Indian subcontinent for its exquisite
              sandstone quarries, which provided the foundational stone for
              historic forts, cenotaphs, and sacred shrines across North India.
            </p>
            <p>
              Growing up in a family connected to stone extraction, dressing,
              and construction, he absorbed the traditional values of
              craftsmanship, integrity, and long-term relationships before
              launching his independent career in 1998.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-[#F8F7F3] rounded">
              <span className="text-gray-400 block font-medium">District</span>
              <span className="font-serif text-sm font-bold text-[#081B33]">
                Karauli District
              </span>
            </div>
            <div className="p-3 bg-[#F8F7F3] rounded">
              <span className="text-gray-400 block font-medium">Town</span>
              <span className="font-serif text-sm font-bold text-[#081B33]">
                Hindaun City
              </span>
            </div>
            <div className="p-3 bg-[#F8F7F3] rounded">
              <span className="text-gray-400 block font-medium">Lineage</span>
              <span className="font-serif text-sm font-bold text-[#081B33]">
                Stonecraft & Construction
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Chronological Timeline (1998 — Present) */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#1557A6] block mb-1">
              WORK HISTORY & MILESTONES
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#081B33]">
              Four Epochs of Enterprise
            </h2>
          </div>

          <div className="relative border-l-2 border-[#C8A96B]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-16">
            {profileData.timeline.map((stage, idx) => (
              <div key={stage.year} className="relative group">
                {/* Node icon on timeline */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-10 h-10 rounded-full bg-[#081B33] border-2 border-[#C8A96B] flex items-center justify-center text-white shadow-lg">
                  {getStageIcon(idx)}
                </div>

                {/* Content Block */}
                <div className="bg-white rounded-lg p-6 sm:p-8 border border-[#C8A96B]/20 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-md hover:shadow-xl space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-2xl font-bold text-[#1557A6]">
                        {stage.period}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C8A96B] bg-[#C8A96B]/10 px-2.5 py-1 rounded">
                        Stage 0{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
                      <span>{stage.location}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081B33]">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1557A6] font-semibold tracking-wider uppercase mt-0.5">
                      {stage.category}
                    </p>
                  </div>

                  <p className="text-sm text-[#536174] leading-relaxed font-medium">
                    {stage.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    {stage.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#536174]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#F8F7F3] text-[#081B33] border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scalable Architecture Note */}
        <div className="mt-16 text-center p-6 rounded-lg bg-white border border-dashed border-[#C8A96B]/40">
          <p className="text-xs text-gray-500">
            *This chronological architecture is modular and dynamically rendered
            from structured records, allowing future milestones to be integrated
            seamlessly.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/business"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-[#081B33] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#0E2B52] transition-colors shadow-lg"
          >
            <span>Explore The 11 Business Verticals</span>
            <ArrowRight className="w-4 h-4 text-[#C8A96B]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
