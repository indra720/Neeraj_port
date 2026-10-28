import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Gem,
  Globe,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { profileData } from "../../data/profileData";

export default function JourneyTimelinePreview() {
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
    <section className="py-20 sm:py-28 bg-[#081B33] text-white relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="CHRONOLOGY OF LEADERSHIP"
          title="The Entrepreneurial Journey"
          subtitle="Four foundational epochs defining a journey from indigenous artisan stonecraft to international commerce and mega-scale hospitality."
          align="center"
          theme="dark"
        />

        <div className="relative mt-12 sm:mt-16 max-w-4xl mx-auto">
          {/* Central vertical connecting line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#C8A96B] via-[#1557A6] to-[#C8A96B]/30 hidden sm:block"></div>

          {/* Mobile vertical line */}
          <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-gradient-to-b from-[#C8A96B] via-[#1557A6] to-[#C8A96B]/30 sm:hidden"></div>

          <div className="space-y-12 sm:space-y-16">
            {profileData.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card (Left or Right on desktop) */}
                  <div className="w-full sm:w-[45%] pl-14 sm:pl-0">
                    <div className="p-6 sm:p-7 rounded-lg bg-[#0B2240] border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-xl group">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold tracking-[0.2em] text-[#C8A96B] uppercase">
                          {item.period}
                        </span>
                        <span className="text-[10px] text-gray-400 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#C8A96B]" />
                          {item.location}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#C8A96B] transition-colors mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                        {item.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/5 text-gray-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-4 sm:top-auto flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[#081B33] border-2 border-[#C8A96B] flex items-center justify-center shadow-gold-glow z-20">
                      {getStageIcon(index)}
                    </div>
                  </div>

                  {/* Empty balanced space on opposite desktop side */}
                  <div className="hidden sm:block sm:w-[45%]">
                    <div
                      className={`px-6 text-sm text-gray-400 font-serif italic ${
                        isEven ? "text-right" : "text-left"
                      }`}
                    >
                      Stage {index + 1} of 4 • {item.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View Full Timeline Button */}
        <div className="mt-16 text-center">
          <Link
            to="/journey"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-gold-glow hover:brightness-105 transition-all"
          >
            <span>Explore Complete Timeline & Milestones</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
