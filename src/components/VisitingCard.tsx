import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Sparkles, MapPin, Mail, User, MessageSquare, Rocket, Download, Image } from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import profileImg from "@/assets/profile.jpg";

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
      backgroundColor: "#0a0a0f",
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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          ref={cardRef}
          className="relative rounded-2xl border border-primary/20 bg-card/20 backdrop-blur-xl p-8 md:p-10 shadow-[0_0_40px_hsl(var(--primary)/0.08),inset_0_1px_0_hsl(var(--primary)/0.1)]"
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl border border-primary/10 pointer-events-none" />
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/10 via-transparent to-secondary/10 pointer-events-none opacity-50" />

          {/* Header */}
          <div className="relative text-center space-y-4 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto w-20 h-20 rounded-full border-2 border-primary/40 overflow-hidden shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              <img src={profileImg} alt="Najish Anjum" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary">Digital Visiting Card</span>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Glad to see you here
              </h2>
              <p className="text-muted-foreground mt-2 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                Exploring the future of AI, Web3, and intelligent systems — welcome to my space.
              </p>
            </motion.div>
          </div>

          {/* Form or Thank You */}
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your Name"
                    className="pl-10 bg-background/40 border-border/40 focus:border-primary/60 backdrop-blur-sm"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    placeholder="Your City"
                    className="pl-10 bg-background/40 border-border/40 focus:border-primary/60 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email (optional)"
                  className="pl-10 bg-background/40 border-border/40 focus:border-primary/60 backdrop-blur-sm"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Why did you visit? Tell me about you!"
                  rows={3}
                  className="pl-10 bg-background/40 border-border/40 focus:border-primary/60 backdrop-blur-sm resize-none"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full relative overflow-hidden bg-gradient-to-r from-primary/80 via-primary to-secondary/80 text-primary-foreground font-semibold text-base shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Let's Connect
                </Button>
              </motion.div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="text-4xl">🎉</div>
              <h3 className="text-xl font-bold text-foreground">
                Thanks {formData.name}!
              </h3>
              <p className="text-muted-foreground text-sm">
                Great to connect with someone from <span className="text-primary font-medium">{formData.city || "around the world"}</span>. I'll reach out soon!
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleDownloadPDF}
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleDownloadImage}
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10"
                  >
                    <Image className="mr-2 h-4 w-4" />
                    Download Image
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Short intro */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 pt-6 border-t border-border/30 text-center"
          >
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              I appreciate your visit more than you know.
            </p>
            <p className="text-primary font-semibold mt-1 text-sm md:text-base">Let's get connected!</p>
            <p className="mt-3 text-muted-foreground/60 font-mono text-xs italic">— Najish</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
