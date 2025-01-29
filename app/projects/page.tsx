// app/projects/page.tsx
import Link from "next/link";
import {
  Code,
  Github,
  Globe,
  Gamepad,
  Database,
  MessageSquare,
  Bot,
  Earth,
  House,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Toonify",
      tech: ["LemmeBuild", "API", "Next.js", "Tailwind CSS"],
      description:
        "A platform to unleash your creativity and watch as AI brings your wildest comic ideas to life!",
      links: {
        github: "https://github.com/Vanshika-Rana/toonify",
        website: "https://toonify-eight.vercel.app/",
      },
      icon: <Bot className="w-6 h-6" />,
    },
    {
      title: "Mood-O-Meter",
      tech: ["Python", "Next.js", "SerpAPI", "ShadCN UI", "GPT 4"],
      description:
        "The World Mood-O-Meter uses GPT-4 on SerpApi headlines to gauge each country's mood in real time.",
      links: {
        github: "https://github.com/Vanshika-Rana/world-moodOmeter",
        website: "https://world-mood-ometer.vercel.app/",
      },
      icon: <Earth className="w-6 h-6" />,
    },
    {
      title: "Moon Bunny",
      tech: ["Phaser JS"],
      description:
        "A fun little practice game made with Phaser JS. All you have to do is collect carrots and get a high score. EzzPzz!",
      links: {
        github: "https://github.com/Vanshika-Rana/bunny-jump-game",
        website:
          "https://gateway.valist.io/ipfs/bafybeibszyhygcrzcf2bdq4gyvbja4xt6nqcu44b4zsy64ghsu56xoc32m/",
      },
      icon: <Gamepad className="w-6 h-6" />,
    },
    {
      title: "Story Sphere",
      tech: ["Next.js", "Tailwind", "Supabase", "TypeScript"],
      description:
        "Collaborative narrative platform connecting creators worldwide through shared stories.",
      links: {
        github: "https://github.com/Vanshika-Rana/storycreator-app",
        website: "https://storycreator-app.vercel.app/",
      },
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      title: "Manodaya Homes",
      tech: ["Next.js", "Tailwind", "Google Forms"],
      description:
        "Tourist homestay platform with integrated booking and inquiry system.",
      links: {
        github: "https://github.com/Vanshika-Rana/tourist-homestay",
        website: "https://www.manodayahomes.in/",
      },
      icon: <House className="w-6 h-6" />,
    },
    {
      title: "Social Circle",
      tech: ["Solidity", "Next.js", "Ethers.js"],
      description:
        "Blockchain message board for friends to leave encrypted notes on the Ethereum network.",
      links: {
        github: "https://github.com/Vanshika-Rana/Social-Circle",
        website: "https://social-circle.vercel.app/",
      },
      icon: <MessageSquare className="w-6 h-6" />,
    },
  ];

  return (
    <main className="text-white max-w-6xl mx-auto px-4 py-8 sm:py-12">
      <div className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-900 bg-clip-text text-transparent">
          Creative Experiments
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-zinc-900 rounded-xl p-6 border border-zinc-800 
                         hover:border-blue-500 transition-all duration-300 
                         hover:shadow-2xl hover:shadow-blue-900/20"
            >
              {/* Title + Icon + Links */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-zinc-800 rounded-lg text-blue-400">
                    {project.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {project.title}
                  </h2>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.links.github}
                    className="text-zinc-400 hover:text-blue-400 transition"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.links.website}
                    className="text-zinc-400 hover:text-blue-400 transition"
                  >
                    <Globe className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs sm:text-sm bg-zinc-800 rounded-full text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm sm:text-base mb-6">
                {project.description}
              </p>

              {/* Hover "View Project" button */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href={project.links.website}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-lg transition"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
