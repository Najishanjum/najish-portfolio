import { motion } from "framer-motion";
import { Code2, Sparkles, Trophy, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Full Stack Developer",
    desc: "Proficient in React, Django, and modern web technologies",
    color: "#FFD21C",
  },
  {
    icon: Sparkles,
    label: "AI / ML Enthusiast",
    desc: "Building intelligent systems with TensorFlow and Python",
    color: "#7557F7",
  },
  {
    icon: Trophy,
    label: "Hackathon Winner",
    desc: "Multiple hackathon wins across national & international events",
    color: "#FF3D83",
  },
  {
    icon: Users,
    label: "Community Builder",
    desc: "Founder & Team Lead of Team ILM Tech",
    color: "#35D04F",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-8" style={{ background: "#FAF8F3" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="nsha-section-eyebrow">Who I am</p>
          <h2 className="nsha-section-title">
            About <span style={{ color: "#7557F7" }}>Me</span>
          </h2>
          <div
            className="mt-4 h-1.5 w-20 rounded-full border-[2px] border-[#090909]"
            style={{ background: "#FFD21C" }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Profile visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              {/* Shadow card */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-[3px] border-[#090909]"
                style={{ background: "#FF3D83" }}
              />
              {/* Yellow accent circle */}
              <div
                className="absolute -top-5 -left-5 w-16 h-16 rounded-full border-[3px] border-[#090909] z-10"
                style={{ background: "#FFD21C" }}
              />
              {/* Main photo */}
              <div
                className="relative w-56 h-64 sm:w-72 sm:h-80 rounded-2xl border-[3px] border-[#090909] overflow-hidden"
                style={{ boxShadow: "7px 7px 0 #090909", zIndex: 2 }}
              >
                <img
                  src="/images/najish-profile.jpeg"
                  alt="Najish Anjum"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Purple accent shape */}
              <div
                className="absolute -bottom-8 -left-6 w-12 h-20 rounded-xl border-[2px] border-[#090909] z-0"
                style={{ background: "#7557F7" }}
              />
            </div>
          </motion.div>

          {/* Right: Text + highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-8"
          >
            {/* About text */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed" style={{ color: "#5B5B5B", fontWeight: 500 }}>
                I'm <span className="font-bold text-[#090909]">Najish Anjum</span>, a{" "}
                <span className="font-bold" style={{ color: "#7557F7" }}>B.Tech student in Computer Science (AI & ML)</span>{" "}
                with a deep passion for innovation, problem-solving, and impactful technology. My journey in tech
                has always been fueled by curiosity and a drive to turn creative ideas into intelligent, real-world solutions.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#5B5B5B", fontWeight: 500 }}>
                As the{" "}
                <span className="font-bold text-[#090909]">Founder & Team Lead of Team ILM Tech</span>, I've led and
                collaborated on multiple AI-driven and full-stack projects, pushing boundaries across web
                development, machine learning, and intelligent automation.
              </p>
            </div>

            {/* Role highlight badges */}
            <div className="flex flex-wrap gap-3">
              {["B.Tech AI/ML", "Full Stack Dev", "Hackathon Enthusiast", "Open Source Contributor"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 font-bold text-sm border-[2px] border-[#090909] rounded-lg shadow-[3px_3px_0_#090909]"
                  style={{ background: "#090909", color: "#FFD21C" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Highlight cards grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-4 p-5 rounded-2xl border-[3px] border-[#090909] shadow-[5px_5px_0_#090909] transition-all duration-200 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0_#090909] cursor-default"
                  style={{ background: "#FAF8F3" }}
                >
                  <div
                    className="w-11 h-11 flex-shrink-0 rounded-xl border-[2px] border-[#090909] flex items-center justify-center"
                    style={{ background: item.color }}
                  >
                    <item.icon className="w-5 h-5 text-[#090909]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#090909] mb-1" style={{ letterSpacing: "-0.01em" }}>
                      {item.label}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: "#5B5B5B" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
