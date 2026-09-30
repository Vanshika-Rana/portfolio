export type ExperienceItem = {
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  narrative: string;
  metrics: string[];
};

export type Article = {
  title: string;
  publication: string;
  category: string;
  date: string;
  readTime: string;
  url: string;
  description: string;
};

export const profile = {
  name: "Vanshika Rana",
  headlineLead: "I turn developer tools",
  headlineRest: "into adoption stories.",
  role: "Developer Relations Engineer and Forward Deployed Engineer.",
  standfirst:
    "Four years at the intersection of code, community, and the codebase. I read the code, build the demo, write the docs, and stay in the room until developers have actually shipped with it.",
  email: "ranavanshika172000@gmail.com",
  site: { label: "van.codes", href: "https://van.codes" },
  location: "India",
  availability: "Open to DevRel and FDE roles, global and remote",
  portrait: "/images/avatar.jpeg",
  resume: { href: "/vanshika-rana-resume.pdf", file: "Vanshika-Rana-Resume.pdf" },
  education:
    "BE Computer Science, Vel Tech High Tech, Chennai. CGPA 8.3, 2022.",
  fractional: {
    href: "https://fractional.van.codes",
    label: "Hire me fractionally",
  },
};

export const figures = [
  { value: "4+", label: "Years in DevRel" },
  { value: "4K+", label: "Community grown from zero" },
  { value: "40%", label: "Lift in product awareness" },
  { value: "500+", label: "Developers served" },
];

export const about = [
  "I am an engineer at heart. I studied Computer Science and still think in systems. Somewhere along the way I realised my real edge was not only building things, it was explaining them well enough that other people wanted to build with them.",
  "I am equally comfortable in someone else's repo, shipping a working Python demo, writing the API reference, or presenting on a conference stage. My work has grown communities from zero to 4K+, driven 40% increases in product awareness, and cut onboarding drop-off by double digits.",
];

export const experience: ExperienceItem[] = [
  {
    company: "Zerops",
    url: "https://zerops.io",
    role: "Developer Relations Engineer",
    period: "Jun 2026 - Present",
    location: "Contract",
    narrative:
      "I own documentation, Discord community support, and multi-format content for the platform. I authored the competitor comparison docs against Railway, Render, Heroku, and Fly.io that now ship in production, and I lead the onboarding workstream for the Mate/Box launch with OSS recipes, landing pages, and positioning research against Devin, AMP, E2B, and Daytona.",
    metrics: [
      "4 competitor comparisons shipped to production docs",
      "Zerops Challenge hackathon run with WeMakeDevs",
      "ZCP positioned as the core platform differentiator",
    ],
  },
  {
    company: "Optexity",
    role: "Developer Advocate",
    period: "Jan 2026 - May 2026",
    location: "Contract",
    narrative:
      "I architected the DevRel function from zero: content pillars, community channels, and a developer journey that takes a user from signup to first successful integration. I produced tutorials, API guides, video walkthroughs, and sample projects mapped to the adoption funnel, and ran awareness campaigns across Twitter/X, Discord, and LinkedIn in a crowded AI tooling market.",
    metrics: [
      "DevRel function built from zero",
      "Developer journey mapped signup to first integration",
      "Pain points fed straight into the DX roadmap",
    ],
  },
  {
    company: "Payman INC",
    role: "Developer Relations Engineer",
    period: "Mar 2025 - Aug 2025",
    location: "US, remote",
    narrative:
      "I designed and ran a full-funnel content strategy, launching “Payman Chronicles”, a serialised campaign blending API tutorials, product storytelling, and founder narrative. I built TypeScript and Python SDK walkthroughs with runnable AI agent demos, then audited the funnel, found the worst drop-off points, and redesigned onboarding docs and support flows around them.",
    metrics: [
      "0 to 4K+ community in 4 months",
      "40% lift in product awareness",
      "40% less integration abandonment",
      "15+ DX improvements shipped",
    ],
  },
  {
    company: "Upsurge Labs and Instadapp",
    role: "Developer Advocate",
    period: "Jan 2024 - Feb 2025",
    location: "Bengaluru",
    narrative:
      "Sister companies, same core team. I ran DevRel across AI products (Cosmo AI, LemmeBuild) and Web3 (Avocado Wallet) at the same time. I owned editorial calendars for both lines, produced guides on AI integration, prompt engineering, and agent orchestration that became the top organic traffic sources, and built an Ambassador Program into a self-sustaining distribution engine.",
    metrics: [
      "20+ technical guides published",
      "100+ developers per monthly workshop",
      "50+ ambassadors recruited and trained",
      "Workshop setup cut from 30 minutes to under 5",
      "8+ blockchain networks integrated",
    ],
  },
  {
    company: "Valist Inc",
    role: "Director of Developer Relations",
    period: "Jun 2022 - Aug 2023",
    location: "US, remote",
    narrative:
      "I built and led global DevRel for a Web3 software distribution protocol, producing the documentation, technical content, and campaign assets that served its developer base. I ran a conference strategy across ETHGlobal, DevCon, and others, turning workshop attendees into active platform users.",
    metrics: [
      "500+ active developers served",
      "5+ international events",
      "15+ ecosystem partnerships closed",
    ],
  },
];

