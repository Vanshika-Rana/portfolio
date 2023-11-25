"use client";

import GLOBE from "vanta/src/vanta.globe";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0x6b21a8,
					backgroundColor: 0x020617,
				})
			);
		}
	}, [vantaEffect]);
	return (
		<div
			className='bg-slate-950 min-h-screen w-full flex flex-col justify-center items-start text-gray-200'
			ref={vantaRef}>
			<div className=' mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-32'>
				<h1 className='font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>
					Vanshika Rana
				</h1>
				<h2 className='text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl mt-4 '>
					Developer | Dev Rel
				</h2>
				<a
					href='https://online.fliphtml5.com/obtmr/oblu/#p=1'
					target="_blank" // 
					download='Vanshika_Rana_Resume.pdf'>
					<button className='border-purple-800 border-2 rounded-lg font-bold text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring focus:border-purple-900'>
						Download Resume
					</button>
				</a>
			</div>
		</div>
	);
}
