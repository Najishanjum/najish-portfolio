import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Mail, Linkedin, Github, Twitter, Download, ArrowUpRight, Copy, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const socialLinks = [
  { icon: Github, href: "https://github.com/Najishanjum", label: "GitHub", handle: "@Najishanjum" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-najish-anjum-044078328", label: "LinkedIn", handle: "Najish Anjum" },
  { icon: Twitter, href: "https://x.com/Najish_anjum?s=09", label: "X / Twitter", handle: "@Najish_anjum" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("najishanjum058@gmail.com");
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error || (data as any)?.error) throw new Error(error?.message || (data as any)?.error);
      toast.success("Message transmitted successfully!", {
        description: "Thank you for reaching out. I will get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast.error("Failed to send message", { description: err?.message ?? "Please try again or email directly." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] text-white border-t border-[#252830] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-12 sm:mb-16">
          <span className="editorial-eyebrow">[ 06 // GET IN TOUCH ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            DIRECT INQUIRIES &amp; COLLABORATIONS
          </span>
        </div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="editorial-section-title text-white">
            <span>HAVE AN IDEA?</span>
            <br />
            <span className="text-[#246BFD]">LET'S BUILD IT.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9A9CA3] max-w-xl font-sans">
            Whether you want to collaborate on AI/ML research, build a full-stack platform, deploy a Web3 protocol, or assemble a championship hackathon squad — my inbox is open.
          </p>
        </motion.div>

        {/* 2-Column Contact Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Social Nodes */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="rounded-[24px] bg-[#0B0D10] border border-[#252830] p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#246BFD]">
                  PRIMARY INBOX
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-xs text-[#9A9CA3] hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#246BFD]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "COPIED" : "COPY"}</span>
                </button>
              </div>

              <div>
                <a
                  href="mailto:najishanjum058@gmail.com"
                  className="font-display text-xl sm:text-2xl text-white hover:text-[#4D8DFF] transition-colors break-all"
                >
                  najishanjum058@gmail.com
                </a>
                <p className="text-xs text-[#9A9CA3] font-sans mt-1">
                  Usually replies within 24 hours.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:najishanjum058@gmail.com"
                  className="editorial-btn-primary w-full text-xs font-mono py-3"
                >
                  <Mail className="w-4 h-4" />
                  <span>OPEN EMAIL CLIENT</span>
                </a>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="rounded-[24px] bg-[#0B0D10] border border-[#252830] p-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#9A9CA3]">
                VERIFIED SOCIALS
              </span>
              <div className="space-y-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#12151B] border border-[#252830] hover:border-[#246BFD] hover:bg-[#12151B]/80 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <s.icon className="w-4 h-4 text-[#246BFD]" />
                      <span className="font-sans font-semibold text-sm text-white group-hover:text-[#4D8DFF] transition-colors">
                        {s.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 font-mono text-xs text-[#9A9CA3]">
                      <span>{s.handle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9A9CA3] group-hover:text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <div className="p-6 rounded-[24px] bg-[#0B0D10] border border-[#252830] flex items-center justify-between">
              <div>
                <p className="font-sans font-bold text-sm text-white">Curriculum Vitae</p>
                <p className="font-mono text-xs text-[#9A9CA3]">Updated &middot; 2026 Edition</p>
              </div>
              <a
                href="/resume/Najish_Anjum_Resume.pdf"
                download
                className="editorial-btn-secondary py-2.5 px-4 text-xs font-mono"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Transmission Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] bg-[#0B0D10] border border-[#252830] p-6 sm:p-10 space-y-6">
              <div className="pb-4 border-b border-[#252830]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#246BFD]">
                  DISPATCH TRANSMISSION
                </span>
                <h3 className="font-display text-2xl text-white uppercase tracking-tight mt-1">
                  SEND DIRECT MESSAGE
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs uppercase tracking-wider text-[#9A9CA3] mb-2"
                  >
                    YOUR NAME //
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="e.g. Alex Chen"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#12151B] border font-sans text-sm text-white placeholder-[#9A9CA3]/50 outline-none transition-all ${
                      focused === "name" ? "border-[#246BFD] ring-1 ring-[#246BFD]" : "border-[#252830]"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs uppercase tracking-wider text-[#9A9CA3] mb-2"
                  >
                    YOUR EMAIL //
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="alex@company.com"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#12151B] border font-sans text-sm text-white placeholder-[#9A9CA3]/50 outline-none transition-all ${
                      focused === "email" ? "border-[#246BFD] ring-1 ring-[#246BFD]" : "border-[#252830]"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-[#9A9CA3] mb-2"
                  >
                    PROJECT BRIEF / MESSAGE //
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Describe your project, team opportunity, or collaboration idea..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#12151B] border font-sans text-sm text-white placeholder-[#9A9CA3]/50 outline-none transition-all resize-none ${
                      focused === "message" ? "border-[#246BFD] ring-1 ring-[#246BFD]" : "border-[#252830]"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="editorial-btn-primary w-full py-4 text-xs font-mono tracking-widest disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
