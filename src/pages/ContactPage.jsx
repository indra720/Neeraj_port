import React, { useEffect, useState } from "react";
import {
  Send,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Building,
  Globe,
  Mail,
  Phone,
  Info,
  AlertCircle,
} from "lucide-react";
import Breadcrumb from "../components/common/Breadcrumb";
import SectionHeading from "../components/common/SectionHeading";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact & Business Enquiries | Neeraj Sharma";
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    enquiryType: "Business Partnership",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const enquiryCategories = [
    "Business Partnership",
    "Investment Enquiry",
    "Real Estate",
    "Hospitality & Resorts",
    "Import & Export",
    "Construction & Development",
    "Media & Interviews",
    "General Enquiry",
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim())
      errs.fullName = "Please enter your full name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid contact phone number";
    }
    if (!formData.subject.trim()) errs.subject = "Please specify a subject";
    if (!formData.message.trim())
      errs.message = "Please provide details in your message";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate interactive processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        enquiryType: "Business Partnership",
        subject: "",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#F8F7F3] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#081B33] text-white py-14 sm:py-20 border-b border-[#C8A96B]/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C8A96B_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: "Business Enquiries" }]} />

          <div className="max-w-3xl mt-4">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C8A96B] block mb-2">
              EXECUTIVE ENGAGEMENT
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Business Enquiries & Strategic Dialogue
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              Open to high-level discussions regarding real estate development,
              resort co-development, stone export, and cross-border commercial
              opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-[#C8A96B]/30 shadow-lg space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <h2 className="font-serif text-2xl font-bold text-[#081B33]">
                Submit Formal Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-[#536174] mt-1">
                Please complete the details below to route your communication
                appropriately.
              </p>
            </div>

            {submittedData ? (
              <div className="p-8 rounded-lg bg-[#F4ECE1] border border-[#C8A96B] text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#081B33] text-[#C8A96B] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#081B33]">
                  Enquiry Form Completed (Demo Mode)
                </h3>
                <p className="text-xs sm:text-sm text-[#536174] leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{submittedData.fullName}</strong>. Your
                  enquiry regarding <strong>{submittedData.enquiryType}</strong>{" "}
                  has been structured successfully on the client interface.
                </p>
                <div className="p-3 bg-white rounded text-xs text-gray-500 border border-gray-200 text-left max-w-md mx-auto space-y-1">
                  <p>
                    <strong>Enquiry Category:</strong>{" "}
                    {submittedData.enquiryType}
                  </p>
                  <p>
                    <strong>Subject:</strong> {submittedData.subject}
                  </p>
                  <p>
                    <strong>Contact Email:</strong> {submittedData.email}
                  </p>
                </div>
                <p className="text-[11px] text-gray-500 italic">
                  *Note: In this production frontend build, backend integration
                  (e.g. Supabase / SMTP) is pending setup. Enquiries are
                  currently evaluated locally.
                </p>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="px-6 py-2.5 rounded bg-[#081B33] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0E2B52] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#081B33]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Vikramaditya Singh"
                      className={`w-full px-4 py-2.5 text-sm rounded border bg-[#F8F7F3] focus:outline-none transition-colors ${
                        errors.fullName
                          ? "border-red-500"
                          : "border-gray-200 focus:border-[#C8A96B]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#081B33]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@domain.com"
                      className={`w-full px-4 py-2.5 text-sm rounded border bg-[#F8F7F3] focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-200 focus:border-[#C8A96B]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#081B33]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-4 py-2.5 text-sm rounded border bg-[#F8F7F3] focus:outline-none transition-colors ${
                        errors.phone
                          ? "border-red-500"
                          : "border-gray-200 focus:border-[#C8A96B]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#081B33]">
                      Company / Organization{" "}
                      <span className="text-gray-400 font-normal lowercase">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Apex Infrastructure Ltd."
                      className="w-full px-4 py-2.5 text-sm rounded border border-gray-200 bg-[#F8F7F3] focus:border-[#C8A96B] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Enquiry Category */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#081B33]">
                    Enquiry Classification{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm rounded border border-gray-200 bg-[#F8F7F3] focus:border-[#C8A96B] focus:outline-none transition-colors cursor-pointer"
                  >
                    {enquiryCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#081B33]">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Strategic Co-Development of Resort Destination"
                    className={`w-full px-4 py-2.5 text-sm rounded border bg-[#F8F7F3] focus:outline-none transition-colors ${
                      errors.subject
                        ? "border-red-500"
                        : "border-gray-200 focus:border-[#C8A96B]"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#081B33]">
                    Detailed Proposal / Message{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please outline the scope of your proposal, project background, or investment objectives..."
                    className={`w-full px-4 py-2.5 text-sm rounded border bg-[#F8F7F3] focus:outline-none transition-colors ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-200 focus:border-[#C8A96B]"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Demo Backend Disclosure */}
                <div className="p-3 rounded bg-gray-50 border border-gray-200 text-[11px] text-gray-500 flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-[#C8A96B] flex-shrink-0 mt-0.5" />
                  <p>
                    Backend integration status: Public demo mode. This form
                    validates client-side input and simulates professional
                    routing without storing private records.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-sm bg-gradient-to-r from-[#C8A96B] to-[#B39352] text-[#081B33] font-bold text-xs uppercase tracking-widest hover:shadow-gold-glow hover:brightness-105 transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Validating & Routing...</span>
                  ) : (
                    <>
                      <span>Submit Business Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Office Footprint & Engagement Principles */}
          <div className="lg:col-span-5 space-y-8">
            {/* Executive Office Profile */}
            <div className="p-7 rounded-xl bg-[#081B33] text-white border border-[#C8A96B]/30 shadow-xl space-y-5">
              <span className="text-[10px] uppercase tracking-widest text-[#C8A96B] font-bold block">
                EXECUTIVE FOOTPRINT
              </span>

              <h3 className="font-serif text-2xl font-bold text-white">
                Neeraj Sharma Corporate Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8A96B] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">
                      Heritage Headquarters:
                    </span>
                    <span>
                      Karauli District, Hindaun City, Rajasthan, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#1557A6] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">
                      International Trade Association:
                    </span>
                    <span>
                      Dubai & GCC Cross-Border Corridors (2003–Present)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#C8A96B] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">
                      Commercial Verticals:
                    </span>
                    <span>Joy Adventure Group • Joy Hospitality Group</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#C8A96B]">
                <ShieldCheck className="w-4 h-4" />
                <span>NDA & Confidentiality Respected on all Inquiries</span>
              </div>
            </div>

            {/* Engagement FAQ */}
            <div className="p-7 rounded-xl bg-white border border-gray-200 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#081B33] border-b border-gray-100 pb-2">
                Engagement Guidelines
              </h4>

              <div className="space-y-3 text-xs text-[#536174]">
                <div>
                  <span className="font-bold text-[#081B33] block">
                    1. Co-Development Alliances
                  </span>
                  <p className="mt-0.5">
                    We welcome dialogue with institutional landholders and
                    regional co-developers for resort projects across India.
                  </p>
                </div>

                <div>
                  <span className="font-bold text-[#081B33] block">
                    2. Dimensional Stone Supply
                  </span>
                  <p className="mt-0.5">
                    Direct quarry export inquiries for red, pink, and carved
                    sandstone are evaluated for commercial scale.
                  </p>
                </div>

                <div>
                  <span className="font-bold text-[#081B33] block">
                    3. Media & Keynotes
                  </span>
                  <p className="mt-0.5">
                    Invitations for entrepreneurship forums, sports summits, and
                    heritage symposiums are coordinated through this portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
