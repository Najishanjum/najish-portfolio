import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send, Mail, Linkedin, Github, Globe, Download, Twitter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/najishanjum", label: "LinkedIn", bg: "#0A66C2" },
  { icon: Github, href: "https://github.com/najishanjum", label: "GitHub", bg: "#090909" },
  { icon: Twitter, href: "https://x.com/najishanjum", label: "X", bg: "#090909" },
  { icon: Globe, href: "#", label: "Portfolio", bg: "#7557F7" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });
      if (error || (data as any)?.error) throw new Error(error?.message || (data as any)?.error);
      toast.success("Message sent successfully! I'll get back to you soon.", {
        description: "Thank you for reaching out!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast.error("Failed to send message", { description: err?.message ?? "Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border-[3px] font-medium text-sm outline-none transition-all duration-200 resize-none ${
      focused === field
        ? "border-[#7557F7] shadow-[3px_3px_0_#7557F7]"
        : "border-[#090909] shadow-[3px_3px_0_#090909]"
    }`;

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-8"
      style={{ background: "#F3F0E8" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="nsha-section-eyebrow">Get in touch</p>
          <h2 className="nsha-section-title">
            Let's Build{" "}
            <span style={{ color: "#FF3D83" }}>Something.</span>
          </h2>
          <div
            className="mt-4 h-1.5 w-20 rounded-full border-[2px] border-[#090909]"
            style={{ background: "#FF3D83" }}
          />
        </motion.div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Yellow shadow card */}
          <div
            className="absolute inset-0 translate-x-[8px] translate-y-[8px] rounded-3xl border-[3px] border-[#090909]"
            style={{ background: "#FFD21C" }}
          />

          {/* Main card */}
          <div
            className="relative rounded-3xl border-[3px] border-[#090909] overflow-hidden"
            style={{ background: "#FAF8F3" }}
          >
            {/* Top accent bar */}
            <div
              className="px-8 pt-8 pb-5 border-b-[3px] border-[#090909]"
              style={{ background: "#090909" }}
            >
              <h3
                className="font-black text-2xl md:text-3xl"
                style={{ color: "#FFD21C", letterSpacing: "-0.02em" }}
              >
                CONTACT<span style={{ color: "#FF3D83" }}>.EXE</span>
              </h3>
              <p className="text-sm font-medium mt-1" style={{ color: "#FAF8F3" }}>
                Open for collaborations, projects, and opportunities
              </p>
            </div>

            {/* Two column body */}
            <div className="grid md:grid-cols-5 gap-8 p-8">
              {/* Left: info */}
              <div className="md:col-span-2 space-y-6">
                {/* Email */}
                <a
                  href="mailto:najishanjum058@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl border-[2px] border-[#090909] shadow-[3px_3px_0_#090909] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  style={{ background: "#FAF8F3" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl border-[2px] border-[#090909] flex items-center justify-center flex-shrink-0"
                    style={{ background: "#FFD21C" }}
                  >
                    <Mail className="w-5 h-5 text-[#090909]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#5B5B5B]">Click to Email</p>
                    <p className="text-sm font-bold text-[#090909]">najishanjum058@gmail.com</p>
                  </div>
                </a>

                {/* Social links */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#5B5B5B] mb-3">Find me on</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-11 h-11 rounded-xl border-[2px] border-[#090909] flex items-center justify-center shadow-[2px_2px_0_#090909] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                        style={{ background: social.bg }}
                      >
                        <social.icon className="w-4 h-4 text-white" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Download CV */}
                <a
                  href="/resume/Najish_Anjum_Resume.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-[3px] border-[#090909] shadow-[4px_4px_0_#090909] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#090909] transition-all w-fit"
                  style={{ background: "#090909", color: "#FFD21C" }}
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>

              {/* Right: form */}
              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5B5B5B] mb-1.5" htmlFor="contact-name">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="Najish Anjum"
                      className={inputClass("name")}
                      style={{ background: "#FAF8F3", color: "#090909" }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5B5B5B] mb-1.5" htmlFor="contact-email">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="hello@example.com"
                      className={inputClass("email")}
                      style={{ background: "#FAF8F3", color: "#090909" }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5B5B5B] mb-1.5" htmlFor="contact-message">
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="Let's build something amazing together..."
                      rows={5}
                      className={inputClass("message")}
                      style={{ background: "#FAF8F3", color: "#090909" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 font-black text-sm rounded-xl border-[3px] border-[#090909] shadow-[5px_5px_0_#090909] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_#090909] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none disabled:opacity-60 disabled:pointer-events-none"
                    style={{ background: "#FF3D83", color: "#fff" }}
                  >
                    <Send className="w-4 h-4" />
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
