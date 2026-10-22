import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { toast } from "sonner";
import { Sparkles, MapPin, Mail, User, MessageSquare, Rocket, Download, Image } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const VisitingCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(`Thanks ${formData.name}, great to connect with someone from ${formData.city || "around the world"}. I'll reach out soon!`);
  };

  const captureCard = async () => {
    if (!cardRef.current) return null;
    return await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#050505",
    });
  };

  const handleDownloadPDF = async () => {
    const canvas = await captureCard();
    if (!canvas) return;
    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save(`visiting-card-${formData.name.replace(/\s+/g, "-").toLowerCase()}.pdf`);
    toast.success("PDF downloaded!");
  };

  const handleDownloadImage = async () => {
    const canvas = await captureCard();
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `visiting-card-${formData.name.replace(/\s+/g, "-").toLowerCase()}.png`;
    a.click();
    toast.success("Image downloaded!");
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050505] text-white border-t border-[#252830]">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12">
          <span className="editorial-eyebrow">[ DIGITAL CREDENTIAL CARD ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            DIRECT PROTOCOL
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          ref={cardRef}
          className="relative rounded-[28px] border border-[#252830] bg-[#0B0D10] p-8 md:p-10 shadow-2xl space-y-8"
        >
          {/* Header */}
          <div className="relative text-center space-y-4">
            <div className="mx-auto w-20 h-20 rounded-full border-2 border-[#246BFD] overflow-hidden">
              <img src="/images/najish-profile.jpeg" alt="Najish Anjum" className="w-full h-full object-cover" />
            </div>

            <div>
              <div className="flex items-center justify-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#246BFD]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>NAJISH ANJUM &middot; &lt;NA /&gt;</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white">
                GLAD TO SEE YOU HERE
              </h2>
              <p className="text-[#9A9CA3] mt-2 text-sm leading-relaxed max-w-md mx-auto font-sans">
                Exploring the frontier of AI, full-stack systems, and Web3 — leave your mark below.
              </p>
            </div>
          </div>

          {/* Form or Thank You */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9CA3]" />
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#12151B] border border-[#252830] focus:border-[#246BFD] text-sm text-white placeholder-[#9A9CA3]/50 outline-none"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9CA3]" />
                  <input
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    placeholder="Your City / Country"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#12151B] border border-[#252830] focus:border-[#246BFD] text-sm text-white placeholder-[#9A9CA3]/50 outline-none"
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A9CA3]" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email (optional)"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#12151B] border border-[#252830] focus:border-[#246BFD] text-sm text-white placeholder-[#9A9CA3]/50 outline-none"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#9A9CA3]" />
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Why did you visit? Let me know!"
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#12151B] border border-[#252830] focus:border-[#246BFD] text-sm text-white placeholder-[#9A9CA3]/50 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="editorial-btn-primary w-full py-3.5 text-xs font-mono tracking-widest"
              >
                <Rocket className="mr-2 h-4 w-4" />
                <span>CONNECT WITH NAJISH</span>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-3"
            >
              <h3 className="font-display text-2xl text-white uppercase tracking-tight">
                THANKS {formData.name.toUpperCase()}!
              </h3>
              <p className="text-[#9A9CA3] text-sm font-sans">
                Great to connect with someone from <span className="text-[#246BFD] font-bold">{formData.city || "around the world"}</span>. I'll reach out soon.
              </p>
            </motion.div>
          )}

          {/* Footer note */}
          <div className="pt-6 border-t border-[#252830] text-center font-mono text-xs text-[#9A9CA3]">
            <span>&lt;NA /&gt; DIGITAL VISITING NODE &middot; NAJISH ANJUM</span>
          </div>
        </motion.div>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center justify-center gap-3 flex-wrap"
          >
            <button
              onClick={handleDownloadPDF}
              className="editorial-btn-secondary text-xs font-mono py-2.5 px-4"
            >
              <Download className="mr-2 h-4 w-4 text-[#246BFD]" />
              DOWNLOAD PDF
            </button>
            <button
              onClick={handleDownloadImage}
              className="editorial-btn-secondary text-xs font-mono py-2.5 px-4"
            >
              <Image className="mr-2 h-4 w-4 text-[#246BFD]" />
              DOWNLOAD PNG
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
