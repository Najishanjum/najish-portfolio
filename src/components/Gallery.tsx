import { motion } from "framer-motion";

// Import gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery25 from "@/assets/gallery-25.jpg";
import gallery27 from "@/assets/gallery-27.jpg";
import gallery28 from "@/assets/gallery-28.jpg";
import gallery29 from "@/assets/gallery-29.jpg";
import gallery30 from "@/assets/gallery-30.jpg";
import gallery31 from "@/assets/gallery-31.jpg";
import gallery32 from "@/assets/gallery-32.jpg";
import gallery33 from "@/assets/gallery-33.jpg";
import gallery34 from "@/assets/gallery-34.jpg";
import gallery35 from "@/assets/gallery-35.jpg";
import gallery36 from "@/assets/gallery-36.jpg";
import gallery37 from "@/assets/gallery-37.jpg";
import gallery38 from "@/assets/gallery-38.jpg";
import gallery39 from "@/assets/gallery-39.jpg";
import gallery40 from "@/assets/gallery-40.jpg";
import gallery41 from "@/assets/gallery-41.jpg";
import gallery42 from "@/assets/gallery-42.jpg";
import gallery43 from "@/assets/gallery-43.jpg";
import gallery44 from "@/assets/gallery-44.jpg";
import gallery45 from "@/assets/gallery-45.jpg";
import gallery46 from "@/assets/gallery-46.jpg";
import gallery47 from "@/assets/gallery-47.jpg";
import gallery48 from "@/assets/gallery-48.jpg";
import gallery49 from "@/assets/gallery-49.jpg";
import gallery50 from "@/assets/gallery-50.jpg";
import gallery51 from "@/assets/gallery-51.jpg";
import gallery52 from "@/assets/gallery-52.jpg";
import gallery53 from "@/assets/gallery-53.jpg";
import gallery54 from "@/assets/gallery-54.jpg";
import gallery55 from "@/assets/gallery-55.jpg";
import gallery56 from "@/assets/gallery-56.jpg";
import gallery57 from "@/assets/gallery-57.jpg";
import gallery58 from "@/assets/gallery-58.jpg";
import galleryMonad1 from "@/assets/gallery-monad-blitz-1.jpg";
import galleryMonad2 from "@/assets/gallery-monad-blitz-2.jpg";
import galleryMonad3 from "@/assets/gallery-monad-blitz-3.jpg";
import galleryNew1 from "@/assets/gallery-new-1.jpg";
import galleryNew2 from "@/assets/gallery-new-2.jpg";
import galleryNew3 from "@/assets/gallery-new-3.jpg";
import galleryNew4 from "@/assets/gallery-new-4.jpg";
import galleryNew5 from "@/assets/gallery-new-5.jpg";
import galleryNew6 from "@/assets/gallery-new-6.jpg";
import galleryNew7 from "@/assets/gallery-new-7.jpg";
import galleryNew8 from "@/assets/gallery-new-8.jpg";
import galleryNew9 from "@/assets/gallery-new-9.jpg";
import galleryNew10 from "@/assets/gallery-new-10.jpg";

type Img = { src: string; label: string };

