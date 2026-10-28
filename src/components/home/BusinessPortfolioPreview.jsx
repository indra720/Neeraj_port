import React from "react";
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
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { businessCategories } from "../../data/businessData";

export default function BusinessPortfolioPreview() {
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

  return (
    <section className="py-20 sm:py-28 bg-[#F8F7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="DIVERSIFIED ENTERPRISE"
          title="Multiple Sectors. One Integrated Vision."
          subtitle="A cohesive ecosystem spanning natural stonecraft, international commerce, luxury hospitality, and large-scale regional real estate."
          align="center"
          theme="light"
        />

        {/* Dynamic Architectural Grid Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessCategories.map((business, index) => {
            // Give visual variation: 1st and 3rd cards take unique emphasis
            const isFeatured = index === 0 || index === 2;

            return (
              <div
                key={business.id}
                className={`group relative bg-white rounded-lg overflow-hidden border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between ${
                  isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image Section with Overlay */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-[#081B33]">
                  <img
                    src={business.image}
                    alt={business.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/40 to-transparent"></div>

                  {/* Category Pill with Icon */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#081B33]/85 backdrop-blur-md border border-[#C8A96B]/40 text-[#C8A96B] text-xs font-semibold">
                    {getCategoryIcon(business.icon)}
                    <span className="tracking-wider uppercase text-[10px]">
                      Sector {index + 1}
                    </span>
                  </div>

                  {/* Primary Metric Badge */}
                  <div className="absolute bottom-3 right-4 z-10 text-right">
                    <span className="text-white text-xs font-bold block">
                      {business.stats.primary}
                    </span>
                    <span className="text-[#C8A96B] text-[10px] uppercase tracking-wider block">
                      {business.stats.label}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081B33] group-hover:text-[#1557A6] transition-colors">
                      {business.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#536174] leading-relaxed line-clamp-3">
                      {business.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#1557A6] tracking-wider uppercase">
                      {business.stats.metric}
                    </span>
                    <Link
                      to={`/business/${business.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#081B33] group-hover:text-[#C8A96B] transition-colors"
                      aria-label={`Explore ${business.title}`}
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Business Verticals CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/business"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-[#081B33] hover:bg-[#0E2B52] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all"
          >
            <span>Explore All 11 Business Verticals In Detail</span>
            <ArrowRight className="w-4 h-4 text-[#C8A96B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
