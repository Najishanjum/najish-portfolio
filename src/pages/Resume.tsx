import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Resume = () => {
  return (
    <div className="relative z-10 min-h-screen bg-transparent text-white">
      <Navigation />

      <div className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Top Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 mb-6 border-b border-[#252830]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#9A9CA3] border border-[#252830] rounded-full bg-[#0B0D10] hover:text-white hover:border-[#246BFD] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOME</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/resume/Najish_Anjum_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider text-white border border-[#252830] rounded-full bg-[#12151B] hover:border-[#246BFD] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#246BFD]" />
              <span>OPEN PDF</span>
            </a>

            <a
              href="/resume/Najish_Anjum_Resume.pdf"
              download="Najish_Anjum_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider text-white bg-[#246BFD] rounded-full hover:bg-[#4D8DFF] transition-colors shadow-lg shadow-[#246BFD]/25"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer + Fallback HTML Document */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-[#252830] bg-[#0B0D10] overflow-hidden shadow-2xl p-2 sm:p-4"
        >
          <iframe
            src="/resume/Najish_Anjum_Resume.pdf#view=FitH"
            title="Md Najish Anjum - Resume"
            className="w-full h-[85vh] rounded-xl border border-[#252830] bg-white"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;

