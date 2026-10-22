import { Navigation } from "@/components/Navigation";
import { Hackathons } from "@/components/Hackathons";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HackathonsPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navigation />
      <div className="pt-24 sm:pt-28">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#9A9CA3] border border-[#252830] rounded-full bg-[#0B0D10] hover:text-white hover:border-[#246BFD] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO HOME</span>
          </Link>
        </motion.div>

        <Hackathons />
      </div>
      <Footer />
    </div>
  );
};

export default HackathonsPage;
