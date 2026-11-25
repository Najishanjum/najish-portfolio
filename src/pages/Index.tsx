import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CustomCursor } from "@/components/editorial/CustomCursor";
import { EditorialNav } from "@/components/editorial/EditorialNav";
import { Chapter01Hero } from "@/components/editorial/Chapter01Hero";
import { Chapter02Projects } from "@/components/editorial/Chapter02Projects";
import { Chapter03Stack } from "@/components/editorial/Chapter03Stack";
import { Chapter04Story } from "@/components/editorial/Chapter04Story";
import { Chapter05Experience } from "@/components/editorial/Chapter05Experience";
import { Chapter06Receipts } from "@/components/editorial/Chapter06Receipts";
import { Chapter07Capabilities } from "@/components/editorial/Chapter07Capabilities";
import { Chapter08Footer } from "@/components/editorial/Chapter08Footer";

const Index = () => {
  const location = useLocation();

  // Smooth scroll support for hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="relative min-h-screen bg-[#F0EDE5] text-[#191919] paper-texture selection:bg-[#D12626] selection:text-[#F0EDE5]">
      {/* Editorial Custom Cursor */}
      <CustomCursor />

      {/* Top Editorial Navigation */}
      <EditorialNav />

      {/* Chapter 01: Hero / Opening */}
      <Chapter01Hero />

      {/* Chapter 02: Selected Work & Also on the Shelf */}
      <Chapter02Projects />

      {/* Chapter 03: The Stack (High-Contrast Layered Dark Chapter) */}
      <Chapter03Stack />

      {/* Chapter 04: The Story & Authentic Photographs */}
      <Chapter04Story />

      {/* Chapter 05: On the Job (Experience & Shipped Receipts) */}
      <Chapter05Experience />

      {/* Chapter 06: The Receipts (Hackathon Wins & Proof of Work Ledger) */}
      <Chapter06Receipts />

      {/* Chapter 07: What I Build (Engineering Disciplines) */}
      <Chapter07Capabilities />

      {/* Chapter 08: Next Chapter (Contact & Colophon) */}
      <Chapter08Footer />
    </div>
  );
};

export default Index;
