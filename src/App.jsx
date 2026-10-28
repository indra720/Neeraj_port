import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import JourneyPage from "./pages/JourneyPage";
import BusinessPage from "./pages/BusinessPage";
import BusinessDetailPage from "./pages/BusinessDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import AchievementsPage from "./pages/AchievementsPage";
import MediaPage from "./pages/MediaPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F8F7F3] text-[#536174] selection:bg-[#C8A96B] selection:text-[#081B33]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/business/:slug" element={<BusinessDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
