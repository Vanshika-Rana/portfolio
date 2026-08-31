"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Menu,
  X,
  ChevronDown,
  Newspaper,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

/* ================================================================
   DATA
   ================================================================ */

type ExperienceItem = {
  company: string;
  url?: string;
  role: string;
  period: string;
  narrative: string;
  metrics: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Zerops",
    url: "https://zerops.io",
    role: "Developer Advocate",
    period: "May 2026 – Present",
    narrative:
      "Driving developer advocacy for Zerops, a cloud platform built for developers and their AI coding agents to build, ship, and run production apps on real infrastructure instead of local mocks. Building technical content, documentation, and community programs that help developers understand and adopt the platform.",
    metrics: [],
  },
  {
    company: "Optexity",
    role: "Developer Relations Engineer",
    period: "Jan 2026 – Apr 2026",
    narrative:
      "Built the DevRel function from zero. Defined the content engine, community channels, and developer onboarding journey from first signup to first successful integration. Shipped tutorials, API guides, and walkthroughs while running growth campaigns across Twitter/X, Discord, and LinkedIn.",
    metrics: [],
  },
  {
    company: "Payman INC",
    role: "Developer Relations Engineer",
    period: "Mar 2025 – Aug 2025",
    narrative:
      "Designed and launched \"Payman Chronicles\", a serialized content campaign blending API tutorials, product storytelling, and founder narrative. Grew the community from zero to 4K+ in four months. Ran a developer funnel audit that cut integration abandonment by 40%, and built SDK walkthroughs that became the go-to starting point for every new developer.",
    metrics: [
      "70% awareness lift",
      "0 → 4K community across socials",
      "40% reduction in integration abandonment",
    ],
  },
  {
    company: "Upsurge Labs & Instadapp",
    role: "Developer Advocate",
    period: "Jan 2024 – Feb 2025",
    narrative:
      "Ran DevRel simultaneously across AI products (Cosmo AI, LammaBuild) and Web3 (Avocado Wallet). Owned content strategy for two product lines, produced 20+ technical guides, and built a workshop series averaging 100+ developers per session. Created an Ambassador Program from scratch with 50+ advocates, and led Avocado Wallet's expansion across 8+ blockchain networks.",
    metrics: [
      "70+ tech social media posts",
      "300+ developers reached",
    ],
  },
  {
    company: "Valist Inc",
    role: "Director of Developer Relations",
    period: "Jun 2022 – Aug 2023",
    narrative:
      "Built and led global DevRel for a Web3 software distribution protocol. Produced docs and campaign assets that served 500+ active developers. Ran workshops at 12+ international events (ETHGlobal, DevCon) and closed 30+ ecosystem partnerships that established Valist as trusted infrastructure.",
    metrics: ["12+ technical events", "30+ ecosystem partnerships", "500+ developers reached"],
  },
];

const communityRoles = [
  {
    org: "H.E.R. DAO India",
    role: "Lead Governor",
    period: "Mar 2023 – Jan 2024",
    narrative:
      "Led community programming for 200+ underrepresented developers across India. Designed workshop curriculum, ran mentorship tracks, and built a support network that helped members enter Web3 careers.",
  },
  {
    org: "Twilio Voices Program",
    role: "Technical Writer",
    period: "Feb 2022",
    narrative:
      "Authored SendGrid API tutorials reaching 10K+ developers. Among the program's highest-performing educational content.",
  },
];

