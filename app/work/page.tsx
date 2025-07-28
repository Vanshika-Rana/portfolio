import {
    Briefcase,
    Users,
    Code,
    BookOpen,
    Rocket,
    GraduationCap,
  } from "lucide-react";
  import Link from "next/link";
  
  export default function Work() {
    return (
      <main className="text-white max-w-5xl mx-auto px-4 py-8">
        <div className="mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent">
            Professional Journey
          </h1>
  
 
          <div className="relative border-l border-zinc-700 sm:ml-4 ml-2">
  
            <div className="mb-12 relative sm:pl-8 pl-4">
              <div className="absolute sm:w-4 sm:h-4 w-3 h-3 bg-blue-300 rounded-full sm:-left-[9px] -left-[6px] top-1" />
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-blue-300" />
                <h2 className="text-xl lg:text-2xl font-bold">Payman</h2>
              </div>
              <div className="bg-zinc-800 rounded-xl p-6 mb-4 leading-relaxed">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-md lg:text-xl font-semibold">DevRel Engineer</h3>
                    <p className="text-zinc-400 text-sm lg:text-md">
                      Remote | March 2025 – Present
                    </p>
                  </div>
                  <Rocket className="w-6 h-6 text-blue-300" />
                </div>
                <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-sm lg:text-md">
                  <li>Led brand, content, and growth strategy for Payman’s AI-first payment infra</li>
                  <li>Shaped product positioning and launched the agent-focused SDK and Payman Agent</li>
                  <li>Built dev-facing demos like Telegram bots and resume coaches with real payouts</li>
                  <li>Wrote no-fluff docs, ran campaigns, and helped bring Payman to enterprise teams</li>
                </ul>
              </div>
            </div>

            <div className="mb-12 relative sm:pl-8 pl-4">
              <div className="absolute sm:w-4 sm:h-4 w-3 h-3 bg-blue-300 rounded-full sm:-left-[9px] -left-[6px] top-1" />
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-blue-300" />

                <h2 className="text-xl lg:text-2xl font-bold">Upsurge Labs</h2>
              </div>
              <div className="bg-zinc-800 rounded-xl p-6 mb-4 leading-relaxed">
                <div className="flex justify-between items-start mb-4">
                  <div>
         
                    <h3 className="text-md lg:text-xl font-semibold">
                      Developer Advocate (Core Team)
                    </h3>
                    <p className="text-zinc-400 text-sm lg:text-md">
                      Bengaluru, KA | June 2024 – Jan 2025
                    </p>
                  </div>
                  <Rocket className="w-6 h-6 text-blue-300" />
                </div>
                <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-sm lg:text-md">
                  <li>Spearheaded team development and management</li>
                  <li>
                    Collaborated with cross-functional teams to refine AI-first
                    products (Cosmo AI, LemmeBuild)
                  </li>
                  <li>
                    Authored technical documentation enabling seamless developer
                    onboarding
                  </li>
                  <li>Hosted tech workshops to foster AI engagement in the dev community</li>
                </ul>
              </div>
            </div>
  

            <div className="mb-12 relative sm:pl-8 pl-4">
              <div className="absolute sm:w-4 sm:h-4 w-3 h-3 bg-blue-300 rounded-full sm:-left-[9px] -left-[6px] top-1" />
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-6 h-6 text-blue-300" />
         
                <h2 className="text-xl lg:text-2xl font-bold">Instadapp</h2>
              </div>
              <div className="bg-zinc-800 rounded-xl p-6 mb-4 leading-relaxed">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-md lg:text-xl font-semibold">
                      Developer Relations Associate
                    </h3>
                    <p className="text-zinc-400 text-sm lg:text-md">
                      Bengaluru, KA | January 2024 – Present
                    </p>
                  </div>
                  <BookOpen className="w-6 h-6 text-blue-300" />
                </div>
                <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-sm lg:text-md">
                  <li>
                    Managed Avocado Wallet, expanding multi-chain functionality
                    across EVM networks
                  </li>
                  <li>
                    Launched the Avocado Ambassador Program to grow Web3 adoption in
                    India
                  </li>
                  <li>
                    Increased adoption through gasless transactions and a
                    user-friendly design
                  </li>
                  <li>
                    Built and maintained technical docs, integrating new networks via
                    GitHub
                  </li>
                </ul>
              </div>
            </div>
  
     
            <div className="mb-12 relative sm:pl-8 pl-4">
              <div className="absolute sm:w-4 sm:h-4 w-3 h-3 bg-blue-300 rounded-full sm:-left-[9px] -left-[6px] top-1" />
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-blue-300" />
                <h2 className="text-xl lg:text-2xl font-bold">Valist Inc</h2>
              </div>
              <div className="bg-zinc-800 rounded-xl p-6 mb-4 leading-relaxed">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-md lg:text-xl font-semibold">
                      Director of Developer Relations
                    </h3>
                    <p className="text-zinc-400 text-sm lg:text-md">
                      Remote, US | June 2022 – August 2023
                    </p>
                  </div>
                  <Rocket className="w-6 h-6 text-blue-300" />
                </div>
                <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-sm lg:text-md">
                  <li>
                    Led developer relations for a platform enabling seamless Web3 app
                    and game distribution
                  </li>
                  <li>
                    Authored documentation and articles, simplifying complex concepts
                    for developers
                  </li>
                  <li>
                    Hosted tech workshops, delivered keynotes, and built
                    relationships within the Web3 &amp; gaming communities
                  </li>
                  <li>
                    Collaborated with ecosystem stakeholders to expand Valist’s
                    integration capabilities
                  </li>
                </ul>
              </div>
            </div>
  
          
            <div className="mb-12 relative sm:pl-8 pl-4">
              <div className="absolute sm:w-4 sm:h-4 w-3 h-3 bg-blue-300 rounded-full sm:-left-[9px] -left-[6px] top-1" />
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-6 h-6 text-blue-300" />
                <h2 className="text-xl lg:text-2xl font-bold">
                  Leadership &amp; Community
                </h2>
              </div>
  

              <div className="bg-zinc-800 rounded-xl p-6 mb-6 leading-relaxed">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-md lg:text-xl font-semibold">
                      H.E.R. DAO &mdash; Lead Governor
                    </h3>
                    <p className="text-zinc-400 text-sm lg:text-md">
                      Remote, IN | March 2023 – Present
                    </p>
                  </div>
                  <GraduationCap className="w-6 h-6 text-blue-300" />
                </div>
                <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-sm lg:text-md">
                  <li>Fostered diversity and inclusivity in the Indian Web3 ecosystem</li>
                  <li>
                    Organized educational workshops and mentorship programs for
                    underrepresented genders
                  </li>
                  <li>
                    Partnered with global H.E.R. DAO initiatives to expand community
                    impact
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
        
          <div className="mt-8 mb-12">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">
              Additional Experience
            </h2>
            <div className="space-y-6">
  
    
              <div className="bg-zinc-800 rounded-xl p-6 leading-relaxed">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-md lg:text-xl font-semibold">
                      Ambodi XYZ
                    </h3>
                    <p className="text-zinc-400 text-sm lg:text-md">
                      Freelance Web Developer | Remote, IN | March 2022 – April 2022
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-sm lg:text-md">
                  <li>
                    Improved an NFT project’s website, integrating frontend and backend
                  </li>
                  <li>
                    Leveraged Nameless backend to optimize performance and user experience
                  </li>
                </ul>
              </div>
  
              <div className="bg-zinc-800 rounded-xl p-6 leading-relaxed">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-md lg:text-xl font-semibold">
                      Twilio Voices Program
                    </h3>
                    <p className="text-zinc-400 text-sm lg:text-md">
                      Technical Writer | Remote, IN | February 2022
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-sm lg:text-md">
                  <li>
                    Authored technical blogs &amp; tutorials for Twilio’s SendGrid API
                  </li>
                  <li>
                    Simplified product adoption by creating clear, developer-focused
                    documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="mt-12 text-center mb-12">
            <Link
              href="/"
              className="bg-zinc-800 hover:bg-zinc-700 px-8 py-3 rounded-lg transition"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </main>
    );
  }