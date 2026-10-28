import React, { useEffect, useState } from "react";
import { MapPin, Maximize2, Sparkles } from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionHeading from "../components/common/SectionHeading";
import ImageLightbox from "../components/common/ImageLightbox";
import { galleryCategories, galleryItems } from "../data/galleryData";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Visual Gallery & Architectural Imagery | Neeraj Sharma";
  }, []);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Visual Gallery" }]} />

          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B] block mb-2">
              CURATED PHOTOGRAPHY
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Architectural & Visual Gallery
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              A curated photographic portfolio documenting temple stonework,
              international waterfronts, resort landscapes, and sporting events.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-xl overflow-hidden bg-[#081B33] shadow-md hover:shadow-2xl border border-[#C8A96B]/25 hover:border-[#C8A96B]/60 transition-all duration-500 cursor-pointer"
              onClick={() => handleOpenLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#081B33]/85 text-[#C8A96B] border border-[#C8A96B]/40 backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Top-Right Expand Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 group-hover:bg-[#C8A96B] text-white group-hover:text-[#081B33] flex items-center justify-center transition-colors">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white space-y-1">
                {item.location && (
                  <div className="flex items-center gap-1 text-[11px] text-[#C8A96B] font-medium">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                )}
                <h3 className="font-serif text-lg font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300 line-clamp-2 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        images={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev > 0 ? prev - 1 : filteredItems.length - 1,
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev < filteredItems.length - 1 ? prev + 1 : 0,
          )
        }
      />
    </div>
  );
}