const allImages: Img[] = [
  { src: galleryNew1, label: "Solana Builder Pose" },
  { src: galleryNew2, label: "Late Night Coding Session" },
  { src: galleryNew3, label: "Deep Work Mode" },
  { src: galleryNew4, label: "In the Zone" },
  { src: galleryNew5, label: "Frontier Hackathon Squad" },
  { src: galleryNew6, label: "Hacker's Workstation" },
  { src: galleryNew7, label: "Builder Vibes" },
  { src: galleryNew8, label: "Builder Community Group" },
  { src: galleryNew9, label: "Frontier Hackathon Hall" },
  { src: galleryNew10, label: "Hackathon Conference Room" },
  { src: galleryMonad1, label: "Monad Blitz Stage" },
  { src: galleryMonad2, label: "Monad Blitz Duo" },
  { src: galleryMonad3, label: "Monad Event Pose" },
  { src: gallery50, label: "CodecraX Group Photo" },
  { src: gallery51, label: "With a Builder" },
  { src: gallery52, label: "CodecraX Banner" },
  { src: gallery53, label: "CodecraX Pose" },
  { src: gallery54, label: "Workshop Session" },
  { src: gallery55, label: "CodecraX Audience" },
  { src: gallery56, label: "Deep Focus Coding" },
  { src: gallery57, label: "Community Builder Night Duo" },
  { src: gallery58, label: "MetaMask Builder Night" },
  { src: gallery1, label: "Conference Session" },
  { src: gallery2, label: "Make Progress" },
  { src: gallery3, label: "Event Moments" },
  { src: gallery4, label: "Tech Talk" },
  { src: gallery5, label: "Community Meetup" },
  { src: gallery6, label: "Team Discussion" },
  { src: gallery7, label: "Coding Session" },
  { src: gallery8, label: "Networking" },
  { src: gallery9, label: "IIT Bombay" },
  { src: gallery10, label: "Story Protocol" },
  { src: gallery11, label: "Team IlmTech" },
  { src: gallery12, label: "Duo Moment" },
  { src: gallery14, label: "Hackathon Grind" },
  { src: gallery15, label: "Friends at Event" },
  { src: gallery16, label: "Chandigarh University" },
  { src: gallery17, label: "CU Campus" },
  { src: gallery18, label: "AI Founders Hackathon" },
  { src: gallery19, label: "Setup Station" },
  { src: gallery20, label: "Team Selfie" },
  { src: gallery21, label: "Seminar Hall" },
  { src: gallery22, label: "Gyan Ganga Lab" },
  { src: gallery23, label: "Thoughtful Moment" },
  { src: gallery25, label: "Hackathon Vibes" },
  { src: gallery27, label: "Agentic AI Hackathon" },
  { src: gallery28, label: "Team Gathering" },
  { src: gallery29, label: "Friends Meetup" },
  { src: gallery30, label: "P2P Workshop" },
  { src: gallery31, label: "With a Friend" },
  { src: gallery32, label: "Crypto Event Collage" },
  { src: gallery33, label: "Freedom Through Crypto" },
  { src: gallery34, label: "Community Builder Night" },
  { src: gallery35, label: "Squad Goals" },
  { src: gallery36, label: "Working Session" },
  { src: gallery37, label: "Thumbs Up" },
  { src: gallery38, label: "MetaMask Meetup" },
  { src: gallery39, label: "Builder Vibes" },
  { src: gallery40, label: "Selfie Time" },
  { src: gallery41, label: "Thumbs Up Duo" },
  { src: gallery42, label: "CodecraX Web3" },
  { src: gallery43, label: "CodecraX Pose" },
  { src: gallery44, label: "CodecraX Close" },
  { src: gallery45, label: "CodecraX Workshop" },
  { src: gallery46, label: "Deep Focus" },
  { src: gallery47, label: "Speaker Session" },
  { src: gallery48, label: "Group Photo" },
  { src: gallery49, label: "Builder Night Duo" },
];

// Split into 3 rows
const splitRows = (arr: Img[], rows: number): Img[][] => {
  const out: Img[][] = Array.from({ length: rows }, () => []);
  arr.forEach((it, i) => out[i % rows].push(it));
  return out;
};

const rows = splitRows(allImages, 3);

interface MarqueeRowProps {
  images: Img[];
  duration: number;
  reverse?: boolean;
  height: string;
}

const MarqueeRow = ({ images, duration, reverse, height }: MarqueeRowProps) => {
  const doubled = [...images, ...images];
  return (
    <div className="group relative overflow-hidden py-3">
      <div
        className="flex w-max gap-5"
        style={{
          animation: `${reverse ? "marqueeReverse" : "marqueeX"} ${duration}s linear infinite`,
          willChange: "transform",
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className={`relative ${height} flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.06] hover:border-primary/60 hover:shadow-[0_0_40px_hsl(var(--neon-cyan)/0.5)] hover:z-10`}
          >
            <img
              src={img.src}
              alt={img.label}
              loading="lazy"
              className="h-full w-auto object-cover"
              draggable={false}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/95 via-background/60 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
              <p className="truncate text-xs font-medium text-foreground">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .group:hover > div { animation-play-state: paused !important; }
        @keyframes marqueeX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export const Gallery = () => {
  return (
    <section
      className="relative overflow-hidden py-20"
      id="gallery"
    >
      {/* Futuristic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(220_25%_4%)] to-background" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, hsl(var(--neon-cyan) / 0.15), transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--neon-purple) / 0.15), transparent 50%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-neon-cyan to-primary bg-clip-text text-transparent">
              Moments & Memories
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A visual journey through conferences, hackathons, and community events
          </p>
        </motion.div>
      </div>

      {/* Marquee rows with edge fade mask */}
      <div
        className="relative z-10"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <MarqueeRow images={rows[0]} duration={70} height="h-44 md:h-52" />
        <MarqueeRow images={rows[1]} duration={90} reverse height="h-36 md:h-44" />
        <MarqueeRow images={rows[2]} duration={80} height="h-44 md:h-52" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
