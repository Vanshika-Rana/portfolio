import React from "react";

const projects = [
	{
		title: "SafeBet",
		stack: "Solidity | Chainlink | Next JS | Tailwind CSS",
		description:
			"Your Decentralized Betting Buddy! If you want to bet in the world of Web3, SafeBet is the best choice. A dApp that will help you bet on things that excites you the most!",
		githubLink: "https://github.com/Vanshika-Rana/safebet",
		vercelLink: "https://safebet.vercel.app/",
	},
	{
		title: "Moon Bunny",
		stack: "Phase JS | Valist",
		description:
			"Aliens? NO! We've got Bunnies in the moon! A fun little practice game made with Phaser JS. All you have to do is collect carrots and get a high score. EzzPzz 😄",
		githubLink: "https://github.com/Vanshika-Rana/bunny-jump-game",
		vercelLink: "https://gateway.valist.io/ipfs/bafybeibszyhygcrzcf2bdq4gyvbja4xt6nqcu44b4zsy64ghsu56xoc32m/",
	},
	{
		title: "Rcmnd",
		stack: "Python | Streamlit",
		description:
			"Machine Learning model built to recommend K-Dramas that users will like to watch next. It takes their recent drama name as input and provides list of suggestions that matches the plot of their already seen drama.",
		githubLink: "https://github.com/Vanshika-Rana/RCMND",
		vercelLink: "https://4x5neh5jzujhjfauls77vq.streamlit.app/",
	},
	{
		title: "Story Sphere",
		stack: "Next JS | Tailwind CSS | Supabase | Typescript",
		description:
			"Craft a unique narrative by collaborating with individuals from diverse backgrounds. Let your imagination run wild as you weave a tale together, creating connections and memories that last a lifetime.",
		githubLink: "https://github.com/Vanshika-Rana/storycreator-app",
		vercelLink: "https://storycreator-app.vercel.app/",
	},
	{
		title: "Tasteful Recipes",
		stack: "React JS | API | Styled Components",
		description:
			"A web app that provides you with some amazing recipes with whatever ingredient you choose. Using Edamam API, it explores over 2M+ recipes.",
		githubLink: "https://github.com/Vanshika-Rana/Tasteful-Recipes",
		vercelLink: "https://hardcore-morse-8d4aa1.netlify.app/",
	},
	{
		title: "Social Circle",
		stack: "Solidity | Next JS | Tailwind CSS | Ethers",
		description:
			"Who doesn't like getting fun messages from friends? A dApp built on Ethereum blockchain that allows you to connect your wallet and drop a few messages :)",
		githubLink: "https://github.com/Vanshika-Rana/Social-Circle",
		vercelLink: "https://social-circle.vercel.app/",
	},
];

const Project: React.FC = () => {
	return (
		<div className='min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center'>
			<h1 className='text-white text-4xl lg:text-5xl font-bold  mt-12 '>
				Projects
			</h1>
			<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 bg-slate-950 w-full min-h-screen '>
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						stack={project.stack}
						description={project.description}
						githubLink={project.githubLink}
						vercelLink={project.vercelLink}
					/>
				))}
			</div>
		</div>
	);
};

const ProjectCard: React.FC<{
	title: string;
	stack: string;
	description: string;
	githubLink: string;
	vercelLink: string;
}> = ({ title, stack, description, githubLink, vercelLink }) => {
	return (
		<div className='bg-slate-950 rounded-xl  p-4 glow-border flex flex-col justify-center'>
			<h3 className='text-white text-3xl font-bold mb-2'>{title}</h3>
			<p className='text-white text-sm font-light italic mb-2 uppercase'>{stack}</p>
			<p className='text-gray-300 pr-6'>{description}</p>
			<div className='mt-4 flex space-x-4'>
				<a
					href={githubLink}
					target='_blank'
					rel='noopener noreferrer'
					className='bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600'>
					GitHub
				</a>
				<a
					href={vercelLink}
					target='_blank'
					rel='noopener noreferrer'
					className='border-purple-800 border-2  text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600 hover:border-purple-800'>
					Vercel
				</a>
			</div>
		</div>
	);
};

export default Project;
