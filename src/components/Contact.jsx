import React from 'react'

const Contact = () => {
	return (
		<div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
			<form action="" className="flex flex-col max-w-[600px] w-full">
				<div className="pb-8">
					<p className="text-4-xl font-bold inline border-b-4 border-[#11AD72] text-gray-300">Contact</p>
					<p className="text-gray-300 py-4">Submit the form below or send me an emaik - pwojenskip@gmail.com</p>
				</div>
				<input type="text" />
			</form>
		</div>
	)
}

export default Contact
