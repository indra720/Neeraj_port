import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Building2,
} from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import ImageLightbox from "../components/common/ImageLightbox";
import { projectData } from "../data/projectData";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = projectData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Neeraj Sharma Projects`;
    }
  }, [project, slug]);

  if (!project) {
    return (
      <div className="pt-32 pb-24 text-center max-w-xl mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-[#081B33]">
          Project Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          The requested project profile could not be located.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded bg-[#081B33] text-white text-xs uppercase font-bold tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Projects</span>
        </Link>
      </div>
    );
  }

  const galleryImages = [
    {
      src: project.image,
      title: project.title,
      category: project.category,
      location: project.location,
    },
    ...(project.gallery || []).map((img, idx) => ({
      src: img,
      title: `${project.title} - View ${idx + 2}`,
      category: project.category,
      location: project.location,
    })),
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb
            items={[
              { label: "Featured Projects", path: "/projects" },
              { label: project.title },
            ]}
          />

          <div className="max-w-3xl mt-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B]">
                {project.associationType}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs text-gray-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C8A96B]" />
                {project.location}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Visual Hero Image */}
            <div
              className="rounded-xl overflow-hidden shadow-2xl border border-[#C8A96B]/30 max-h-[480px] relative group cursor-pointer"
              onClick={() => {
                setLightboxIndex(0);
                setLightboxOpen(true);
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#C8A96B] font-bold uppercase tracking-widest block">
                    {project.status}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-bold">
                    {project.title}
                  </span>
                </div>
                <span className="text-xs font-semibold bg-[#081B33]/80 px-3 py-1.5 rounded border border-white/20 text-white">
                  Click to Expand
                </span>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                PROJECT CONTEXT & ASSOCIATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#081B33]">
                Architectural Scope & Profile Documentation
              </h2>
              <p className="text-sm sm:text-base text-[#536174] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Key Project Highlights */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                HIGHLIGHTS & EXECUTION
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081B33]">
                Scope Highlights
              </h3>

              <div className="space-y-3">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-[#536174] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#1557A6] block">
                  VISUAL GALLERY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#081B33]">
                  Architectural Perspectives
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative h-40 rounded-lg overflow-hidden border border-gray-200 cursor-pointer group shadow-sm"
                      onClick={() => {
                        setLightboxIndex(i + 1);
                        setLightboxOpen(true);
                      }}
                    >
                      <img
                        src={img}
                        alt={`${project.title} - View ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Strictly Grounded Disclaimer */}
            {project.disclaimer && (
              <div className="p-4 rounded-lg bg-[#EFECE4] border border-[#C8A96B]/30 text-xs text-gray-600 italic">
                {project.disclaimer}
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-6">
              {/* Specification Card */}
              <div className="p-7 rounded-xl bg-white border border-[#C8A96B]/30 shadow-md space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#081B33] border-b border-gray-100 pb-2">
                  Project Specifications
                </h4>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase tracking-wider">
                      Classification
                    </span>
                    <span className="font-semibold text-[#081B33]">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase tracking-wider">
                      Location
                    </span>
                    <span className="font-semibold text-[#081B33]">
                      {project.location}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase tracking-wider">
                      Timeline
                    </span>
                    <span className="font-semibold text-[#081B33]">
                      {project.year}
                    </span>
                  </div>

                  <div>
                    <span className="text-gray-400 block text-[11px] uppercase tracking-wider">
                      Association Status
                    </span>
                    <span className="font-semibold text-[#1557A6]">
                      {project.status}
                    </span>
                  </div>
                </div>

                {project.keyMetrics && (
                  <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                    {project.keyMetrics.map((km, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded bg-[#F8F7F3] border border-gray-100 text-center"
                      >
                        <span className="text-[10px] text-gray-400 uppercase block">
                          {km.label}
                        </span>
                        <span className="font-serif text-sm font-bold text-[#081B33] block mt-0.5">
                          {km.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Enquiry Box */}
              <div className="p-6 rounded-xl bg-[#081B33] text-white border border-[#C8A96B]/30 shadow-xl space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#C8A96B] font-bold block">
                  Project Engagement
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  Discuss Related Development
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Direct engagement regarding large-scale resort developments,
                  stone export, or regional partnerships.
                </p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-bold text-xs uppercase tracking-widest hover:brightness-105 transition-all text-center"
                >
                  <span>Inquire with Neeraj Sharma</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#081B33] hover:text-[#1557A6] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to All Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Component */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={galleryImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev > 0 ? prev - 1 : galleryImages.length - 1,
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev < galleryImages.length - 1 ? prev + 1 : 0,
          )
        }
      />
    </div>
  );
}
