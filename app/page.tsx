import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 text-white">
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">

        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/avatar.jpeg"
            alt="Vanshika Rana"
            width={200}  
            height={200}
            className="rounded-lg object-cover w-full max-w-[200px]"
          />
        </div>


        <div className="md:col-span-2 flex flex-col justify-center">
          <p className="text-lg mb-2">Hey 👋🏻 This is ...</p>
          <h1 className="text-4xl font-bold mb-4">Vanshika Rana</h1>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            I’m a Developer Advocate with 3+ years of experience exploring
            technologies across Blockchain and AI. I love crafting solutions and
            sharing knowledge to empower developers worldwide.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/about"
              className="bg-blue-300 text-gray-900 font-bold px-6 py-2 rounded-lg hover:bg-blue-400 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="bg-zinc-800 px-6 py-2 font-bold rounded-lg hover:bg-zinc-700 transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>


      <section>
        <h2 className="text-2xl font-bold mb-6">What I&apos;ve Been Upto...</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 
          <div className="bg-zinc-800 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Professional Journey</h3>
              <span className="text-2xl">💼</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              I’m a Developer Advocate at Upsurge Labs, working on AI-driven
              products. My day-to-day includes collaborating across teams,
              crafting technical docs, leading workshops, and building tools
              that help developers explore cutting-edge solutions.
            </p>
          </div>


          <div className="bg-zinc-800 p-6 rounded-xl">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Personal Projects</h3>
              <span className="text-2xl">💻</span>
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Outside of my day job, I’m diving into AI—experimenting with model
              fine-tuning, prompt engineering, and prototypes that push creative
              boundaries. I’m excited to share what’s next—stay tuned!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
