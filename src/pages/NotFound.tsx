import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import notFoundIllustration from "@/assets/404-illustration.png";
import logoNA from "@/assets/logo-na.png";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white px-4">
      <motion.div
        className="text-center max-w-xl w-full space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mb-4 inline-block">
          <motion.img
            src={notFoundIllustration}
            alt="404 Not Found"
            className="w-full max-w-sm mx-auto rounded-[24px] border border-[#252830] filter grayscale contrast-125"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <motion.img
            src={logoNA}
            alt="NA Logo"
            className="absolute bottom-3 right-3 w-12 h-12 rounded-full border border-[#246BFD]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
        </div>

        <div>
          <span className="editorial-eyebrow">[ ERROR // 404 ]</span>
          <h1 className="font-display text-5xl sm:text-6xl uppercase tracking-tight text-white mt-1">
            PAGE NOT <span className="text-[#246BFD]">FOUND</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#9A9CA3] mt-2 max-w-md mx-auto">
            The requested protocol address doesn't exist on this node.
          </p>
        </div>

        <div>
          <Link
            to="/"
            className="editorial-btn-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
