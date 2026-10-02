import { Navigation } from "@/components/Navigation";
import { Hackathons } from "@/components/Hackathons";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HackathonsPage = () => {
  return (
    <div className="min-h-screen" style={{ background: "#FAF8F3" }}>
      <Navigation />
      <div className="pt-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-4 sm:px-8 py-6"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 font-bold text-sm border-[2px] border-[#090909] rounded-xl shadow-[3px_3px_0_#090909] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            style={{ background: "#FAF8F3", color: "#090909" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        <Hackathons />
      </div>
      <Footer />
    </div>
  );
};

export default HackathonsPage;

