import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Download, Image } from "lucide-react";
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
    toast.success(`Thanks ${formData.name}, great to connect with someone from ${formData.city || "around the world"}. I'll reach out soon! 🚀`);
  };

  const captureCard = async () => {
    if (!cardRef.current) return null;
    return await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#0f0f1b",
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
    <section id="visiting-card" className="py-20 px-4 relative overflow-hidden">
      {/* Pink grid background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,45,251,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,45,251,0.06) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Floating decorations */}
      <motion.span
        className="absolute top-16 left-8 text-3xl opacity-40 pointer-events-none select-none"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >🥷</motion.span>
      <motion.span
        className="absolute bottom-20 right-10 text-2xl opacity-30 pointer-events-none select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >💳</motion.span>
      <motion.span
        className="absolute top-32 right-16 font-mono text-[#ff2dfb] opacity-20 text-lg pointer-events-none select-none"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >&lt;/&gt;</motion.span>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black font-mono inline-block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              color: '#000',
              textShadow: '0 0 20px #ff2dfb, 0 0 40px #ff2dfb, 0 0 60px rgba(255,45,251,0.4), 2px 2px 0 #ff2dfb',
              WebkitTextStroke: '1px #ff2dfb',
            }}
          >
            💳 DIGITAL-VISIT.CARD
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <p className="text-xl md:text-2xl font-mono" style={{ color: '#ffe600' }}>
              Glad to see you here 👋
            </p>
            <p className="text-sm md:text-base font-mono mt-2 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Exploring the future of AI, Web3, and intelligent systems — welcome to my space.
            </p>
          </motion.div>
        </motion.div>

        {/* Browser Window Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          ref={cardRef}
          className="relative"
          style={{
            border: '3px solid #000',
            borderRadius: '16px',
            boxShadow: '8px 8px 0px #000, 12px 12px 0px rgba(255,45,251,0.3)',
            background: '#0f0f1b',
          }}
        >
          {/* Window Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-t-[13px]"
            style={{
              background: '#ffe600',
              borderBottom: '3px solid #000',
            }}
          >
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border-2 border-black" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border-2 border-black" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#28c840] border-2 border-black" />
            </div>
            <div
              className="flex-1 px-3 py-1 rounded-md text-xs font-mono truncate"
              style={{
                background: 'rgba(0,0,0,0.1)',
                border: '2px solid #000',
                color: '#000',
              }}
            >
              /connect-with-najish.card
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 md:p-10">
            {!submitted ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* LEFT: Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <FormField
                    label="Your Name"
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                    required
                  />
                  <FormField
                    label="Your City"
                    value={formData.city}
                    onChange={(v) => setFormData({ ...formData, city: v })}
                    required
                  />
                  <FormField
                    label="Email (optional)"
                    type="email"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                  />
                  <div>
                    <label className="block text-xs font-mono mb-1.5" style={{ color: '#ffe600' }}>
                      Why did you visit? Tell me about you!
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share something..."
                      rows={3}
                      className="font-mono text-sm resize-none transition-all duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '2.5px solid #000',
                        borderRadius: '10px',
                        color: '#fff',
                        boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#ff2dfb';
                        e.currentTarget.style.boxShadow = 'inset 0 2px 6px rgba(0,0,0,0.3), 0 0 12px rgba(255,45,251,0.3)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#000';
                        e.currentTarget.style.boxShadow = 'inset 0 2px 6px rgba(0,0,0,0.3)';
                      }}
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                    <Button
                      type="submit"
                      className="w-full font-mono font-bold text-base py-6 transition-all duration-300"
                      style={{
                        background: '#000',
                        border: '2.5px solid #ff2dfb',
                        color: '#ff2dfb',
                        borderRadius: '10px',
                        boxShadow: '0 0 15px rgba(255,45,251,0.2)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#ffe600';
                        e.currentTarget.style.color = '#000';
                        e.currentTarget.style.borderColor = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#000';
                        e.currentTarget.style.color = '#ff2dfb';
                        e.currentTarget.style.borderColor = '#ff2dfb';
                      }}
                    >
                      🚀 Let's Connect
                    </Button>
                  </motion.div>
                </motion.form>

                {/* RIGHT: Message */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5"
                >
                  <p className="text-lg md:text-xl font-mono leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    "I appreciate your visit more than you know."
                  </p>
                  <p className="text-xl md:text-2xl font-bold font-mono" style={{ color: '#ff2dfb' }}>
                    Let's get connected!
                  </p>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <p
                      className="text-2xl italic mt-2"
                      style={{
                        fontFamily: "'Caveat', cursive",
                        color: '#ffe600',
                        borderBottom: '2px solid #ff2dfb',
                        paddingBottom: '4px',
                      }}
                    >
                      — Najish
                    </p>
                  </motion.div>

                  <motion.span
                    className="text-5xl mt-4"
                    animate={{ rotate: [0, 14, -14, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 2 }}
                  >
                    👋
                  </motion.span>
                </motion.div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-5"
              >
                <div className="text-5xl">🎉</div>
                <h3 className="text-2xl font-bold font-mono" style={{ color: '#ffe600' }}>
                  Thanks {formData.name}!
                </h3>
                <p className="font-mono text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Great to connect with someone from{" "}
                  <span style={{ color: '#ff2dfb' }}>{formData.city || "around the world"}</span>. I'll reach out soon!
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handleDownloadPDF}
                      className="font-mono font-bold"
                      style={{
                        background: 'transparent',
                        border: '2.5px solid #ffe600',
                        color: '#ffe600',
                        borderRadius: '10px',
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handleDownloadImage}
                      className="font-mono font-bold"
                      style={{
                        background: 'transparent',
                        border: '2.5px solid #ff2dfb',
                        color: '#ff2dfb',
                        borderRadius: '10px',
                      }}
                    >
                      <Image className="mr-2 h-4 w-4" />
                      Download Image
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FormField = ({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) => (
  <div>
    <label className="block text-xs font-mono mb-1.5" style={{ color: '#ffe600' }}>
      {label}
    </label>
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={label}
      className="font-mono text-sm transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '2.5px solid #000',
        borderRadius: '10px',
        color: '#fff',
        boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)',
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = '#ff2dfb';
        e.currentTarget.style.boxShadow = 'inset 0 2px 6px rgba(0,0,0,0.3), 0 0 12px rgba(255,45,251,0.3)';
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = '#000';
        e.currentTarget.style.boxShadow = 'inset 0 2px 6px rgba(0,0,0,0.3)';
      }}
    />
  </div>
);
