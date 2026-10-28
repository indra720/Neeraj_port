import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Building2,
  Calendar,
} from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionHeading from "../components/common/SectionHeading";
import { projectData } from "../data/projectData";

export default function ProjectsPage() {
  const [activeRegion, setActiveRegion] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Featured Projects & International Experience | Neeraj Sharma";
  }, []);

  const regions = ["All", "Middle East", "India"];

  const filteredProjects =
    activeRegion === "All"
      ? projectData
      : projectData.filter((p) => p.region === activeRegion);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Featured Projects & Footprint" }]} />

          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B] block mb-2">
              PROJECT PORTFOLIO & ASSOCIATIONS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Featured Projects & Global Experience
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Documented landmarks, trade associations, and integrated
              developments across the United Arab Emirates, Bahrain, Saudi
              Arabia, and India.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 ${
                activeRegion === region
                  ? "bg-[#081B33] text-white shadow-md border border-[#081B33]"
                  : "bg-white text-[#536174] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {region === "All" ? "All Global Projects" : region}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-[#081B33]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-black/30 to-transparent"></div>

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#081B33]/85 text-[#C8A96B] border border-[#C8A96B]/40 backdrop-blur-sm">
                    {project.associationType}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5 text-xs text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
                  <span className="font-medium">{project.location}</span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#1557A6]">
                    {project.category}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081B33] group-hover:text-[#1557A6] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#536174] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-medium italic">
                    {project.year}
                  </span>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#081B33] group-hover:text-[#C8A96B] transition-colors"
                  >
                    <span>View Project Specification</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Factual Disclaimer Banner */}
        <div className="mt-14 p-6 rounded-lg bg-white border border-gray-200 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xs text-gray-500 leading-relaxed">
            *In accordance with strict content accuracy principles, references
            represent material supply, dimensional stone export, and engineering
            coordination associations documented in Neeraj Sharma’s professional
            profile. Visuals are illustrative architectural representations.
          </p>
        </div>
      </div>
    </div>
  );
}
