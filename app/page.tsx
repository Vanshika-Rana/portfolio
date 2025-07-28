import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className='max-w-5xl mx-auto px-4 py-8 text-white'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start'>
				<div className='flex justify-center md:justify-start'>
					<Image
						src='/images/avatar.jpeg'
						alt='Vanshika Rana'
						width={200}
						height={200}
						className='rounded-lg object-cover w-full max-w-[200px]'
					/>
				</div>

				<div className='md:col-span-2 flex flex-col justify-center'>
					<p className='text-lg mb-2'>Hey 👋🏻 This is ...</p>
					<h1 className='text-4xl font-bold mb-4'>Vanshika Rana</h1>
					<p className='text-zinc-400 mb-8 leading-relaxed'>
						I’m a DevRel turned marketer & a storyteller with 3+
						years of experience turning complex tech into crisp
						narratives. I’ve built brands, launched community-driven
						campaigns, and crafted content that drives both
						engagement and growth. Currently blending strategy with
						creativity to help bold ideas break through the noise.
					</p>

					<div className='flex flex-wrap gap-4'>
						<Link
							href='/about'
							className='bg-blue-300 text-gray-900 font-bold px-6 py-2 rounded-lg hover:bg-blue-400 transition'>
							About
						</Link>
						<Link
							href='/contact'
							className='bg-zinc-800 px-6 py-2 font-bold rounded-lg hover:bg-zinc-700 transition'>
							Let&apos;s Connect
						</Link>
					</div>
				</div>
			</div>

			<section>
				<h2 className='text-2xl font-bold mb-6'>
					What I&apos;ve Been Creating...
				</h2>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
					<div className='bg-zinc-800 p-6 rounded-xl'>
						<div className='flex justify-between items-start mb-4'>
							<h3 className='text-lg font-semibold'>
								Brand & Growth Strategy
							</h3>
							<span className='text-2xl'> 🎯 </span>
						</div>
						<p className='text-zinc-400 leading-relaxed'>
							I work at the intersection of product, story, and
							distribution — shaping brand positioning, GTM
							strategies, and content systems that connect with
							real people. From crafting narratives for AI agents
							to launching agent-first payment products, I love
							simplifying complexity and making things
							share-worthy.
						</p>
					</div>

					<div className='bg-zinc-800 p-6 rounded-xl'>
						<div className='flex justify-between items-start mb-4'>
							<h3 className='text-lg font-semibold'>
								Side Projects & Experiments
							</h3>
							<span className='text-2xl'>🧪</span>
						</div>
						<p className='text-zinc-400 leading-relaxed'>
							I prototype fast and test in public — building
							micro-products, AI tools, and social campaigns that
							explore how stories spread. My projects double as
							playgrounds: one week it’s an AI journaling app, the
							next it’s a Telegram bot that rewrites your resume.
							I treat side quests like R&D for better marketing.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
