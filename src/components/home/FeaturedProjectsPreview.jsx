import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  ArrowUpRight,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Building2,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { projectData } from "../../data/projectData";

export default function FeaturedProjectsPreview() {
  const [filterRegion, setFilterRegion] = useState("All");

  const filteredProjects =
    filterRegion === "All"
      ? projectData
      : projectData.filter((p) => p.region === filterRegion);

  return (
    <section className="py-20 sm:py-28 bg-[#F8F7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="GLOBAL FOOTPRINT & LANDMARKS"
          title="Featured Projects & International Experience"
          subtitle="Documented project associations spanning iconic Middle Eastern developments and visionary Indian destinations."
          align="center"
          theme="light"
        />

        {/* Region Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {["All", "Middle East", "India"].map((region) => (
            <button
              key={region}
              onClick={() => setFilterRegion(region)}
              className={`px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 ${
                filterRegion === region
                  ? "bg-[#081B33] text-white shadow-md border border-[#081B33]"
                  : "bg-white text-[#536174] hover:bg-[#EFECE4] border border-gray-200"
              }`}
            >
              {region === "All" ? "All Landmark Associations" : region}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#081B33]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-black/30 to-transparent"></div>

                {/* Association Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#081B33]/85 text-[#C8A96B] border border-[#C8A96B]/40 backdrop-blur-sm">
                    {project.associationType}
                  </span>
                </div>

                {/* Location Pill */}
                <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5 text-xs text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
                  <span className="font-medium">{project.location}</span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#1557A6]">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081B33] group-hover:text-[#1557A6] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536174] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium italic">
                    {project.year}
                  </span>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#081B33] group-hover:text-[#C8A96B] transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Factual Disclaimer Banner */}
        <div className="mt-10 p-4 rounded-md bg-[#F8F7F3] border border-gray-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 italic">
            *Project references illustrate material supply, trade coordination,
            and technical associations as documented in the professional
            profile.
          </p>
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm bg-[#081B33] hover:bg-[#0E2B52] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all"
          >
            <span>View All Projects & Global Footprint</span>
            <ArrowRight className="w-4 h-4 text-[#C8A96B]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
