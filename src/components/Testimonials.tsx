import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, MessageCircle, Repeat2, Share, BadgeCheck } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Tweet = {
  name: string;
  handle: string;
  verified?: boolean;
  date: string;
  content: string;
  likes: string;
  retweets: string;
  replies: string;
  gradient: string;
  avatar?: string;
};

// DiceBear-generated illustrated avatars (deterministic by seed = handle)
const avatarFor = (handle: string) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(handle)}&backgroundType=gradientLinear&backgroundColor=0ea5e9,8b5cf6,ec4899,10b981,f59e0b`;


const tweets: Tweet[] = [
  {
    name: "Md Moinuddin",
    handle: "moinuddin_dev",
    verified: true,
    date: "2h",
    content:
      "Just shipped a project with @najishanjum — clean UI, blazing perf, zero drama. The man codes like he's debugging the matrix. 10/10 would hire again. 🔥",
    likes: "2.4K",
    retweets: "312",
    replies: "48",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    name: "Raj Sen",
    handle: "rajsen_builds",
    verified: true,
    date: "5h",
    content:
      "Najish built my entire SaaS landing page in 3 days. Smooth animations, responsive AF, and the dark mode? *chef's kiss* 👨‍🍳💋",
    likes: "1.8K",
    retweets: "204",
    replies: "31",
    gradient: "from-neon-purple to-neon-pink",
  },
  {
    name: "Harsh Dubey",
    handle: "harshcodes",
    date: "1d",
    content:
      "Bro really took my Figma → production in 48 hours. Communication on point, code is clean, and the vibes are immaculate. @najishanjum is built different.",
    likes: "956",
    retweets: "142",
    replies: "22",
    gradient: "from-neon-green to-neon-cyan",
  },
  {
    name: "Shahbaz Raza",
    handle: "shahbaz_raza",
    verified: true,
    date: "2d",
    content:
      "Working with @najishanjum feels illegal. How does one person ship full-stack apps faster than my coffee gets cold? ☕️ Premium quality, zero BS.",
    likes: "3.1K",
    retweets: "421",
    replies: "67",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    name: "Hassan",
    handle: "hassan_xyz",
    date: "3d",
    content:
      "Najish delivered my dashboard 2 days early. EARLY. In 2026. That's not a developer, that's a wizard. 🧙‍♂️",
    likes: "1.2K",
    retweets: "189",
    replies: "27",
    gradient: "from-neon-pink to-neon-purple",
  },
  {
    name: "Wazid",
    handle: "wazid_codes",
    verified: true,
    date: "4d",
    content:
      "Frontend ✅ Backend ✅ Automation ✅ AI integrations ✅ Honestly @najishanjum is a one-man engineering team. Insane talent.",
    likes: "2.7K",
    retweets: "356",
    replies: "54",
    gradient: "from-neon-cyan to-neon-green",
  },
  {
    name: "Mohit Chakole",
    handle: "mohit_dev",
    date: "5d",
    content:
      "Hired @najishanjum for a 1-week gig. Got the project + 3 bonus features + animations I didn't even ask for. This man overdelivers like it's his religion. 🙏",
    likes: "1.5K",
    retweets: "231",
    replies: "39",
    gradient: "from-neon-purple to-neon-blue",
  },
  {
    name: "Abhishikth",
    handle: "abhishikth_b",
    verified: true,
    date: "1w",
    content:
      "Idea → Design → Production in record time. @najishanjum reads requirements like he wrote them himself. Genuinely the best dev experience I've had. 🚀",
    likes: "2.0K",
    retweets: "278",
    replies: "44",
    gradient: "from-neon-green to-neon-blue",
  },
  {
    name: "Saniya",
    handle: "saniya_designs",
    date: "1w",
    content:
      "As a designer, I'm picky. @najishanjum implemented my Figma pixel-perfect AND added micro-interactions I didn't even spec. He just *gets* it. 💎",
    likes: "1.9K",
    retweets: "247",
    replies: "36",
    gradient: "from-neon-pink to-neon-cyan",
  },
];

// Convert relative date (e.g. "2h", "1d", "1w") into a full timestamp string
const fullTimestamp = (relative: string): string => {
  const now = new Date();
  const match = relative.match(/^(\d+)([hdw])$/);
  if (match) {
    const n = parseInt(match[1], 10);
    const unit = match[2];
    const ms = unit === "h" ? n * 3600e3 : unit === "d" ? n * 86400e3 : n * 7 * 86400e3;
    now.setTime(now.getTime() - ms);
  }
  const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
  const date = now.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  return `${time} · ${date}`;
};

const TweetCard = ({ tweet, onOpen }: { tweet: Tweet; onOpen: (t: Tweet) => void }) => (
  <button
    type="button"
    onClick={() => onOpen(tweet)}
    className="group relative flex-shrink-0 w-[340px] md:w-[400px] p-5 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/40 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.4)] text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
  >
    {/* Subtle gradient glow on hover */}
    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tweet.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500 pointer-events-none`} />

    {/* Header */}
    <div className="flex items-start justify-between mb-3 relative">
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${tweet.gradient} flex items-center justify-center text-background font-bold text-base shadow-lg ring-2 ring-background`}>
          {tweet.name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-bold text-foreground text-sm leading-tight">{tweet.name}</span>
            {tweet.verified && (
              <BadgeCheck className="w-4 h-4 text-neon-cyan fill-neon-cyan/20" />
            )}
          </div>
          <span className="text-muted-foreground text-xs">@{tweet.handle} · {tweet.date}</span>
        </div>
      </div>
      {/* X logo */}
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-foreground/80" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </div>

    {/* Content */}
    <p className="text-foreground/90 leading-relaxed text-[15px] mb-4 relative line-clamp-4">
      {tweet.content}
    </p>

    {/* Footer actions */}
    <div className="flex items-center justify-between text-muted-foreground text-xs pt-3 border-t border-border/30 relative">
      <div className="flex items-center gap-1.5 hover:text-neon-blue transition-colors">
        <MessageCircle className="w-4 h-4" />
        <span>{tweet.replies}</span>
      </div>
      <div className="flex items-center gap-1.5 hover:text-neon-green transition-colors">
        <Repeat2 className="w-4 h-4" />
        <span>{tweet.retweets}</span>
      </div>
      <div className="flex items-center gap-1.5 hover:text-neon-pink transition-colors">
        <Heart className="w-4 h-4" />
        <span>{tweet.likes}</span>
      </div>
      <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
        <Share className="w-4 h-4" />
      </div>
    </div>
  </button>
);

const TweetModal = ({ tweet, onClose }: { tweet: Tweet | null; onClose: () => void }) => (
  <Dialog open={!!tweet} onOpenChange={(o) => !o && onClose()}>
    <DialogContent className="max-w-xl bg-card/95 backdrop-blur-2xl border border-border/60 p-0 overflow-hidden">
      {tweet && (
        <div className="relative">
          {/* Gradient header glow */}
          <div className={`absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br ${tweet.gradient} opacity-20 blur-3xl pointer-events-none`} />
          <div className={`absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-br ${tweet.gradient} opacity-10 blur-3xl pointer-events-none`} />

          <div className="relative p-7">
            {/* X logo */}
            <div className="flex justify-end mb-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-foreground/80" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>

            {/* Header — enlarged avatar */}
            <div className="flex items-center gap-4 mb-5">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${tweet.gradient} flex items-center justify-center text-background font-bold text-3xl shadow-xl ring-4 ring-background`}>
                {tweet.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-foreground text-lg leading-tight">{tweet.name}</span>
                  {tweet.verified && (
                    <BadgeCheck className="w-5 h-5 text-neon-cyan fill-neon-cyan/20" />
                  )}
                </div>
                <span className="text-muted-foreground text-sm">@{tweet.handle}</span>
              </div>
            </div>

            {/* Full content */}
            <p className="text-foreground text-xl leading-relaxed mb-5 whitespace-pre-line">
              {tweet.content}
            </p>

            {/* Full timestamp */}
            <div className="text-muted-foreground text-sm pb-4 border-b border-border/40">
              {fullTimestamp(tweet.date)}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 py-4 border-b border-border/40 text-sm">
              <div><span className="font-bold text-foreground">{tweet.retweets}</span> <span className="text-muted-foreground">Reposts</span></div>
              <div><span className="font-bold text-foreground">{tweet.likes}</span> <span className="text-muted-foreground">Likes</span></div>
              <div><span className="font-bold text-foreground">{tweet.replies}</span> <span className="text-muted-foreground">Replies</span></div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-around pt-4 text-muted-foreground">
              <button className="flex items-center gap-2 hover:text-neon-blue transition-colors">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 hover:text-neon-green transition-colors">
                <Repeat2 className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 hover:text-neon-pink transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </DialogContent>
  </Dialog>
);


export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Tweet | null>(null);

  // Split into two rows for opposite-direction marquees
  const row1 = tweets.slice(0, 5);
  const row2 = tweets.slice(4).concat(tweets.slice(0, 4));
  const dup1 = [...row1, ...row1];
  const dup2 = [...row2, ...row2];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Live from X
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">What People Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real reactions from clients & collaborators across the timeline
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative space-y-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1 */}
        <div className="flex gap-5 animate-marquee-slow hover:[animation-play-state:paused]">
          {dup1.map((t, i) => (
            <TweetCard key={`r1-${t.handle}-${i}`} tweet={t} onOpen={setSelected} />
          ))}
        </div>

        {/* Row 2 — reverse direction */}
        <div className="flex gap-5 animate-marquee-reverse-slow hover:[animation-play-state:paused]">
          {dup2.map((t, i) => (
            <TweetCard key={`r2-${t.handle}-${i}`} tweet={t} onOpen={setSelected} />
          ))}
        </div>
      </motion.div>

      <TweetModal tweet={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