const articles = [
  {
    title: "Context Engineering Is What You're Actually Doing",
    publication: "BrainGrid",
    category: "Opinion",
    date: "Mar 2026",
    readTime: "10 min",
    url: "https://www.braingrid.ai/blog/context-engineering",
    description:
      "The real skill is context engineering: controlling everything your AI agent knows before it writes a single line of code.",
  },
  {
    title: "Claude Code Plan Mode: What's Missing and How to Fix It",
    publication: "BrainGrid",
    category: "Opinion",
    date: "Mar 2026",
    readTime: "11 min",
    url: "https://www.braingrid.ai/blog/claude-plan-mode",
    description:
      "Plan mode is great for analysis but plans vanish between sessions. Here's what's broken and how to fix it.",
  },
  {
    title: "What Is OpenClaw? The Open-Source AI Agent Everyone Is Talking About",
    publication: "BrainGrid",
    category: "Opinion",
    date: "Mar 2026",
    readTime: "11 min",
    url: "https://www.braingrid.ai/blog/what-is-openclaw",
    description:
      "An honest breakdown of the AI agent that went viral with 140K GitHub stars and real security concerns.",
  },
  {
    title: "Claude Code Skills Explained: What They Are + How to Use Them",
    publication: "BrainGrid",
    category: "Guide",
    date: "Feb 2026",
    readTime: "9 min",
    url: "https://www.braingrid.ai/blog/claude-skills",
    description:
      "Claude Skills are markdown files that give AI agents specialized knowledge. Learn how they work.",
  },
  {
    title: "Claude Code MCP Servers: Setup Guide + Best Servers",
    publication: "BrainGrid",
    category: "How-to",
    date: "Dec 2025",
    readTime: "17 min",
    url: "https://www.braingrid.ai/blog/claude-code-mcp",
    description:
      "Add MCP servers to Claude Code in minutes. Top 10 servers ranked plus troubleshooting.",
  },
  {
    title: "10 Best Lovable Alternatives in 2026",
    publication: "BrainGrid",
    category: "Comparison",
    date: "Jan 2026",
    readTime: "12 min",
    url: "https://www.braingrid.ai/blog/lovable-alternatives",
    description:
      "Compared Bolt.new, Cursor, Claude Code, v0, and 6 more AI builders on code quality and pricing.",
  },
  {
    title: "7 Best Replit Alternatives in 2026",
    publication: "BrainGrid",
    category: "Comparison",
    date: "Jan 2026",
    readTime: "16 min",
    url: "https://www.braingrid.ai/blog/replit-alternatives",
    description:
      "Compared Codespaces, Cursor, Bolt.new, v0, and more for AI coding and deployment.",
  },
  {
    title: "How to Add MCP Servers to Gemini CLI",
    publication: "BrainGrid",
    category: "How-to",
    date: "Jan 2026",
    readTime: "12 min",
    url: "https://www.braingrid.ai/blog/gemini-mcp",
    description:
      "Set up MCP servers in Gemini CLI in 5 minutes. Config, BrainGrid MCP, and troubleshooting.",
  },
  {
    title: "Ralph Wiggum Plugin for Claude Code",
    publication: "BrainGrid",
    category: "How-to",
    date: "Jan 2026",
    readTime: "10 min",
    url: "https://www.braingrid.ai/blog/ralph-wiggum-plugin",
    description:
      "Set up the Ralph Wiggum plugin for hands-off autonomous coding in Claude Code.",
  },
  {
    title: "Build a Slack Payment Bot to Send Money Instantly",
    publication: "Payman AI",
    category: "Tutorial",
    date: "2025",
    readTime: "8 min",
    url: "https://medium.com/payman-ai/build-a-slack-payment-bot-to-send-money-instantly-8de08d5e5d04",
    description:
      "Step-by-step guide to building a Slack bot that processes real payments using Payman's API.",
  },
  {
    title: "Build a Telegram Bot to Send Money via ACH",
    publication: "Payman AI",
    category: "Tutorial",
    date: "2025",
    readTime: "10 min",
    url: "https://medium.com/payman-ai/build-a-telegram-bot-to-send-money-to-us-ach-bank-accounts-24de1b0b089b",
    description:
      "Building a Telegram bot that handles ACH transfers using agent-first payment infrastructure.",
  },
  {
    title: "How Autonomous Tech is Shaping the Future of Money",
    publication: "Hashnode",
    category: "Opinion",
    date: "2025",
    readTime: "7 min",
    url: "https://aahiknsv.hashnode.dev/how-autonomous-technology-is-shaping-the-future-of-money",
    description:
      "Exploring the intersection of AI agents and financial infrastructure.",
  },
];

const skills = {
  technical: [
    "Python",
    "JavaScript/TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML/CSS",
    "Tailwind",
    "REST APIs",
    "Streamlit",
    "Flask",
    "GitHub",
    "Prompt Engineering",
  ],
  contentMarketing: [
    "Content Strategy",
    "Editorial Planning",
    "Developer Campaigns",
    "Technical Writing",
    "API Documentation",
    "SEO / AEO / GEO",
    "Reddit Analytics",
    "Storytelling",
    "Multi-format Production",
  ],
  devrelCommunity: [
    "Community Building & Growth",
    "Ambassador Programs",
    "Developer Onboarding",
    "Funnel Analysis",
    "Workshop Design",
    "Conference Speaking",
    "Ecosystem Partnerships",
    "Feedback Loops",
  ],
  tools: [
    "Claude Code",
    "Cursor",
    "Gemini CLI",
    "Figma",
    "VS Code",
    "JIRA",
    "Notion",
    "Discord",
    "Twitter/X",
    "LinkedIn",
    "Google Analytics",
  ],
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Videos", href: "#videos" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const videos = [
  {
    id: "_Mu2bZBo6mA",
    title: "I Built a Daily Guessing Game with ONE Prompt using ZCP",
  },
  {
    id: "Be0RIcs96RE",
    title: "Zerops ZCP Walkthrough: Deploy, Don't Just Describe",
  },
];

