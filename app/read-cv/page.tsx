import React from "react";

const Resume: React.FC = () => {
	return (
		<section className='mx-auto max-w-4xl w-full px-4 py-8 text-white'>
			<div className='relative rounded-md overflow-hidden border border-zinc-800 h-[70vh] sm:h-[80vh]'>
				<iframe
					src='/Vanshika.pdf'
					className='w-full h-full'
					title='My Resume'
					style={{ border: "none" }}
				/>
			</div>

			<p className='text-center text-sm text-zinc-400 mt-4'>
				Having trouble viewing?{" "}
				<a
					href='/vanshika_resume.pdf'
					target='_blank'
					rel='noopener noreferrer'
					className='underline hover:text-blue-300'>
					Open the PDF in a new tab
				</a>
				.
			</p>
		</section>
	);
};

export default Resume;