export const communityRoles = [
  {
    org: "H.E.R DAO India",
    role: "Lead Governor",
    period: "Mar 2023 - Jan 2024",
    narrative:
      "Led community programming for 200+ underrepresented developers across India. Designed the workshop curriculum, ran mentorship tracks, and built a support network that helped members enter Web3 careers.",
  },
  {
    org: "Twilio Voices Program",
    role: "Technical Writer",
    period: "Feb 2022",
    narrative:
      "Authored SendGrid API tutorials that reached 10K+ developers, among the programme's highest performing educational content by readership and engagement.",
  },
];

export const newsletter = {
  title: "Optexity Newsletter",
  publication: "LinkedIn",
  date: "Ongoing",
  readTime: "Newsletter",
  description:
    "Developer advocacy insights, AI tooling updates, and content strategy breakdowns, sent from my desk to yours.",
  url: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7433169551997018112",
};

export const articles: Article[] = [
  {
    title: "The Difference Between Writing Software and Shipping Software",
    publication: "No One Told You This",
    category: "Essay",
    date: "Jul 2026",
    readTime: "6 min",
    url: "https://aahiknsv.substack.com/p/the-difference-between-writing-software",
    description:
      "AI agents write code faster than ever and still have no idea what happens after it deploys. The next leap is observation, not smarter code.",
  },
  {
    title: "No One Told Me How to Do This, So I'm Telling You Instead",
    publication: "No One Told You This",
    category: "Career",
    date: "Jul 2026",
    readTime: "5 min",
    url: "https://aahiknsv.substack.com/p/devrel-career-story-no-one-told-me",
    description:
      "An engineering degree, a global pandemic, and the accidental discovery of a career called DevRel.",
  },
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
      "Plan mode is great for analysis but plans vanish between sessions. Here is what is broken and how to fix it.",
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
    title: "Claude Code Skills Explained: What They Are and How to Use Them",
    publication: "BrainGrid",
    category: "Guide",
    date: "Feb 2026",
    readTime: "9 min",
    url: "https://www.braingrid.ai/blog/claude-skills",
    description:
      "Claude Skills are markdown files that give AI agents specialised knowledge. Here is how they actually work.",
  },
  {
    title: "Claude Code MCP Servers: Setup Guide and Best Servers",
    publication: "BrainGrid",
    category: "How-to",
    date: "Dec 2025",
    readTime: "17 min",
    url: "https://www.braingrid.ai/blog/claude-code-mcp",
    description:
      "Add MCP servers to Claude Code in minutes. Top 10 servers ranked, plus troubleshooting.",
  },
  {
    title: "10 Best Lovable Alternatives in 2026",
    publication: "BrainGrid",
    category: "Comparison",
    date: "Jan 2026",
    readTime: "12 min",
    url: "https://www.braingrid.ai/blog/lovable-alternatives",
    description:
      "Bolt.new, Cursor, Claude Code, v0, and six more AI builders compared on code quality and pricing.",
  },
  {
    title: "7 Best Replit Alternatives in 2026",
    publication: "BrainGrid",
    category: "Comparison",
    date: "Jan 2026",
    readTime: "16 min",
    url: "https://www.braingrid.ai/blog/replit-alternatives",
    description:
      "Codespaces, Cursor, Bolt.new, v0, and more, compared for AI coding and deployment.",
  },
  {
    title: "How to Add MCP Servers to Gemini CLI",
    publication: "BrainGrid",
    category: "How-to",
    date: "Jan 2026",
    readTime: "12 min",
    url: "https://www.braingrid.ai/blog/gemini-mcp",
    description:
      "Set up MCP servers in Gemini CLI in five minutes. Config, BrainGrid MCP, and troubleshooting.",
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
      "A step-by-step build of a Slack bot that processes real payments through Payman's API.",
  },
  {
    title: "Build a Telegram Bot to Send Money via ACH",
    publication: "Payman AI",
    category: "Tutorial",
    date: "2025",
    readTime: "10 min",
    url: "https://medium.com/payman-ai/build-a-telegram-bot-to-send-money-to-us-ach-bank-accounts-24de1b0b089b",
    description:
      "A Telegram bot that handles ACH transfers on agent-first payment infrastructure.",
  },
  {
    title: "How Autonomous Tech is Shaping the Future of Money",
    publication: "Hashnode",
    category: "Opinion",
    date: "2025",
    readTime: "7 min",
    url: "https://aahiknsv.hashnode.dev/how-autonomous-technology-is-shaping-the-future-of-money",
    description:
      "Where AI agents meet financial infrastructure, and what breaks when they do.",
  },
];

