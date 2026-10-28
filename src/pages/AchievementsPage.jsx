import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Sparkles,
  Building,
  Globe,
} from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionHeading from "../components/common/SectionHeading";
import { achievementData } from "../data/achievementData";

export default function AchievementsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Achievements & Milestones | Neeraj Sharma";
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Achievements & Milestones" }]} />

          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B] block mb-2">
              VERIFIED TRACK RECORD
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Verified Achievements & Milestones
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Documenting key historical inflection points, cross-border
              achievements, and philanthropic athletic sponsorships grounded in
              the professional profile.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Card */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl bg-white border border-[#C8A96B]/30 shadow-md">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1557A6] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#C8A96B]" />
            <span>Integrity In Documentation</span>
          </div>
          <p className="text-sm text-[#536174] leading-relaxed">
            In keeping with strict factual governance, all milestones recorded
            below represent verified operational milestones, documented
            international trade tenures, and profile-supported community
            initiatives. Factual achievements are distinguished from projected
            development horizons.
          </p>
        </div>

        {/* Milestones Cards List */}
        <div className="space-y-8">
          {achievementData.map((item, index) => (
            <div
              key={item.id}
              className="p-8 rounded-xl bg-white border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-md hover:shadow-xl space-y-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-bold text-[#1557A6]">
                    {item.year}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#081B33]/5 text-[#081B33] border border-[#081B33]/15">
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#C8A96B] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-gray-500 font-medium italic">
                    {item.status}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#081B33]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#536174] leading-relaxed font-medium">
                  {item.summary}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {item.details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#536174]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {item.impact && (
                <div className="pt-4 border-t border-gray-100 flex items-start gap-2.5 bg-[#F8F7F3] p-4 rounded-lg">
                  <Sparkles className="w-4 h-4 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#081B33] block">
                      Enduring Impact
                    </span>
                    <p className="text-xs text-[#536174] mt-0.5">
                      {item.impact}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-[#081B33] hover:bg-[#0E2B52] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all"
          >
            <span>Partner on Future Milestones</span>
            <ArrowRight className="w-4 h-4 text-[#C8A96B]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
