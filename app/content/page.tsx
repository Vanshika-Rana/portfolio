"use client";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SocialPost = ({
	platform,
	url,
	title,
}: {
	platform: string;
	url: string;
	title: string;
}) => {
	if (platform === "linkedin-video") {
		// Extract the activity ID from LinkedIn URL
		// URL format: https://www.linkedin.com/feed/update/urn:li:activity:7297961621287550976
		const activityId = url.match(/urn:li:activity:(\d+)/)?.[1];

		if (activityId) {
			const embedUrl = `https://www.linkedin.com/embed/feed/update/urn:li:activity:${activityId}`;
			return (
				<div className='bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-blue-300 transition-all min-w-[280px] sm:min-w-[320px] shrink-0'>
					<iframe
						src={embedUrl}
						height='400'
						width='100%'
						frameBorder='0'
						allowFullScreen
						title='LinkedIn Post'
						style={{ border: "none" }}></iframe>
				</div>
			);
		} else {
			// Fallback if URL parsing fails
			return (
				<div className='bg-zinc-900 rounded-xl border border-zinc-800 hover:border-blue-300 transition-all min-w-[280px] sm:min-w-[320px] shrink-0 p-4'>
					<div className='text-white font-semibold mb-2'>{title}</div>
					<a
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-400 hover:text-blue-300 underline block'>
						View LinkedIn Video
					</a>
				</div>
			);
		}
	} else if (platform === "twitter") {
		return (
			<div
				className='bg-zinc-900 rounded-xl border border-zinc-800 hover:border-blue-300 transition-all overflow-hidden twitter-embed min-w-[280px] sm:min-w-[320px] shrink-0'
				style={{ minHeight: "200px" }}>
				<blockquote
					className='twitter-tweet'
					data-theme='dark'
					data-dnt='true'
					data-width='280'>
					<p>{title}</p>
					<a href={url}>View Tweet</a>
				</blockquote>
				<div className='p-3 sm:p-4 text-center'>
					<a
						href={url}
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-400 hover:text-blue-300 underline text-sm'>
						{title} - View on X
					</a>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default function ContentHub() {
	const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

	const scrollLeft = (category: string) => {
		const container = scrollRefs.current[category];
		if (container) {
			const scrollAmount = window.innerWidth < 640 ? -200 : -300;
			container.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	const scrollRight = (category: string) => {
		const container = scrollRefs.current[category];
		if (container) {
			const scrollAmount = window.innerWidth < 640 ? 200 : 300;
			container.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	useEffect(() => {
		// Add a longer delay to ensure DOM is ready
		const timer = setTimeout(() => {
			if (
				typeof window !== "undefined" &&
				(window as any).twttr &&
				(window as any).twttr.widgets
			) {
				console.log("Loading Twitter widgets...");
				(window as any).twttr.widgets.load();
			} else {
				console.log("Twitter widgets not ready yet");
			}
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	const content = [
		{
			category: "My Latest Write-Ups",
			items: [
				{
					title: "Build a Slack Payment Bot",
					url: "https://medium.com/payman-ai/build-a-slack-payment-bot-to-send-money-instantly-8de08d5e5d04",
					type: "External Blog",
				},
				{
					title: "Build a Telegram ACH Bot",
					url: "https://medium.com/payman-ai/build-a-telegram-bot-to-send-money-to-us-ach-bank-accounts-24de1b0b089b",
					type: "External Blog",
				},
				{
					title: "How Autonomous Tech is Shaping the Future of Money",
					url: "https://aahiknsv.hashnode.dev/how-autonomous-technology-is-shaping-the-future-of-money",
					type: "External Blog",
				},
				{
					title: "Chain Abstraction",
					url: "https://aahiknsv.hashnode.dev/chain-abstraction",
					type: "External Blog",
				},
			],
		},
		{
			category: "Video Content",
			items: [
				{
					title: "Payman x AI Agents Launch",
					url: "https://www.linkedin.com/feed/update/urn:li:activity:7297961621287550976",
					type: "LinkedIn Video",
				},
				{
					title: "Payman Chronicles: Visual Drop",
					url: "https://www.linkedin.com/feed/update/urn:li:activity:7302263966519476225",
					type: "LinkedIn Video",
				},
				{
					title: "Agentic Payments Demo Flow",
					url: "https://www.linkedin.com/feed/update/urn:li:activity:7335675737028341760",
					type: "LinkedIn Video",
				},
				{
					title: "Payman Launch Week Wrap",
					url: "https://www.linkedin.com/feed/update/urn:li:activity:7346577847475441664",
					type: "LinkedIn Video",
				},
			],
		},
		{
			category: "Payman Chronicles - something I loved working on!",
			items: [
				{
					title: "Issue #6",
					url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7351218926422290432",
					type: "LinkedIn Video",
				},
				{
					title: "Issue #5",
					url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7348393544354582531",
					type: "LinkedIn Video",
				},
				{
					title: "Issue #4",
					url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7345833534302973954",
					type: "LinkedIn Video",
				},
				{
					title: "Issue #3",
					url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7343292394924142592",
					type: "LinkedIn Video",
				},
				{
					title: "Issue #2",
					url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7337587507888365569",
					type: "LinkedIn Video",
				},
				{
					title: "Issue #1",
					url: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7333797552082821120",
					type: "LinkedIn Video",
				},
			],
		},
		{
			category: "Social Media Presence",
			items: [
				{
					title: "Latest thoughts on AI agents",
					url: "https://twitter.com/aahiknsv/status/1940697376328765625",
					type: "Twitter",
				},
				{
					title: "Payment infrastructure insights",
					url: "https://twitter.com/aahiknsv/status/1939738539278651606",
					type: "Twitter",
				},
				{
					title: "Building in public update",
					url: "https://twitter.com/aahiknsv/status/1919353269668745222",
					type: "Twitter",
				},
				{
					title: "Product development thoughts",
					url: "https://twitter.com/aahiknsv/status/1947231487801401755",
					type: "Twitter",
				},
				{
					title: "Tech industry observations",
					url: "https://twitter.com/aahiknsv/status/1943548762087215268",
					type: "Twitter",
				},
				{
					title: "Innovation in fintech",
					url: "https://twitter.com/aahiknsv/status/1941174282949886252",
					type: "Twitter",
				},
			],
		},
	];

	return (
		<main className='text-white w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10'>
			<Script
				src='https://platform.twitter.com/widgets.js'
				strategy='lazyOnload'
			/>

			<div className='mb-8 sm:mb-12'>
				<h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-white to-gray-900 bg-clip-text text-transparent'>
					Content Hub
				</h1>
				<p className='text-zinc-400 text-sm sm:text-base lg:text-lg max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed'>
					This is a living archive of the stuff I&apos;ve published -
					carousels, drops, docs, deep dives, tweets, experiments. I
					have added just my latest posts to my digital garden right
					now, will be growing more. Built to scroll, not search.
				</p>
			</div>

			<div className='space-y-10 sm:space-y-12 lg:space-y-16'>
				{content.map((section) => (
					<div key={section.category}>
						<div className='flex items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2'>
							<h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-blue-300 leading-tight flex-1 pr-2'>
								{section.category}
							</h2>
							<div className='flex items-center gap-1 sm:gap-2 flex-shrink-0'>
								<button
									onClick={() => scrollLeft(section.category)}
									className='p-1.5 sm:p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 hover:border-blue-300 transition-all'
									aria-label='Scroll left'>
									<ChevronLeft className='w-3 h-3 sm:w-4 sm:h-4 text-zinc-400' />
								</button>
								<button
									onClick={() =>
										scrollRight(section.category)
									}
									className='p-1.5 sm:p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 hover:border-blue-300 transition-all'
									aria-label='Scroll right'>
									<ChevronRight className='w-3 h-3 sm:w-4 sm:h-4 text-zinc-400' />
								</button>
							</div>
						</div>
						<div
							ref={(el) => {
								scrollRefs.current[section.category] = el;
							}}
							className='flex space-x-3 sm:space-x-4 overflow-x-auto pb-2 scroll-smooth scrollbar-hide'
							style={{
								scrollbarWidth: "none",
								msOverflowStyle: "none",
							}}>
							{section.items.map((item, idx) =>
								item.type === "Twitter" ? (
									<SocialPost
										key={idx}
										platform='twitter'
										url={item.url}
										title={item.title}
									/>
								) : (
									<Link
										key={idx}
										href={item.url}
										target='_blank'
										className='min-w-[250px] sm:min-w-[280px] lg:min-w-[300px] shrink-0 border border-zinc-700 hover:border-blue-300 transition rounded-lg p-3 sm:p-4 bg-zinc-900 group'>
										<div className='text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2 leading-tight group-hover:text-blue-100 transition-colors'>
											{item.title}
										</div>
										<div className='text-xs sm:text-sm text-zinc-400'>
											{item.type === "LinkedIn Video"
												? "linkedin.com"
												: new URL(
														item.url
												  ).hostname.replace(
														"www.",
														""
												  )}
										</div>
									</Link>
								)
							)}
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
