import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Utensils,
  Palmtree,
  Gem,
  Church,
  Sparkles,
  Ship,
  Shield,
  Flower2,
  Trophy,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionHeading from "../components/common/SectionHeading";
import { businessCategories } from "../data/businessData";

export default function BusinessPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Business Verticals | Neeraj Sharma Diversified Portfolio";
  }, []);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-5 h-5" />;
      case "Utensils":
        return <Utensils className="w-5 h-5" />;
      case "Palmtree":
        return <Palmtree className="w-5 h-5" />;
      case "Gem":
        return <Gem className="w-5 h-5" />;
      case "Church":
        return <Church className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "Ship":
        return <Ship className="w-5 h-5" />;
      case "Shield":
        return <Shield className="w-5 h-5" />;
      case "Flower2":
        return <Flower2 className="w-5 h-5" />;
      case "Trophy":
        return <Trophy className="w-5 h-5" />;
      case "Compass":
        return <Compass className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const filterCategories = [
    "All",
    "Real Estate & Hospitality",
    "Heritage & Natural Stone",
    "Global Trade & Industry",
    "Sports & Infrastructure",
  ];

  const getFilterCategoryForBusiness = (id) => {
    if (["real-estate", "hospitality", "resort-development"].includes(id)) {
      return "Real Estate & Hospitality";
    }
    if (["natural-stone", "temple-construction", "handicrafts"].includes(id)) {
      return "Heritage & Natural Stone";
    }
    if (["import-export", "metal-trading"].includes(id)) {
      return "Global Trade & Industry";
    }
    return "Sports & Infrastructure";
  };

  const filteredItems =
    activeFilter === "All"
      ? businessCategories
      : businessCategories.filter(
          (b) => getFilterCategoryForBusiness(b.id) === activeFilter,
        );

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Hero Header */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Business Portfolio" }]} />

          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B] block mb-2">
              DIVERSIFIED ENTERPRISE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Multiple Sectors. One Integrated Vision.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Explore the eleven distinct business verticals founded on
              craftsmanship, international trade acumen, and large-scale
              regional development.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#081B33] text-white shadow-md border border-[#081B33]"
                  : "bg-white text-[#536174] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 11 Business Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((business, index) => (
            <div
              key={business.id}
              className="group bg-white rounded-lg overflow-hidden border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-[#081B33]">
                <img
                  src={business.image}
                  alt={business.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-black/30 to-transparent"></div>

                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081B33]/85 backdrop-blur-md border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold">
                  {getCategoryIcon(business.icon)}
                  <span className="tracking-wider uppercase text-[10px]">
                    Vertical {index + 1}
                  </span>
                </div>

                <div className="absolute bottom-3 right-4 z-10 text-right">
                  <span className="text-white text-xs font-bold block">
                    {business.stats.primary}
                  </span>
                  <span className="text-[#C8A96B] text-[10px] uppercase tracking-wider block">
                    {business.stats.label}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081B33] group-hover:text-[#1557A6] transition-colors leading-snug">
                    {business.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#536174] leading-relaxed line-clamp-3">
                    {business.shortDescription}
                  </p>

                  <div className="pt-2 text-xs text-gray-500">
                    <span className="font-semibold text-[#081B33] block mb-1">
                      Operational Scope:
                    </span>
                    <span className="line-clamp-2">{business.scope}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#1557A6] tracking-wider uppercase">
                    {business.stats.metric}
                  </span>

                  <Link
                    to={`/business/${business.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#081B33] group-hover:text-[#C8A96B] transition-colors"
                  >
                    <span>Sector Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Inquiries Strip */}
        <div className="mt-16 p-8 rounded-xl bg-[#081B33] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C8A96B]/30 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl font-bold text-white">
              Interested in Co-Development or Trade Alliances?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Direct discussions with Neeraj Sharma and the Joy Hospitality
              Group executive office.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-bold text-xs uppercase tracking-widest hover:brightness-105 transition-all flex-shrink-0"
          >
            <span>Initiate Business Dialogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
