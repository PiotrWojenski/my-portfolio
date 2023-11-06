import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

const Skills = () => {
	return (
		<div name="skills" className="bg-gradient-to-r from-[#0e2241] to-[#1e3b69] text-gray-300">
			{/*Container*/}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="mb-4">
					<p className="text-4xl font-bold inline border-b-4 border-[#11AD72]">Experience</p>
					<p> These are technologies I've worked with:</p>
				</div>

				<div>
					<div>
						<img className="w-20 mx-auto" src={HTML} alt="html icon" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