export const archives = [
  {
    label: "No One Told You This on Substack",
    href: "https://aahiknsv.substack.com",
  },
  { label: "More on Hashnode", href: "https://aahiknsv.hashnode.dev" },
  {
    label: "Payman Chronicles on LinkedIn",
    href: "https://linkedin.com/in/vanshikarana",
  },
];

export const videos = [
  {
    id: "6Vpzpi6MREs",
    title: "Gimme Updates: Your Inbox, Read Aloud, One Call at a Time",
    note: "A CALL-E hackathon build that phones you and reads your inbox out loud.",
  },
  {
    id: "_Mu2bZBo6mA",
    title: "I Built a Daily Guessing Game with ONE Prompt using ZCP",
    note: "One prompt, one deployed game. The fastest way to show what ZCP does.",
  },
  {
    id: "Be0RIcs96RE",
    title: "Zerops ZCP Walkthrough: Deploy, Don't Just Describe",
    note: "A full walkthrough of the workflow, from describing an app to running it.",
  },
];

export const skillGroups = [
  {
    title: "Technical",
    items: [
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
      "Google Colab",
      "GitHub",
      "Postman",
      "Prompt Engineering",
    ],
  },
  {
    title: "Content and marketing",
    items: [
      "Content Strategy",
      "Editorial Planning",
      "Developer Campaigns",
      "Technical Writing",
      "API Documentation",
      "SEO-driven Documentation",
      "Storytelling",
      "Multi-format Production",
    ],
  },
  {
    title: "DevRel and community",
    items: [
      "Community Building and Growth",
      "Ambassador Programs",
      "Developer Onboarding",
      "Funnel Analysis",
      "Workshop Design",
      "Conference Speaking",
      "Ecosystem Partnerships",
      "Feedback Loops",
    ],
  },
  {
    title: "Tools",
    items: [
      "Figma",
      "VS Code",
      "JIRA",
      "Notion",
      "Discord",
      "Twitter/X",
      "LinkedIn",
      "Google Analytics",
    ],
  },
];

export const socials = [
  { label: "X", handle: "@aahiknsv", href: "https://x.com/aahiknsv" },
  {
    label: "LinkedIn",
    handle: "vanshikarana",
    href: "https://linkedin.com/in/vanshikarana",
  },
  {
    label: "GitHub",
    handle: "Vanshika-Rana",
    href: "https://github.com/Vanshika-Rana",
  },
  {
    label: "YouTube",
    handle: "@aahiknsv",
    href: "https://www.youtube.com/@aahiknsv",
  },
];

export const offers = [
  "Read your codebase",
  "Ship the demo",
  "Write the docs",
  "Explain it on stage",
];

export const contactNote =
  "I read the code, I write the code, and then I write the thing that makes it make sense to everyone else. Docs, demos, walkthroughs, whatever it takes to get a developer from curious to shipped. If you are building something that deserves to be understood, tell me about it. I answer every email.";
