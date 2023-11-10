import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
	return (
		<div name="home" className="w-full h-screen bg-[#0a192f]">
			{/*Container*/}
			<div className="max-w-[1000px] mx-auto px-7 flex flex-col justify-center h-full">
				<p className="text-[#11AD72]">Hi, my name is</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#cfd9f9]">Piotr Wojeński</h1>
				<h3 className="text-3xl sm:text-5xl font-bold text-[#838ca9]">I'm a Frontend Developer</h3>
				<p className="text-[#838ca9] py-4 max-w-[700px]">
					Frontend developer with a passion for building responsive, user-friendly, and visually appealing web
					applications using React. Proven ability to design, develop, and deploy complex web applications using modern
					technologies and frameworks.
				</p>
				<div>
					<button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-[#11AD72] hover:bg-[#11AD72] ease-out duration-300">
						View Work...
						<span className=" group-hover:rotate-90 duration-300">
							<HiArrowNarrowRight className="ml-3" />
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
