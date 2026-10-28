import React, { useEffect, useState } from "react";
import {
  Play,
  Video,
  Radio,
  Calendar,
  Clock,
  ExternalLink,
  Sparkles,
  Info,
} from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionHeading from "../components/common/SectionHeading";
import VideoModal from "../components/common/VideoModal";
import { mediaCategories, mediaItems } from "../data/mediaData";

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Media");
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Media, Videos & Appearances | Neeraj Sharma";
  }, []);

  const filteredItems =
    selectedCategory === "All Media"
      ? mediaItems
      : mediaItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Media & Videos" }]} />

          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B] block mb-2">
              PUBLIC DISCOURSE & MULTIMEDIA
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Media, Videos & Documentaries
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Explore interviews, project walkthroughs, athletic initiatives,
              and discussions on Rajasthan stonecraft and international
              enterprise.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Placeholder Integrity Notice */}
        <div className="mb-10 p-4 rounded-lg bg-white border border-[#C8A96B]/30 shadow-sm flex items-start gap-3 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-[#C8A96B] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-[#536174] leading-relaxed">
            *In compliance with verified branding standards, media cards below
            represent official media channels and curated subject matter slots.
            Official video links can be updated anytime through the CMS/data
            layer.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {mediaCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#081B33] text-white shadow-md border border-[#081B33]"
                  : "bg-white text-[#536174] hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((media) => (
            <div
              key={media.id}
              className="group bg-white rounded-lg overflow-hidden border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-300 shadow-md hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Thumbnail with Play Trigger */}
              <div
                className="relative h-56 overflow-hidden bg-[#081B33] cursor-pointer"
                onClick={() => setActiveVideo(media)}
              >
                <img
                  src={media.thumbnail}
                  alt={media.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-black/30 to-transparent"></div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#C8A96B] group-hover:bg-white text-[#081B33] flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Platform Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#081B33]/85 text-[#C8A96B] border border-[#C8A96B]/40 backdrop-blur-sm">
                    {media.platform}
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-4 z-10 flex items-center gap-1 text-[11px] font-semibold text-white bg-black/60 px-2 py-0.5 rounded">
                  <Clock className="w-3 h-3" />
                  <span>{media.duration}</span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#1557A6]">
                    {media.category}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#081B33] group-hover:text-[#1557A6] transition-colors leading-snug">
                    {media.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#536174] leading-relaxed line-clamp-3">
                    {media.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C8A96B]" />
                    {media.date}
                  </span>

                  <button
                    onClick={() => setActiveVideo(media)}
                    className="font-bold text-[#081B33] group-hover:text-[#C8A96B] transition-colors flex items-center gap-1"
                  >
                    <span>Play Video</span>
                    <Play className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={!!activeVideo}
        videoUrl={activeVideo?.videoUrl}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </div>
  );
}
