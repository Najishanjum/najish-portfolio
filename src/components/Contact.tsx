import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Send, Mail, Linkedin, Github, Globe, Download, Twitter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/najishanjum", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/najishanjum", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/najishanjum", label: "X" },
  { icon: Globe, href: "#", label: "Portfolio" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  return (
    <section
      id="contact"
      className="py-20 px-4 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(hsl(320 100% 40% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(320 100% 40% / 0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-12 text-3xl opacity-25 pointer-events-none select-none hidden md:block"
      >
        🥷
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-10 text-2xl opacity-20 pointer-events-none select-none hidden md:block"
      >
        📧
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Yellow container card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Shadow layer */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-[hsl(320,100%,40%)] border-[3px] border-[hsl(220,25%,6%)]" />

          {/* Main card */}
          <div className="relative rounded-3xl border-[3px] border-[hsl(220,25%,6%)] bg-[hsl(50,100%,62%)] overflow-hidden shadow-xl">
            {/* Header */}
            <div className="px-8 pt-8 pb-4 flex items-center gap-3">
              <span className="text-3xl">🥷</span>
              <motion.h2
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-3xl md:text-4xl font-bold font-mono text-[hsl(220,25%,6%)]"
                style={{
                  textShadow: "0 0 15px hsl(320 100% 65% / 0.3)",
                }}
              >
                CONTACT<span className="text-[hsl(320,100%,45%)]">.EXE</span>
              </motion.h2>
            </div>

            {/* Two column layout */}
            <div className="grid md:grid-cols-5 gap-6 px-8 pb-8">
              {/* LEFT SIDE - 2 cols */}
              <div className="md:col-span-2 flex flex-col justify-between space-y-6">
                {/* Click to email */}
                <div className="space-y-4">
                  <a
                    href="mailto:najishanjum058@gmail.com"
                    className="group flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 rounded-full bg-[hsl(220,25%,6%)] flex items-center justify-center group-hover:shadow-[0_0_15px_hsl(320,100%,65%/0.5)] transition-shadow">
                      <Mail className="w-5 h-5 text-[hsl(50,100%,60%)]" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[hsl(220,25%,6%/0.6)] uppercase tracking-wider">
                        Click to Email
                      </p>
                      <p className="text-sm font-mono font-bold text-[hsl(220,25%,6%)]">
                        najishanjum058@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Dotted arrow decoration */}
                  <div className="flex items-center gap-1 pl-6">
                    {[...Array(8)].map((_, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[hsl(220,25%,6%/0.3)]"
                      />
                    ))}
                    <span className="text-[hsl(220,25%,6%/0.4)]">→</span>
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-full border-2 border-[hsl(320,100%,50%)] bg-[hsl(220,25%,6%)] flex items-center justify-center hover:shadow-[0_0_15px_hsl(320,100%,65%/0.5)] transition-shadow"
                    >
                      <social.icon className="w-4 h-4 text-[hsl(320,100%,70%)]" />
                    </motion.a>
                  ))}
                </div>

                {/* Download CV */}
                <motion.a
                  href="/resume/Najish_Anjum_Resume.pdf"
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(220,25%,6%)] text-[hsl(50,100%,60%)] font-mono font-bold text-sm border-2 border-[hsl(220,25%,6%)] hover:shadow-[0_0_20px_hsl(50,100%,60%/0.4)] transition-shadow w-fit"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              </div>

              {/* RIGHT SIDE - 3 cols - Contact Form */}
              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-xl bg-[hsl(0,0%,95%)] border-[3px] text-[hsl(220,25%,6%)] placeholder:text-[hsl(220,25%,6%/0.4)] font-mono text-sm outline-none transition-all ${
                        focused === "name"
                          ? "border-[hsl(320,100%,50%)] shadow-[inset_0_2px_6px_hsl(320,100%,65%/0.15)]"
                          : "border-[hsl(220,25%,6%)] shadow-[inset_0_2px_4px_hsl(0,0%,0%/0.08)]"
                      }`}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-xl bg-[hsl(0,0%,95%)] border-[3px] text-[hsl(220,25%,6%)] placeholder:text-[hsl(220,25%,6%/0.4)] font-mono text-sm outline-none transition-all ${
                        focused === "email"
                          ? "border-[hsl(320,100%,50%)] shadow-[inset_0_2px_6px_hsl(320,100%,65%/0.15)]"
                          : "border-[hsl(220,25%,6%)] shadow-[inset_0_2px_4px_hsl(0,0%,0%/0.08)]"
                      }`}
                    />
                  </div>

                  <div>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      required
                      placeholder="Your Message"
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl bg-[hsl(0,0%,95%)] border-[3px] text-[hsl(220,25%,6%)] placeholder:text-[hsl(220,25%,6%/0.4)] font-mono text-sm outline-none resize-none transition-all ${
                        focused === "message"
                          ? "border-[hsl(320,100%,50%)] shadow-[inset_0_2px_6px_hsl(320,100%,65%/0.15)]"
                          : "border-[hsl(220,25%,6%)] shadow-[inset_0_2px_4px_hsl(0,0%,0%/0.08)]"
                      }`}
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-3 rounded-full bg-gradient-to-r from-[hsl(320,100%,50%)] to-[hsl(320,80%,60%)] text-white font-mono font-bold text-sm border-[3px] border-[hsl(220,25%,6%)] hover:shadow-[0_0_25px_hsl(320,100%,65%/0.5)] transition-all active:scale-95 disabled:opacity-60"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
