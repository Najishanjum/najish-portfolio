import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, MessageCircle, Repeat2, Share, BadgeCheck, X } from "lucide-react";
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
  avatar?: string;
};

const avatarFor = (handle: string) =>
  `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(handle)}&backgroundType=gradientLinear&backgroundColor=246bfd,0b0d10,12151b`;

const tweets: Tweet[] = [
  {
    name: "Md Moinuddin",
    handle: "moinuddin_dev",
    verified: true,
    date: "2h",
    content: "Just shipped a project with @najishanjum — clean architecture, blazing performance, and zero overhead. Man builds with real intent. 10/10 execution.",
    likes: "2.4K",
    retweets: "312",
    replies: "48",
  },
  {
    name: "Raj Sen",
    handle: "rajsen_builds",
    verified: true,
    date: "5h",
    content: "Najish built out our entire platform frontend in record time. Smooth animations, responsive layout, and the dark editorial mode is immaculate.",
    likes: "1.8K",
    retweets: "204",
    replies: "31",
  },
  {
    name: "Harsh Dubey",
    handle: "harshcodes",
    date: "1d",
    content: "Bro took our architecture from spec to production in 48 hours. Clear communication, clean code, and solid problem-solving throughout.",
    likes: "956",
    retweets: "142",
    replies: "22",
  },
  {
    name: "Shahbaz Raza",
    handle: "shahbaz_raza",
    verified: true,
    date: "2d",
    content: "Working with @najishanjum is a breeze. Ships full-stack apps rapidly with meticulous attention to detail. Premium engineer.",
    likes: "3.1K",
    retweets: "421",
    replies: "67",
  },
  {
    name: "Hassan",
    handle: "hassan_xyz",
    date: "3d",
    content: "Najish delivered our analytics dashboard 2 days ahead of schedule. Rock solid code, zero regressions, and great technical communication.",
    likes: "1.2K",
    retweets: "189",
    replies: "27",
  },
  {
    name: "Wazid",
    handle: "wazid_codes",
    verified: true,
    date: "4d",
    content: "Frontend, backend, AI integrations, Web3 smart contracts. Honestly @najishanjum operates like a one-man technical strike team.",
    likes: "2.7K",
    retweets: "356",
    replies: "54",
  },
  {
    name: "Mohit Chakole",
    handle: "mohit_dev",
    date: "5d",
    content: "Collaborated with @najishanjum on hackathon builds. Delivers beyond expectations with creative micro-interactions and performance optimization.",
    likes: "1.5K",
    retweets: "231",
    replies: "39",
  },
  {
    name: "Abhishikth",
    handle: "abhishikth_b",
    verified: true,
    date: "1w",
    content: "Idea to production in record time. @najishanjum interprets technical requirements with precision and executes flawlessly.",
    likes: "2.0K",
    retweets: "278",
    replies: "44",
  },
  {
    name: "Saniya",
    handle: "saniya_designs",
    date: "1w",
    content: "As a designer, I am very particular about typography and layout. @najishanjum translated my designs pixel-perfect into responsive code.",
    likes: "1.9K",
    retweets: "247",
    replies: "36",
  },
];

const TweetCard = ({ tweet, onOpen }: { tweet: Tweet; onOpen: (t: Tweet) => void }) => (
  <button
    type="button"
    onClick={() => onOpen(tweet)}
    className="group relative flex-shrink-0 w-[320px] md:w-[380px] text-left cursor-pointer focus:outline-none"
  >
    <div className="rounded-[24px] bg-[#12151B] border border-[#252830] p-6 hover:border-[#246BFD] transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border border-[#252830]">
            <AvatarImage src={tweet.avatar ?? avatarFor(tweet.handle)} alt={tweet.name} />
            <AvatarFallback className="bg-[#050505] text-[#246BFD] font-display">
              {tweet.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-sans font-bold text-sm text-white group-hover:text-[#4D8DFF] transition-colors">
                {tweet.name}
              </span>
              {tweet.verified && <BadgeCheck className="w-4 h-4 text-[#246BFD]" />}
            </div>
            <span className="font-mono text-xs text-[#9A9CA3]">@{tweet.handle} · {tweet.date}</span>
          </div>
        </div>
        {/* X Logo */}
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#9A9CA3] group-hover:fill-white transition-colors" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      {/* Tweet Body */}
      <p className="text-sm leading-relaxed mb-4 text-[#F7F7F7] line-clamp-4 font-sans">
        {tweet.content}
      </p>

      {/* Metrics Footer */}
      <div className="flex items-center justify-between font-mono text-xs text-[#9A9CA3] pt-3 border-t border-[#252830]">
        <span className="flex items-center gap-1.5 hover:text-white transition-colors">
          <MessageCircle className="w-3.5 h-3.5" /> {tweet.replies}
        </span>
        <span className="flex items-center gap-1.5 hover:text-white transition-colors">
          <Repeat2 className="w-3.5 h-3.5" /> {tweet.retweets}
        </span>
        <span className="flex items-center gap-1.5 hover:text-[#246BFD] transition-colors">
          <Heart className="w-3.5 h-3.5" /> {tweet.likes}
        </span>
        <span className="hover:text-white transition-colors">
          <Share className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  </button>
);

export const Testimonials = () => {
  const [selected, setSelected] = useState<Tweet | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const row1 = tweets.slice(0, 5);
  const row2 = tweets.slice(4).concat(tweets.slice(0, 4));
  const dup1 = [...row1, ...row1];
  const dup2 = [...row2, ...row2];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 sm:py-32 relative overflow-hidden bg-[#0B0D10] text-white border-t border-[#252830]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex items-center justify-between pb-6 border-b border-[#252830] mb-8">
          <span className="editorial-eyebrow">[ 09 // COMMUNITY VOICE ]</span>
          <span className="font-mono text-xs text-[#9A9CA3] uppercase tracking-widest hidden sm:inline-block">
            PEER FEEDBACK &amp; TESTIMONIALS
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="editorial-section-title text-white">
            <span>COMMUNITY &amp;</span>
            <br />
            <span className="text-[#246BFD]">BUILDER VOICES.</span>
          </h2>
          <p className="mt-3 text-base text-[#9A9CA3] font-sans max-w-xl">
            Real feedback from collaborators, hackathon teammates, and clients across the developer ecosystem.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative space-y-6"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
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

      {/* Modal Dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent
          className="max-w-xl p-0 overflow-hidden border border-[#252830] bg-[#050505] text-white rounded-[28px]"
        >
          {selected && (
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#252830]">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border border-[#252830]">
                    <AvatarImage src={selected.avatar ?? avatarFor(selected.handle)} alt={selected.name} />
                    <AvatarFallback className="bg-[#0B0D10] text-[#246BFD] font-display">
                      {selected.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-base text-white">
                      <span>{selected.name}</span>
                      {selected.verified && <BadgeCheck className="w-4 h-4 text-[#246BFD]" />}
                    </div>
                    <span className="font-mono text-xs text-[#9A9CA3]">@{selected.handle}</span>
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed text-[#F7F7F7] font-sans">
                {selected.content}
              </p>

              <div className="pt-4 border-t border-[#252830] flex items-center justify-between font-mono text-xs text-[#9A9CA3]">
                <span>{selected.retweets} Retweets</span>
                <span className="text-[#246BFD] font-bold">{selected.likes} Likes</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
