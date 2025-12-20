import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin, Users } from "lucide-react";
import techclasherBg from "@/assets/techclasher-bg.png";
import nasaBg from "@/assets/nasa-bg.png";
import paranoxBg from "@/assets/paranox-bg.png";
import kodekaleshBg from "@/assets/kodekalesh-bg.png";
import nextgenBg from "@/assets/nextgen-bg.png";

const hackathons = [
  {
    title: "The TechClasher 2025",
    organizer: "Greater Noida Institute of Technology, Delhi NCR",
    description: "Innovate. Code. Transform. Shape the Future of Technology & Defence 🚀",
    status: "Completed",
    type: "hackathon",
    date: "October 06 – 09, 2025",
    badge: "Team Lead Team ILM Tech",
    color: "from-neon-cyan to-neon-blue",
    bgImage: techclasherBg
  },
  {
    title: "NASA Space App Challenge – Jabalpur Edition",
    organizer: "NASA",
    description: "A prestigious global hackathon hosted locally in Jabalpur, where innovators develop solutions for space exploration and Earth science.",
    status: "Completed",
    type: "hackathon",
    badge: "Local Event",
    color: "from-neon-blue to-neon-purple",
    bgImage: nasaBg
  },
  {
    title: "Paranox 2.0 Hackathon",
    organizer: "TechXNinjas, Delhi NCR",
    description: "A challenging hackathon focused on solving cutting-edge technology problems using AI, ML, and blockchain.",
    status: "Completed",
    type: "hackathon",
    badge: "Recent",
    color: "from-neon-purple to-neon-pink",
    bgImage: paranoxBg
  },
  {
    title: "0 to 1 – Hack with Uttar Pradesh",
    organizer: "Chandigarh University, Uttar Pradesh (TBI & IEDC)",
    description: "A flagship founders-focused hackathon centered on agentic AI startups, where participants build AI-powered products, co-pilots, and autonomous workflows for real-world problems.",
    status: "Completed",
    type: "hackathon",
    date: "2–3 November 2025",
    badge: "Participated",
    color: "from-neon-pink to-neon-cyan"
  },
  {
    title: "CodeMatrix: Genesis Hackathon",
    organizer: "Dr. Ambedkar Institute of Technology, Kanpur",
    description: "A multi-day coding and innovation hackathon for student developers to build solutions across web development, AI/ML, automation, and problem-solving challenges.",
    status: "Completed",
    type: "hackathon",
    date: "6–8 December 2025",
    badge: "Participated",
    color: "from-neon-cyan to-neon-purple"
  },
  {
    title: "Error 404: Beyond the Limit",
    organizer: "Jai Hind College, Mumbai",
    description: "A 48-hour semi-offline innovation sprint tackling real-world challenges in software engineering, debugging, cybersecurity, and product design.",
    status: "Completed",
    type: "hackathon",
    date: "10 December 2025",
    badge: "Participated",
    color: "from-neon-blue to-neon-pink"
  },
  {
    title: "CBIT Hacktoberfest Hackathon 2025",
    organizer: "CBIT Open Source Community",
    description: "An open-source hackathon aligned with Hacktoberfest, encouraging participants to contribute to real GitHub repositories and build community-driven projects.",
    status: "Completed",
    type: "hackathon",
    date: "25 October 2025",
    badge: "Participated",
    color: "from-neon-purple to-neon-cyan"
  },
  {
    title: "Gen AI Academy 2.0 – Google Cloud Gen AI",
    organizer: "Google Cloud",
    description: "A hands-on generative AI learning program focused on building with Google Cloud's Gen AI stack, including model APIs, prompt engineering, and end-to-end app development.",
    status: "Completed",
    type: "program",
    date: "November 2025",
    badge: "Completed",
    color: "from-neon-cyan to-neon-blue"
  },
  {
    title: "Pixel Riot Hackathon",
    organizer: "Online Design & Creative Tech Hackathon",
    description: "A creativity-first hackathon themed around UI/UX, visual design, graphics, and interactive experiences for building visually striking digital products.",
    status: "Completed",
    type: "hackathon",
    date: "2025",
    badge: "Participated",
    color: "from-neon-pink to-neon-purple"
  },
  {
    title: "CodeSpark – 72 Hours Coding Challenge",
    organizer: "Siwan Engineering College, Siwan",
    description: "A high-energy coding competition where participants work for 72 hours to develop innovative software solutions.",
    status: "Completed",
    type: "competition",
    badge: "Recent",
    color: "from-neon-pink to-neon-cyan"
  },
  {
    title: "Kodekalesh Hackathon",
    organizer: "Kanpur Institute of Technology, Kanpur",
    description: "A competitive hackathon involving intense problem-solving and innovative product creation.",
    status: "Ongoing",
    type: "hackathon",
    color: "from-neon-cyan to-neon-purple",
    bgImage: kodekaleshBg
  },
  {
    title: "Next Gen Hackathon",
    organizer: "Soft Computing Research Society, New Delhi",
    description: "A hackathon focused on building the next generation of AI-based solutions for real-world problems.",
    status: "Ongoing",
    type: "hackathon",
    color: "from-neon-blue to-neon-pink",
    bgImage: nextgenBg
  }
];

export const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-primary">&gt;</span> Hackathons & Competitions
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>

          {/* Hackathons Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-6 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden"
                style={hackathon.bgImage ? {
                  backgroundImage: `linear-gradient(to bottom right, hsl(var(--background) / 0.92), hsl(var(--background) / 0.95)), url(${hackathon.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                } : {}}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                    hackathon.status === "Completed" 
                      ? "bg-primary/20 text-primary border border-primary/30" 
                      : "bg-secondary/20 text-secondary border border-secondary/30 animate-pulse"
                  }`}>
                    {hackathon.status}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${hackathon.color} flex items-center justify-center mb-4`}>
                  <Trophy className="w-6 h-6 text-background" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-mono text-foreground mb-2 pr-24">
                  {hackathon.title}
                </h3>

                {/* Organizer */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-mono">{hackathon.organizer}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {hackathon.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  {hackathon.date && (
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {hackathon.date}
                    </div>
                  )}
                  {hackathon.badge && (
                    <div className="flex items-center gap-2">
                      {hackathon.badge === "Team Lead Team ILM Tech" ? (
                        <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs font-mono text-primary">
                          <Users className="w-3 h-3" />
                          {hackathon.badge}
                        </div>
                      ) : (
                        <span className="px-2 py-1 bg-muted/50 border border-border rounded text-xs font-mono text-muted-foreground">
                          {hackathon.badge}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
          >
            <p className="text-lg font-mono text-muted-foreground">
              <span className="text-primary font-bold text-2xl">{hackathons.filter(h => h.status === "Completed").length}</span> Completed • 
              <span className="text-secondary font-bold text-2xl ml-2">{hackathons.filter(h => h.status === "Ongoing").length}</span> Ongoing
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
