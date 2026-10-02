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
  accent: string;
  avatar?: string;
};

const avatarFor = (handle: string) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(handle)}&backgroundType=gradientLinear&backgroundColor=0ea5e9,8b5cf6,ec4899,10b981,f59e0b`;

const tweets: Tweet[] = [
  {
    name: "Md Moinuddin",
    handle: "moinuddin_dev",
    verified: true,
    date: "2h",
    content: "Just shipped a project with @najishanjum — clean UI, blazing perf, zero drama. The man codes like he's debugging the matrix. 10/10 would hire again. 🔥",
    likes: "2.4K",
    retweets: "312",
    replies: "48",
    accent: "#FFD21C",
  },
  {
    name: "Raj Sen",
    handle: "rajsen_builds",
    verified: true,
    date: "5h",
    content: "Najish built my entire SaaS landing page in 3 days. Smooth animations, responsive AF, and the dark mode? *chef's kiss* 👨‍🍳💋",
    likes: "1.8K",
    retweets: "204",
    replies: "31",
    accent: "#FF3D83",
  },
  {
    name: "Harsh Dubey",
    handle: "harshcodes",
    date: "1d",
    content: "Bro really took my Figma → production in 48 hours. Communication on point, code is clean, and the vibes are immaculate. @najishanjum is built different.",
    likes: "956",
    retweets: "142",
    replies: "22",
    accent: "#7557F7",
  },
  {
    name: "Shahbaz Raza",
    handle: "shahbaz_raza",
    verified: true,
    date: "2d",
    content: "Working with @najishanjum feels illegal. How does one person ship full-stack apps faster than my coffee gets cold? ☕️ Premium quality, zero BS.",
    likes: "3.1K",
    retweets: "421",
    replies: "67",
    accent: "#35D04F",
  },
  {
    name: "Hassan",
    handle: "hassan_xyz",
    date: "3d",
    content: "Najish delivered my dashboard 2 days early. EARLY. In 2026. That's not a developer, that's a wizard. 🧙‍♂️",
    likes: "1.2K",
    retweets: "189",
    replies: "27",
    accent: "#B7E83B",
  },
  {
    name: "Wazid",
    handle: "wazid_codes",
    verified: true,
    date: "4d",
    content: "Frontend ✅ Backend ✅ Automation ✅ AI integrations ✅ Honestly @najishanjum is a one-man engineering team. Insane talent.",
    likes: "2.7K",
    retweets: "356",
    replies: "54",
    accent: "#FFD21C",
  },
  {
    name: "Mohit Chakole",
    handle: "mohit_dev",
    date: "5d",
    content: "Hired @najishanjum for a 1-week gig. Got the project + 3 bonus features + animations I didn't even ask for. This man overdelivers like it's his religion. 🙏",
    likes: "1.5K",
    retweets: "231",
    replies: "39",
    accent: "#FF3D83",
  },
  {
    name: "Abhishikth",
    handle: "abhishikth_b",
    verified: true,
    date: "1w",
    content: "Idea → Design → Production in record time. @najishanjum reads requirements like he wrote them himself. Genuinely the best dev experience I've had. 🚀",
    likes: "2.0K",
    retweets: "278",
    replies: "44",
    accent: "#7557F7",
  },
  {
    name: "Saniya",
    handle: "saniya_designs",
    date: "1w",
    content: "As a designer, I'm picky. @najishanjum implemented my Figma pixel-perfect AND added micro-interactions I didn't even spec. He just *gets* it. 💎",
    likes: "1.9K",
    retweets: "247",
    replies: "36",
    accent: "#35D04F",
  },
];

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
    className="group relative flex-shrink-0 w-[320px] md:w-[380px] text-left cursor-pointer focus:outline-none"
    style={{ background: "none", border: "none", padding: 0 }}
  >
    {/* Offset shadow */}
    <div
      className="absolute inset-0 translate-x-[5px] translate-y-[5px] rounded-2xl border-[2px] border-[#090909]"
      style={{ background: tweet.accent }}
    />
    {/* Card */}
    <div
      className="relative rounded-2xl border-[3px] border-[#090909] p-5 transition-transform duration-200 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"
      style={{ background: "#FAF8F3" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border-[2px] border-[#090909]" style={{ boxShadow: `2px 2px 0 ${tweet.accent}` }}>
            <AvatarImage src={tweet.avatar ?? avatarFor(tweet.handle)} alt={tweet.name} />
            <AvatarFallback style={{ background: tweet.accent, color: "#090909", fontWeight: 800 }}>
              {tweet.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-sm text-[#090909]">{tweet.name}</span>
              {tweet.verified && <BadgeCheck className="w-4 h-4" style={{ color: tweet.accent }} />}
            </div>
            <span className="text-xs font-medium text-[#5B5B5B]">@{tweet.handle} · {tweet.date}</span>
          </div>
        </div>
        {/* X logo */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#090909]" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed mb-4 text-[#090909] line-clamp-4">
        {tweet.content}
      </p>

      {/* Footer */}
      <div
        className="flex items-center justify-between text-xs font-semibold pt-3 border-t-[2px] border-[#090909]/10"
        style={{ color: "#5B5B5B" }}
      >
        <span className="flex items-center gap-1 hover:text-[#090909] transition-colors">
          <MessageCircle className="w-3.5 h-3.5" /> {tweet.replies}
        </span>
        <span className="flex items-center gap-1 hover:text-[#090909] transition-colors">
          <Repeat2 className="w-3.5 h-3.5" /> {tweet.retweets}
        </span>
        <span className="flex items-center gap-1 hover:text-[#FF3D83] transition-colors">
          <Heart className="w-3.5 h-3.5" /> {tweet.likes}
        </span>
        <span className="hover:text-[#090909] transition-colors">
          <Share className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  </button>
);

const TweetModal = ({ tweet, onClose }: { tweet: Tweet | null; onClose: () => void }) => (
  <Dialog open={!!tweet} onOpenChange={(o) => !o && onClose()}>
    <DialogContent
      className="max-w-xl p-0 overflow-hidden border-[3px] border-[#090909]"
      style={{ boxShadow: "8px 8px 0 #090909", borderRadius: "20px", background: "#FAF8F3" }}
    >
      {tweet && (
        <div className="p-7">
          {/* Accent bar */}
          <div
            className="h-1.5 -mx-7 -mt-7 mb-6 border-b-[3px] border-[#090909]"
            style={{ background: tweet.accent }}
          />

          {/* Header */}
          <div className="flex items-center gap-4 mb-5">
            <Avatar className="w-16 h-16 border-[2px] border-[#090909]" style={{ boxShadow: `3px 3px 0 ${tweet.accent}` }}>
              <AvatarImage src={tweet.avatar ?? avatarFor(tweet.handle)} alt={tweet.name} />
              <AvatarFallback style={{ background: tweet.accent, color: "#090909", fontWeight: 800, fontSize: 24 }}>
                {tweet.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg text-[#090909]">{tweet.name}</span>
                {tweet.verified && <BadgeCheck className="w-5 h-5" style={{ color: tweet.accent }} />}
              </div>
              <span className="text-sm font-medium text-[#5B5B5B]">@{tweet.handle}</span>
            </div>
            <div className="ml-auto">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#090909]" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-5 text-[#090909] whitespace-pre-line">
            {tweet.content}
          </p>

          <div className="text-sm font-medium pb-4 border-b-[2px] border-[#090909]/10" style={{ color: "#5B5B5B" }}>
            {fullTimestamp(tweet.date)}
          </div>

          <div className="flex items-center gap-6 py-4 border-b-[2px] border-[#090909]/10 text-sm font-bold">
            <div><span className="text-[#090909]">{tweet.retweets}</span> <span style={{ color: "#5B5B5B" }}>Reposts</span></div>
            <div><span className="text-[#090909]">{tweet.likes}</span> <span style={{ color: "#5B5B5B" }}>Likes</span></div>
            <div><span className="text-[#090909]">{tweet.replies}</span> <span style={{ color: "#5B5B5B" }}>Replies</span></div>
          </div>

          <div className="flex items-center justify-around pt-4" style={{ color: "#5B5B5B" }}>
            <button className="hover:text-[#090909] transition-colors"><MessageCircle className="w-5 h-5" /></button>
            <button className="hover:text-[#090909] transition-colors"><Repeat2 className="w-5 h-5" /></button>
            <button className="hover:text-[#FF3D83] transition-colors"><Heart className="w-5 h-5" /></button>
            <button className="hover:text-[#090909] transition-colors"><Share className="w-5 h-5" /></button>
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

  const row1 = tweets.slice(0, 5);
  const row2 = tweets.slice(4).concat(tweets.slice(0, 4));
  const dup1 = [...row1, ...row1];
  const dup2 = [...row2, ...row2];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden" style={{ background: "#FAF8F3" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border-[2px] border-[#090909] text-sm font-bold mb-4 shadow-[3px_3px_0_#090909]"
            style={{ background: "#FFD21C", color: "#090909" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Live from X
          </motion.span>
          <p className="nsha-section-eyebrow">Community voice</p>
          <h2 className="nsha-section-title">
            What People <span style={{ color: "#7557F7" }}>Say</span>
          </h2>
          <p className="mt-3 text-base font-medium" style={{ color: "#5B5B5B" }}>
            Real reactions from clients & collaborators across the timeline
          </p>
          <div
            className="mt-4 h-1.5 w-20 rounded-full border-[2px] border-[#090909]"
            style={{ background: "#7557F7" }}
          />
        </motion.div>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative space-y-5"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex gap-5 animate-marquee-slow hover:[animation-play-state:paused]">
          {dup1.map((t, i) => (
            <TweetCard key={`r1-${t.handle}-${i}`} tweet={t} onOpen={setSelected} />
          ))}
        </div>
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
