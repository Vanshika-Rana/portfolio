"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Menu,
  X,
  ChevronDown,
  Newspaper,
} from "lucide-react";

/* ================================================================
   DATA
   ================================================================ */

const experience = [
  {
    company: "Optexity",
    role: "Developer Advocate",
    period: "Jan 2026 – Present",
    narrative:
      "Building the DevRel function from zero. Defining the content engine, community channels, and developer onboarding journey from first signup to first successful integration. Shipping tutorials, API guides, and walkthroughs while running growth campaigns across Twitter/X, Discord, and LinkedIn.",
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
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/* ================================================================
   MAIN PAGE
   ================================================================ */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ──── NAVIGATION ──── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAFAF7]/80 backdrop-blur-xl border-b border-stone-200/60"
            : ""
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-stone-900 hover:opacity-70 transition"
          >
            VR
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-stone-500 hover:text-stone-900 transition"
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
          <div className="md:hidden bg-[#FAFAF7]/95 backdrop-blur-xl border-b border-stone-200/60 px-6 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-stone-500 hover:text-stone-900 transition-colors text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* ──── HERO ──── */}
        <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-6 overflow-hidden">
          <div className="orb orb-pink -top-[200px] -right-[150px]" />
          <div className="orb orb-purple top-[100px] -left-[250px]" />
          <div className="orb orb-violet -bottom-[100px] right-[20%]" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/avatar.jpeg"
                alt="Vanshika Rana"
                width={56}
                height={56}
                className="rounded-full ring-2 ring-purple-200/60"
              />
              <div>
                <p className="font-medium text-stone-900">Vanshika Rana</p>
                <p className="text-sm text-stone-400">
                  Developer Advocate &middot; Content Strategist &middot; Growth
                  &amp; Community
                </p>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-8 text-stone-900">
              I turn developer tools
              <br />
              <span className="gradient-text-animated">
                into adoption stories.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-500 max-w-2xl mb-10 leading-relaxed">
              4+ years building developer programs end-to-end. From API
              documentation and SDK walkthroughs to content campaigns that drive
              awareness, funnel developers into products, and turn early adopters
              into evangelists.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#writing"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                See my work
                <ChevronDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white border border-stone-200 text-stone-700 px-6 py-3 rounded-lg hover:border-purple-300 hover:bg-purple-50/30 transition-all duration-300"
              >
                Get in touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10">
              {[
                { label: "Twitter/X", href: "https://x.com/aahiknsv" },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/vanshikarana",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/Vanshika-Rana",
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  className="text-sm text-stone-400 hover:text-purple-600 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ──── STATS ──── */}
        <section className="px-6 pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: "4+", label: "Years in DevRel & content" },
                { value: "5", label: "Companies shipped at" },
                { value: "20+", label: "Technical guides published" },
                { value: "12+", label: "International events" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="fade-in shimmer text-center p-6 md:p-8 rounded-2xl bg-white border border-stone-200/80 card-hover"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-stone-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── ABOUT ──── */}
        <section id="about" className="px-6 py-20 md:py-28 scroll-mt-24">
          <div className="max-w-4xl mx-auto fade-in">
            <SectionLabel>About</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-stone-900">
              A quick intro
            </h2>

            <div className="grid md:grid-cols-2 gap-10 md:gap-14">
              <div className="space-y-5 text-stone-500 leading-relaxed">
                <p>
                  I sit at the intersection of code, content, and community.
                  Most of my work starts with the same question: how do you take
                  something technically complex and make developers actually want
                  to use it? I&apos;ve spent the last 4+ years answering that,
                  across AI tooling, payment infrastructure, and Web3.
                </p>
                <p>
                  I&apos;m equally comfortable writing a Python SDK walkthrough,
                  planning a quarter&apos;s editorial calendar, or standing on a
                  conference stage explaining why your product matters. I care
                  about clarity, speed, and hitting publish.
                </p>
              </div>
              <div className="space-y-5 text-stone-500 leading-relaxed">
                <p>
                  Computer Science background (B.E., Vel Tech High Tech,
                  Chennai, 2022). I think in systems: content pipelines,
                  developer funnels, feedback loops. I like building things
                  that explain themselves and spread on their own.
                </p>
                <p>
                  Right now I&apos;m at Optexity, building their DevRel function
                  from scratch. Before that I shipped content programs at Payman,
                  Upsurge Labs, Instadapp, and Valist. When I&apos;m not writing
                  docs, I&apos;m prototyping AI tools or figuring out how to
                  make the next campaign impossible to ignore.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──── WRITING / CONTENT ──── */}
        <section
          id="writing"
          className="relative px-6 py-20 md:py-28 scroll-mt-24 bg-white overflow-hidden"
        >
          <div className="orb orb-purple opacity-40 -top-[300px] right-[10%]" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="fade-in">
              <SectionLabel>Writing</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900">
                Published work
              </h2>
              <p className="text-stone-500 max-w-2xl mb-12 leading-relaxed">
                Technical articles, opinion pieces, how-to guides, and
                tutorials across BrainGrid, Medium, and Hashnode.
              </p>
            </div>

            {/* Newsletter highlight */}
            <div className="fade-in mb-10">
              <Link
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7433169551997018112"
                target="_blank"
                className="group block p-6 md:p-8 rounded-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-violet-50 border border-purple-200/60 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Newspaper className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-medium text-purple-600 uppercase tracking-wider">
                        Newsletter
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-stone-900 mb-1">
                      Optexity Newsletter
                    </h3>
                    <p className="text-stone-500 text-sm md:text-base">
                      Subscribe on LinkedIn for developer advocacy insights, AI
                      tooling updates, and content strategy breakdowns.
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-stone-400 group-hover:text-purple-600 transition-colors shrink-0" />
                </div>
              </Link>
            </div>

            {/* Articles grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((article, i) => (
                <Link
                  key={i}
                  href={article.url}
                  target="_blank"
                  className="fade-in group gradient-border card-hover p-6 rounded-2xl bg-[#FAFAF7] border border-stone-200/80 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-stone-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 text-stone-900 group-hover:text-purple-700 transition-colors leading-snug text-[15px]">
                    {article.title}
                  </h3>
                  <p className="text-sm text-stone-400 mb-4 flex-1 line-clamp-2 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span>{article.publication}</span>
                    <span>{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* External links */}
            <div className="mt-8 fade-in flex flex-wrap gap-3 justify-center">
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
                  className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-purple-600 transition-colors px-4 py-2.5 rounded-xl bg-[#FAFAF7] border border-stone-200/80 hover:border-purple-200"
                >
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ──── EXPERIENCE ──── */}
        <section id="experience" className="px-6 py-20 md:py-28 scroll-mt-24">
          <div className="max-w-5xl mx-auto">
            <div className="fade-in">
              <SectionLabel>Experience</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-bold mb-14 text-stone-900">
                Where I&apos;ve made impact
              </h2>
            </div>

            <div className="space-y-10">
              {experience.map((job, i) => (
                <div key={i} className="fade-in group">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-stone-900">
                        {job.company}
                      </h3>
                      <span className="text-sm text-purple-600 font-medium">
                        {job.role}
                      </span>
                    </div>
                    <span className="text-sm text-stone-400 shrink-0">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-stone-500 leading-relaxed mb-4 max-w-3xl">
                    {job.narrative}
                  </p>

                  {job.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.metrics.map((m, j) => (
                        <span
                          key={j}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 text-purple-700 border border-purple-100/80"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}

                  {i < experience.length - 1 && (
                    <div className="mt-10 border-b border-stone-200/60" />
                  )}
                </div>
              ))}
            </div>

            {/* Community roles */}
            <div className="mt-16 fade-in">
              <h3 className="text-xs font-semibold text-stone-400 mb-6 tracking-wider uppercase">
                Leadership &amp; Community
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                {communityRoles.map((role, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-stone-200/80 card-hover"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-stone-900">
                          {role.org}
                        </h4>
                        <p className="text-sm text-purple-600">{role.role}</p>
                      </div>
                      <span className="text-xs text-stone-400 shrink-0 ml-4">
                        {role.period}
                      </span>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      {role.narrative}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ──── SKILLS ──── */}
        <section
          id="skills"
          className="relative px-6 py-20 md:py-28 scroll-mt-24 bg-white overflow-hidden"
        >
          <div className="orb orb-pink opacity-30 -bottom-[200px] -left-[200px]" />

          <div className="max-w-6xl mx-auto relative z-10 fade-in">
            <SectionLabel>Skills &amp; Expertise</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-stone-900">
              What I bring to the table
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <SkillCategory title="Technical" items={skills.technical} />
              <SkillCategory
                title="Content & Marketing"
                items={skills.contentMarketing}
              />
              <SkillCategory
                title="DevRel & Community"
                items={skills.devrelCommunity}
              />
              <SkillCategory title="Tools" items={skills.tools} />
            </div>
          </div>
        </section>

        {/* ──── CONTACT ──── */}
        <section
          id="contact"
          className="relative px-6 py-20 md:py-28 scroll-mt-24 overflow-hidden"
        >
          <div className="orb orb-violet opacity-30 top-[10%] right-[5%]" />
          <div className="orb orb-pink opacity-20 bottom-[10%] left-[10%]" />

          <div className="max-w-3xl mx-auto text-center fade-in relative z-10">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-stone-900 leading-tight">
              Let&apos;s work together.
            </h2>
            <p className="text-stone-500 text-lg mb-10 leading-relaxed">
              Looking for a content strategist who understands developers and can
              drive real adoption? I&apos;d love to hear from you.
            </p>

            <Link
              href="mailto:ranavanshika172000@gmail.com"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium px-8 py-3.5 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5 text-base"
            >
              <Mail className="w-5 h-5" />
              ranavanshika172000@gmail.com
            </Link>

            <div className="flex items-center justify-center gap-8 mt-10">
              {[
                { label: "Twitter/X", href: "https://x.com/aahiknsv" },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/vanshikarana",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/Vanshika-Rana",
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  className="text-sm text-stone-400 hover:text-purple-600 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ──── FOOTER ──── */}
      <footer className="px-6 py-8 border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
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
      <span className="text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent tracking-wide">
        {children}
      </span>
    </div>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-stone-200/80 card-hover">
      <h3 className="font-semibold mb-4 text-xs bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs px-3 py-1.5 rounded-full bg-white text-stone-600 border border-stone-200/80 hover:border-purple-200 hover:text-purple-700 transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
