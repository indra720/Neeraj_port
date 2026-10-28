import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Building2,
  MapPin,
} from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import { businessCategories } from "../data/businessData";
import { projectData } from "../data/projectData";

export default function BusinessDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const business = businessCategories.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (business) {
      document.title = `${business.title} | Neeraj Sharma Business Portfolio`;
    }
  }, [business, slug]);

  if (!business) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-[#081B33]">
          Business Vertical Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          The requested sector portfolio could not be located.
        </p>
        <Link
          to="/business"
          className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded bg-[#081B33] text-white text-xs uppercase font-bold tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Business Verticals</span>
        </Link>
      </div>
    );
  }

  // Find related projects associated with this business vertical
  const relatedProjects = projectData
    .filter((p) => {
      if (
        business.id === "resort-development" ||
        business.id === "hospitality"
      ) {
        return (
          p.category.includes("Hospitality") || p.category.includes("Resort")
        );
      }
      if (
        business.id === "natural-stone" ||
        business.id === "temple-construction"
      ) {
        return (
          p.category.includes("Stone") || p.category.includes("Architecture")
        );
      }
      if (business.id === "import-export" || business.id === "metal-trading") {
        return p.region === "Middle East";
      }
      return true;
    })
    .slice(0, 2);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[
              { label: "Business Portfolio", path: "/business" },
              { label: business.title },
            ]}
          />

          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B] block mb-2">
              BUSINESS VERTICAL SPECIFICATION
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {business.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              {business.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Visual Cover */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-[#C8A96B]/30 max-h-[460px] relative">
              <img
                src={business.image}
                alt={business.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/70 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#C8A96B] font-bold block">
                    Enterprise Capability
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold">
                    {business.title}
                  </span>
                </div>
                <div className="bg-[#081B33]/90 px-4 py-2 rounded border border-[#C8A96B]/40">
                  <span className="text-xs font-bold text-[#C8A96B]">
                    {business.stats.primary}
                  </span>
                  <span className="text-[10px] text-gray-300 block">
                    {business.stats.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Strategic Overview */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                STRATEGIC OVERVIEW
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081B33]">
                Operational Philosophy & Execution
              </h2>
              <p className="text-sm sm:text-base text-[#536174] leading-relaxed">
                {business.fullDescription}
              </p>
            </div>

            {/* Operational Scope */}
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#C8A96B]/20 shadow-sm space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#081B33] block">
                Scope of Activities & Capabilities
              </span>
              <p className="text-sm text-[#536174] leading-relaxed font-medium">
                {business.scope}
              </p>
            </div>

            {/* Key Operational Highlights */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                VALUE CREATION & HIGHLIGHTS
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081B33]">
                Strategic Advantages
              </h3>

              <div className="space-y-3">
                {business.keyHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#536174] leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Project Associations */}
            {relatedProjects.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-gray-200">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                  RELATED LANDMARKS & EXPERIENCE
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081B33]">
                  Project Associations
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {relatedProjects.map((p) => (
                    <div
                      key={p.id}
                      className="p-5 rounded-lg bg-white border border-gray-200 shadow-sm space-y-3"
                    >
                      <span className="text-[10px] text-[#C8A96B] font-bold uppercase tracking-wider block">
                        {p.location}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#081B33]">
                        {p.title}
                      </h4>
                      <p className="text-xs text-[#536174] line-clamp-2">
                        {p.shortDescription}
                      </p>
                      <Link
                        to={`/projects/${p.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#1557A6] hover:text-[#081B33] transition-colors pt-2"
                      >
                        <span>View Project Profile</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Strategic Enquiry Box */}
              <div className="p-7 rounded-xl bg-[#081B33] text-white border border-[#C8A96B]/30 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C8A96B] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Strategic Alliances</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white">
                  Collaborate in {business.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Direct engagement opportunities for land owners, project
                  developers, institutional investors, and trade partners.
                </p>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-bold text-xs uppercase tracking-widest hover:brightness-105 transition-all text-center"
                >
                  <span>Submit Sector Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Other Verticals Quick Navigator */}
              <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#081B33] border-b border-gray-100 pb-2">
                  All 11 Verticals
                </h4>

                <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                  {businessCategories.map((b) => (
                    <Link
                      key={b.id}
                      to={`/business/${b.slug}`}
                      className={`block py-1.5 px-2 text-xs rounded transition-colors ${
                        b.slug === slug
                          ? "bg-[#081B33] text-[#C8A96B] font-semibold"
                          : "text-[#536174] hover:bg-gray-100"
                      }`}
                    >
                      {b.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/business"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#081B33] hover:text-[#1557A6] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to All Verticals</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
