import React from "react";
import { Link } from "react-router-dom";
import { Award, ArrowRight, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { achievementData } from "../../data/achievementData";

export default function MilestonesPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="VERIFIED MILESTONES"
          title="Achievements & Groundbreaking Initiatives"
          subtitle="A record of steady, strategic expansion spanning trade, architecture, sports diplomacy, and large-scale hospitality."
          align="center"
          theme="light"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievementData.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-lg bg-white border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#1557A6]">
                    {item.year}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#081B33]/5 text-[#081B33] border border-[#081B33]/15">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#C8A96B] block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#081B33] group-hover:text-[#1557A6] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536174] leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-[#536174] font-medium italic">
                  {item.status}
                </span>
                <Link
                  to="/achievements"
                  className="inline-flex items-center gap-1 font-bold text-[#081B33] group-hover:text-[#C8A96B] transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/achievements"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-[#081B33] hover:bg-[#0E2B52] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all"
          >
            <span>View Full Record of Achievements</span>
            <ArrowRight className="w-4 h-4 text-[#C8A96B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
