// app/contact/page.tsx

import Link from "next/link";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center max-w-3xl mx-auto px-4 py-16 text-white min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
        Let’s Connect!
      </h1>
      <p className="text-zinc-400 text-center mb-8 text-sm sm:text-base leading-relaxed">
        Whether you have a burning question, a nifty project, or just want to say
        hello, I’m always up for a chat. Drop me a line or find me on social
        media. Let’s build something awesome together!
      </p>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {/* Email Card */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-300 transition-all flex flex-col items-center text-center">
          <Mail className="w-8 h-8 text-blue-300 mb-2" />
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Email</h2>
          <Link
            href="mailto:vanshikar.0817@gmail.com"
            className="text-gray-400 hover:underline text-sm sm:text-base"
          >
            vanshikar.0817@gmail.com
          </Link>
        </div>

        {/* Socials Card */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-300 transition-all flex flex-col items-center text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Find me on</h2>
          <div className="flex space-x-6">
            <Link href="https://twitter.com/yourhandle" target="_blank">
              <Twitter className="w-6 h-6 text-blue-300 hover:text-blue-400 transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/yourhandle" target="_blank">
              <Linkedin className="w-6 h-6 text-blue-300 hover:text-blue-400 transition" />
            </Link>
            <Link href="https://github.com/yourhandle" target="_blank">
              <Github className="w-6 h-6 text-blue-300 hover:text-blue-400 transition" />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-zinc-500 mt-12 text-center text-sm sm:text-base leading-relaxed">
        Fun fact: My code runs on coffee &amp; curiosity. Let&apos;s chat about
        <br />
        AI, blockchain, or any crazy idea!
      </p>

      {/* Back Home */}
      <div className="mt-12">
        <Link
          href="/"
          className="bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-lg transition text-sm sm:text-base"
        >
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}
