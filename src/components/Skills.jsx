import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

const Skills = () => {
	return (
		<div name="skills" className="w-full h-screen bg-gradient-to-r from-[#0e2241] to-[#1e3b69] text-gray-300">
			{/*Container*/}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="mb-4">
					<p className="text-4xl font-bold inline border-b-4 border-[#11AD72]">Skills</p>
					<p className="py-5"> These are technologies I've worked with:</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={HTML} alt="html icon" />
						<p className="my-1">HTML</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
						<p className="my-1">CSS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={javascript} alt="javascript icon" />
						<p className="my-1">Javascript</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={react} alt="react icon" />
						<p className="my-1">React</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={tailwind} alt="tailwind icon" />
						<p className="my-1">Tailwind</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={github} alt="github icon" />
						<p className="my-1">Github</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