const socials = [
  { label: "Twitter/X", href: "https://x.com/aahiknsv", Icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com/in/vanshikarana", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Vanshika-Rana", Icon: Github },
  { label: "YouTube", href: "https://www.youtube.com/@aahiknsv", Icon: Youtube },
];

/* ================================================================
   ANIMATION VARIANTS
   ================================================================ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
};

const viewportOnce = { once: true, margin: "-100px" };

/* ================================================================
   MAIN PAGE
   ================================================================ */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="noise-overlay" />

      {/* ──── NAVIGATION (liquid glass pill) ──── */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4"
      >
        <nav className="liquid-glass max-w-3xl mx-auto rounded-full px-5 md:px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="font-display font-semibold text-lg text-white hover:opacity-70 transition"
          >
            VR
          </Link>

          <div className="hidden md:flex items-center gap-7 ml-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="liquid-glass inline-flex items-center rounded-full px-5 py-2 text-sm font-medium text-white hover:bg-white/5 transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>

          <button
            className="md:hidden p-1 text-white/80 hover:text-white transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="liquid-glass md:hidden max-w-3xl mx-auto mt-2 rounded-2xl px-6 py-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2.5 text-white/70 hover:text-white transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </motion.header>

      <main>
        {/* ──── HERO ──── */}
        <section className="relative pt-40 pb-16 md:pt-52 md:pb-24 px-6 overflow-hidden">
          <div className="orb orb-gold -top-[200px] -right-[150px]" />
          <div className="orb orb-amber top-[100px] -left-[250px]" />
          <div className="orb orb-ash -bottom-[100px] right-[20%]" />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto relative z-10"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <Image
                src="/images/avatar.jpeg"
                alt="Vanshika Rana"
                width={56}
                height={56}
                className="rounded-full ring-1 ring-white/15"
              />
              <div>
                <p className="font-medium text-white">Vanshika Rana</p>
                <p className="text-sm text-white/40">
                  Engineer at Heart &middot; Developer Advocate &middot; Content
                  Strategist
                </p>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-8 text-white"
            >
              I turn developer tools
              <br />
              <span className="text-gold-300">
                into adoption stories.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed"
            >
              4+ years building developer programs end-to-end. From API
              documentation and SDK walkthroughs to content campaigns that drive
              awareness, funnel developers into products, and turn early adopters
              into evangelists.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#writing"
                className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full transition-colors hover:bg-white/90"
              >
                See my work
                <ChevronDown className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="liquid-glass inline-flex items-center gap-2 text-white px-6 py-3 rounded-full hover:bg-white/5 transition-colors"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-3 mt-10">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="liquid-glass inline-flex items-center justify-center rounded-full p-3 text-white/70 hover:text-white transition-colors"
                >
                  <s.Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ──── STATS ──── */}
        <section className="px-6 pb-20 md:pb-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: "4+", label: "Years in DevRel & content" },
                { value: "5", label: "Companies shipped at" },
                { value: "20+", label: "Technical guides published" },
                { value: "12+", label: "International events" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="liquid-glass text-center p-6 md:p-8 rounded-2xl card-hover"
                >
                  <div className="font-display font-medium text-3xl md:text-4xl text-gold-300 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/40">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ──── ABOUT ──── */}
        <section
          id="about"
          className="relative px-6 py-20 md:py-28 scroll-mt-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04)_0%,_transparent_70%)] pointer-events-none" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-4xl mx-auto relative z-10"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>About</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-medium text-3xl md:text-4xl mb-10 text-white"
            >
              A quick <span className="text-white/50">intro</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              <motion.div variants={fadeUp} className="space-y-5 text-white/55 leading-relaxed">
                <p>
                  I&apos;m an engineer at heart. I studied Computer Science and
                  still think in systems, not sentences. But somewhere along
                  the way I realized my real edge wasn&apos;t just building
                  things, it was explaining them. That&apos;s what pulled me
                  into developer advocacy: taking something technically complex
                  and making developers actually want to use it. I&apos;ve
                  spent the last 4+ years doing exactly that, across AI
                  tooling, payment infrastructure, and Web3.
                </p>
                <p>
                  I&apos;m equally comfortable writing a Python SDK walkthrough,
                  planning a quarter&apos;s editorial calendar, or standing on a
                  conference stage explaining why your product matters. I care
                  about clarity, speed, and hitting publish.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-5 text-white/55 leading-relaxed">
                <p>
                  B.E. in Computer Science (Vel Tech High Tech, Chennai, 2022).
                  Content pipelines, developer funnels, feedback loops: I like
                  building things that explain themselves and spread on their
                  own.
                </p>
                <p>
                  Right now I&apos;m at Zerops, working as a Developer
                  Advocate. Before that I built the DevRel function from
                  scratch at Optexity, and shipped content programs at Payman,
                  Upsurge Labs, Instadapp, and Valist. When I&apos;m not
                  writing docs, I&apos;m prototyping AI tools or figuring out
                  how to make the next campaign impossible to ignore.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ──── WRITING / CONTENT ──── */}
        <section
          id="writing"
          className="relative px-6 py-20 md:py-28 scroll-mt-24 overflow-hidden"
        >
          <div className="orb orb-amber opacity-60 -top-[300px] right-[10%]" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-6xl mx-auto relative z-10"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Writing</SectionLabel>
              <h2 className="font-display font-medium text-3xl md:text-4xl mb-4 text-white">
                Published <span className="text-white/50">work</span>
              </h2>
              <p className="text-white/50 max-w-2xl mb-12 leading-relaxed">
                Technical articles, opinion pieces, how-to guides, and
                tutorials across BrainGrid, Medium, and Hashnode.
              </p>
            </motion.div>

            {/* Newsletter highlight */}
            <motion.div variants={fadeUp} className="mb-10">
              <Link
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7433169551997018112"
                target="_blank"
                className="liquid-glass group block p-6 md:p-8 rounded-2xl hover:bg-white/[0.05] transition-colors duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Newspaper className="w-4 h-4 text-gold-300" />
                      <span className="text-xs font-medium text-gold-300 uppercase tracking-wider">
                        Newsletter
                      </span>
                    </div>
                    <h3 className="font-display font-medium text-xl md:text-2xl text-white mb-1">
                      Optexity Newsletter
                    </h3>
                    <p className="text-white/50 text-sm md:text-base">
                      Subscribe on LinkedIn for developer advocacy insights, AI
                      tooling updates, and content strategy breakdowns.
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-gold-300 transition-colors shrink-0" />
                </div>
              </Link>
            </motion.div>

            {/* Articles grid */}
            <motion.div
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {articles.map((article, i) => (
                <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }}>
                  <Link
                    href={article.url}
                    target="_blank"
                    className="group card-hover liquid-glass p-6 rounded-2xl flex flex-col h-full hover:bg-white/[0.05] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-white/10 text-gold-300">
                        {article.category}
                      </span>
                      <span className="text-[11px] text-white/40">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2 text-white group-hover:text-gold-300 transition-colors leading-snug text-[15px]">
                      {article.title}
                    </h3>
                    <p className="text-sm text-white/40 mb-4 flex-1 line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-white/40">
                      <span>{article.publication}</span>
                      <span>{article.date}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* External links */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3 justify-center"
            >
              {[
                {
                  label: "More on Hashnode",
                  href: "https://aahiknsv.hashnode.dev",
                },
                {
                  label: "Payman Chronicles on LinkedIn",
                  href: "https://linkedin.com/in/vanshikarana",
                },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="liquid-glass inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors px-4 py-2.5 rounded-xl"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ──── VIDEOS ──── */}
        <section
          id="videos"
          className="relative px-6 py-20 md:py-28 scroll-mt-24 overflow-hidden"
        >
          <div className="orb orb-gold opacity-40 top-[10%] -right-[200px]" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-6xl mx-auto relative z-10"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Videos</SectionLabel>
              <h2 className="font-display font-medium text-3xl md:text-4xl mb-4 text-white">
                On <span className="text-white/50">YouTube</span>
              </h2>
              <p className="text-white/50 max-w-2xl mb-12 leading-relaxed">
                I&apos;ve started making videos too, walkthroughs, builds, and
                behind-the-scenes of what I&apos;m shipping.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              className="grid md:grid-cols-2 gap-6"
            >
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="liquid-glass card-hover rounded-2xl overflow-hidden"
                >
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium text-white text-[15px] leading-snug">
                      {video.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex justify-center">
              <Link
                href="https://www.youtube.com/@aahiknsv"
                target="_blank"
                className="liquid-glass inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors px-5 py-2.5 rounded-full"
              >
                <Youtube className="w-4 h-4" />
                Subscribe on YouTube
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ──── EXPERIENCE ──── */}
        <section id="experience" className="px-6 py-20 md:py-28 scroll-mt-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Experience</SectionLabel>
              <h2 className="font-display font-medium text-3xl md:text-4xl mb-14 text-white">
                Where I&apos;ve made <span className="text-white/50">impact</span>
              </h2>
            </motion.div>

            <div className="space-y-10">
              {experience.map((job, i) => (
                <motion.div key={i} variants={fadeUp} className="group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display font-medium text-xl md:text-2xl text-white">
                        {job.url ? (
                          <Link
                            href={job.url}
                            target="_blank"
                            className="inline-flex items-baseline gap-1 hover:text-gold-300 transition-colors"
                          >
                            {job.company}
                            <ArrowUpRight className="w-3.5 h-3.5 self-center" />
                          </Link>
                        ) : (
                          job.company
                        )}
                      </h3>
                      <span className="text-sm text-gold-300 font-medium">
                        {job.role}
                      </span>
                    </div>
                    <span className="text-sm text-white/40 shrink-0">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-white/55 leading-relaxed mb-4 max-w-3xl">
                    {job.narrative}
                  </p>

                  {job.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.metrics.map((m, j) => (
                        <span
                          key={j}
                          className="liquid-glass text-xs font-medium px-3 py-1.5 rounded-full text-gold-300"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  {i < experience.length - 1 && (
                    <div className="mt-10 border-b border-white/10" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Community roles */}
            <motion.div variants={fadeUp} className="mt-16">
              <h3 className="text-xs font-semibold text-white/40 mb-6 tracking-wider uppercase">
                Leadership &amp; Community
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                {communityRoles.map((role, i) => (
                  <div
                    key={i}
                    className="liquid-glass p-6 rounded-2xl card-hover"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white">
                          {role.org}
                        </h4>
                        <p className="text-sm text-gold-300">{role.role}</p>
                      </div>
                      <span className="text-xs text-white/40 shrink-0 ml-4">
                        {role.period}
                      </span>
                    </div>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {role.narrative}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ──── SKILLS ──── */}
        <section
          id="skills"
          className="relative px-6 py-20 md:py-28 scroll-mt-24 overflow-hidden"
        >
          <div className="orb orb-gold opacity-50 -bottom-[200px] -left-[200px]" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-6xl mx-auto relative z-10"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Skills &amp; Expertise</SectionLabel>
              <h2 className="font-display font-medium text-3xl md:text-4xl mb-12 text-white">
                What I bring to the <span className="text-white/50">table</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <motion.div variants={fadeUp}>
                <SkillCategory title="Technical" items={skills.technical} />
              </motion.div>
              <motion.div variants={fadeUp}>
                <SkillCategory
                  title="Content & Marketing"
                  items={skills.contentMarketing}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <SkillCategory
                  title="DevRel & Community"
                  items={skills.devrelCommunity}
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <SkillCategory title="Tools" items={skills.tools} />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ──── CONTACT ──── */}
        <section
          id="contact"
          className="relative px-6 py-20 md:py-28 scroll-mt-24 overflow-hidden"
        >
          <div className="orb orb-ash opacity-70 top-[10%] right-[5%]" />
          <div className="orb orb-amber opacity-40 bottom-[10%] left-[10%]" />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto text-center relative z-10"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Contact</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-medium text-3xl sm:text-4xl md:text-5xl mb-6 text-white leading-tight"
            >
              Let&apos;s work <span className="text-gold-300">together.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-lg mb-10 leading-relaxed">
              Looking for a content strategist who understands developers and can
              drive real adoption? I&apos;d love to hear from you.
            </motion.p>

            <motion.div variants={fadeUp} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="mailto:ranavanshika172000@gmail.com"
                className="inline-flex items-center gap-2.5 bg-white text-black font-medium px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors text-base"
              >
                <Mail className="w-5 h-5" />
                ranavanshika172000@gmail.com
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mt-10">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="liquid-glass inline-flex items-center justify-center rounded-full p-3 text-white/70 hover:text-white transition-colors"
                >
                  <s.Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* ──── FOOTER ──── */}
      <footer className="px-6 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} Vanshika Rana</span>
          <span>Built with Next.js &amp; Tailwind</span>
        </div>
      </footer>
    </>
  );
}

/* ================================================================
   HELPER COMPONENTS
   ================================================================ */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="accent-line" />
      <span className="text-sm font-medium text-white/40 tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="liquid-glass p-6 rounded-2xl card-hover h-full">
      <h3 className="font-semibold mb-4 text-xs text-gold-300 uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-white/60 hover:border-gold-400/40 hover:text-gold-300 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
