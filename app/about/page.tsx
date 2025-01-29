"use client";

import Link from "next/link";
import { Briefcase, GraduationCap, Code2, Globe, Terminal } from "lucide-react";

export default function About() {
  return (
    <main className="text-white max-w-5xl mx-auto px-4 py-8">
      <div className="mb-16">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-900 bg-clip-text text-transparent">
          Little About Me ...
        </h1>

       
        <div className="mb-10 space-y-4">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-blue-300" />
            <h2 className="text-lg lg:text-xl font-semibold">Background</h2>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            B.E. Computer Science • AI Enthusiast • Developer Advocate • Blockchain
            Contributor • Product Manager • Public Speaker
          </p>
        </div>

   
        <div className="bg-zinc-800 rounded-xl p-6 mb-12">
          <h2 className="text-xl lg:text-2xl font-bold mb-6">Tech Toolkit</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Next JS", "Typescript", "Python", "ML", "Solidity", "Node JS"].map(
              (skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg"
                >
                  <Terminal className="w-4 h-4 text-blue-300" />
                  <span className="text-sm lg:text-md">{skill}</span>
                </div>
              )
            )}
          </div>
        </div>

    
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Code2 className="w-8 h-8 text-blue-300 flex-shrink-0" />
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2">Development Philosophy</h3>
              <p className="text-zinc-400 leading-relaxed text-sm lg:text-md">
                Believe in building open, transparent systems that empower both
                developers and end users. Passionate about crafting user-centric
                products, advocating for ethical AI, and driving innovation through
                decentralized technologies. Dedicated to bridging technical depth with
                real-world impact.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Globe className="w-8 h-8 text-blue-300 flex-shrink-0" />
            <div>
              <h3 className="text-lg lg:text-xl font-semibold mb-2">Community Work</h3>
              <p className="text-zinc-400 leading-relaxed text-sm lg:text-md">
                Mentored 50+ developers • Active in web 3.0 & AI communities • Led
                product-focused initiatives on core teams • Public speaker at
                conferences • Regular workshop host • Blockchain meetup organizer
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="border-t border-zinc-800 pt-8">
        <h2 className="text-2xl font-bold mb-6">Let&apos;s Connect</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://x.com/aahiknsv"
            target="_blank"
            className="bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-lg transition flex items-center gap-2"
          >
            <TwitterIcon className="w-5 h-5" /> Twitter
          </Link>
          <Link
            href="https://linkedin.com/in/vanshikarana"
            target="_blank"
            className="bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-lg transition flex items-center gap-2"
          >
            <LinkedinIcon className="w-5 h-5" /> LinkedIn
          </Link>
          <Link
            href="https://github.com/Vanshika-Rana"
            target="_blank"
            className="bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-lg transition flex items-center gap-2"
          >
            <GithubIcon className="w-5 h-5" /> GitHub
          </Link>
        </div>
      </div>
    </main>
  );
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
