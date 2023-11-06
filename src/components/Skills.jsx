import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

const Skills = () => {
	return (
		<div name="skills">
			{/*Container*/}
			<div>
				<div>
					<p>Experience</p>
					<p> These are technologies O've worked with:</p>
				</div>

				<div>
					<div>
						<img src={HTML} alt="html icon" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
