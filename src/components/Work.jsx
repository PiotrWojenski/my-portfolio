import React from 'react'
import workProject from '../assets/workProject.png'

const Work = () => {
	return (
		<div name="work" className="w-full md:h-screen bg-gradient-to-r from-[#0e2241] to-[#1e3b69] text-gray-300 ">
			<div className="max-w-[1000px" mx-auto p-4 flex flex-col justify-center w-full h-full>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#11AD72]">Work</p>
					<p className="py-6">Check out some of my recent work</p>
				</div>

				<div style={{ backgroundImage: `url(${workProject})` }} className="grid dm:grid-cols-2 md:grid-cols-3 gap-4">
					<div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
						{/*Hover Effects*/}
						<div className="opacity-0 group:hover-opacity-100">
							<span></span>
							<div>
								<a href="/">
									<button></button>
								</a>
								<a href="/">
									<button></button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work
