import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Music, Play, Pause, SkipForward } from "lucide-react";

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

const galleryImages = [
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
];

// Floating positions for each image (30 items)
const floatingPositions = [
  { x: 5, y: 2, size: "w-48 h-32", rotate: -5 },
  { x: 75, y: 1, size: "w-40 h-56", rotate: 8 },
  { x: 40, y: 5, size: "w-44 h-36", rotate: -3 },
  { x: 15, y: 18, size: "w-52 h-40", rotate: 6 },
  { x: 60, y: 15, size: "w-36 h-48", rotate: -8 },
  { x: 85, y: 22, size: "w-44 h-32", rotate: 4 },
  { x: 30, y: 30, size: "w-40 h-52", rotate: -6 },
  { x: 70, y: 35, size: "w-48 h-36", rotate: 7 },
  { x: 5, y: 38, size: "w-36 h-44", rotate: -4 },
  { x: 50, y: 42, size: "w-44 h-40", rotate: 5 },
  { x: 20, y: 50, size: "w-42 h-48", rotate: -7 },
  { x: 80, y: 48, size: "w-38 h-44", rotate: 3 },
  { x: 10, y: 60, size: "w-40 h-52", rotate: 6 },
  { x: 65, y: 58, size: "w-44 h-36", rotate: -4 },
  { x: 35, y: 65, size: "w-48 h-40", rotate: 8 },
  { x: 88, y: 62, size: "w-36 h-48", rotate: -6 },
  { x: 55, y: 70, size: "w-42 h-44", rotate: 4 },
  { x: 8, y: 75, size: "w-44 h-38", rotate: -5 },
  { x: 75, y: 73, size: "w-40 h-50", rotate: 6 },
  { x: 42, y: 78, size: "w-46 h-36", rotate: -3 },
  { x: 22, y: 85, size: "w-38 h-48", rotate: 7 },
  { x: 60, y: 82, size: "w-44 h-42", rotate: -6 },
  { x: 5, y: 92, size: "w-48 h-44", rotate: -7 },
  { x: 48, y: 90, size: "w-42 h-50", rotate: 5 },
  { x: 80, y: 88, size: "w-40 h-48", rotate: -4 },
  { x: 25, y: 95, size: "w-44 h-40", rotate: 6 },
  { x: 65, y: 93, size: "w-46 h-44", rotate: -5 },
  { x: 10, y: 100, size: "w-42 h-52", rotate: 4 },
  { x: 50, y: 98, size: "w-48 h-38", rotate: -7 },
  { x: 85, y: 96, size: "w-40 h-46", rotate: 5 },
  { x: 30, y: 105, size: "w-44 h-36", rotate: -4 },
  { x: 70, y: 103, size: "w-42 h-48", rotate: 6 },
  { x: 15, y: 110, size: "w-48 h-40", rotate: -7 },
  { x: 55, y: 108, size: "w-40 h-44", rotate: 3 },
  { x: 80, y: 112, size: "w-46 h-38", rotate: -5 },
  { x: 25, y: 115, size: "w-44 h-50", rotate: 7 },
  { x: 60, y: 113, size: "w-42 h-42", rotate: -3 },
];

interface FloatingImageProps {
  src: string;
  label: string;
  position: { x: number; y: number; size: string; rotate: number };
  index: number;
  mouseX: number;
  mouseY: number;
}

const FloatingImage = ({ src, label, position, index, mouseX, mouseY }: FloatingImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  // Parallax effect based on mouse position
  const parallaxX = useTransform(
    () => (mouseX - 50) * (0.02 + index * 0.005)
  );
  const parallaxY = useTransform(
    () => (mouseY - 50) * (0.02 + index * 0.005)
  );

  // Floating animation duration varies by index
  const floatDuration = 4 + (index % 3) * 2;
  
  return (
    <motion.div
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        x: springX,
        y: springY,
      }}
      drag
      dragConstraints={false}
      dragElastic={0.2}
      dragMomentum={true}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ opacity: 0, scale: 0.8, rotate: position.rotate }}
      animate={{ 
        opacity: isLoaded ? 1 : 0, 
        scale: 1,
        rotate: position.rotate,
        translateX: isDragging ? 0 : [0, 8, 0, -8, 0],
        translateY: isDragging ? 0 : [0, -10, 0, 10, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.1 },
        scale: { duration: 0.5, delay: index * 0.1 },
        translateX: { duration: floatDuration, repeat: Infinity, ease: "easeInOut" },
        translateY: { duration: floatDuration + 1, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.1, zIndex: 50 }}
    >
      <motion.div
        className={`${position.size} relative overflow-hidden rounded-2xl group`}
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
      >
        {/* Glassmorphism card */}
        <div className="absolute inset-0 bg-background/20 backdrop-blur-sm border border-white/10 rounded-2xl" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-neon-cyan/30 rounded-2xl blur-xl" />
        </div>
        
        {/* Image */}
        <img
          src={src}
          alt={label}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full object-cover rounded-2xl relative z-10"
        />
        
        {/* Label overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-b-2xl z-20">
          <p className="text-xs font-medium text-foreground truncate">{label}</p>
        </div>
        
        {/* Glass border effect */}
        <div className="absolute inset-0 rounded-2xl border border-white/20 group-hover:border-primary/50 transition-colors duration-300 z-30 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

// Mini Spotify-style music widget
const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <motion.div
      className="absolute bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="bg-background/30 backdrop-blur-xl border border-white/10 rounded-2xl p-4 w-72 shadow-2xl">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-primary/20 rounded-2xl opacity-50" />
        
        <div className="relative z-10 flex items-center gap-3">
          {/* Album art placeholder */}
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Coding Vibes</p>
            <p className="text-xs text-muted-foreground truncate">Focus Playlist</p>
          </div>
          
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-6 h-6 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground"
            >
              <SkipForward className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="relative z-10 mt-3">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500 rounded-full"
              initial={{ width: "30%" }}
              animate={isPlaying ? { width: "100%" } : { width: "30%" }}
              transition={isPlaying ? { duration: 180, ease: "linear" } : { duration: 0.3 }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[10px] text-muted-foreground">1:23</span>
            <span className="text-[10px] text-muted-foreground">3:45</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  }, []);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);
  
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden"
      id="gallery"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Section header */}
      <div className="relative z-20 container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
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
      
      {/* Floating images container */}
      <div className="relative h-[2000px] md:h-[2400px] w-full">
        {galleryImages.map((image, index) => (
          <FloatingImage
            key={index}
            src={image.src}
            label={image.label}
            position={floatingPositions[index]}
            index={index}
            mouseX={mousePosition.x}
            mouseY={mousePosition.y}
          />
        ))}
      </div>
      
      {/* Music widget */}
      <MusicWidget />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
