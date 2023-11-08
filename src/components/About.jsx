import React from 'react'

const About = () => {
	return (
		<div name="about" className="w-full h-screen text-gray-300 bg-[#0a192f]">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-[#11AD72]">About</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full  sm:grid grid-cols-2 gap-8 px-4">
					<div className=" sm:text-right text-4xl font-bold ">
						<p>Hi! I'm Piotr, nice to meet you. Please take a look around</p>
					</div>
					<div>
						<p>
							I am deeply passionate about the art of crafting exceptional software that not only meets but exceeds
							expectations, but also has a positive impact on the lives of others. I believe that software has the power
							to transform lives, and I am driven by the desire to create solutions that address real-world problems and
							bring genuine value to users.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
