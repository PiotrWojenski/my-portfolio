import React from 'react'

const Contact = () => {
	return (
		<div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
			<form
				method="POST"
				action="https://getform.io/f/ea70ec25-97d9-4769-9acd-c93174873440"
				className="flex flex-col max-w-[600px] w-full">
				<div className="pb-8">
					<p className="text-4-xl font-bold inline border-b-4 border-[#11AD72] text-gray-300">Contact</p>
					<p className="text-gray-300 py-4">Submit the form below or send me an emaik - pwojenskip@gmail.com</p>
				</div>
				<input type="text" placeholder="Name" name="name" className=" p-2 rounded-xl bg-[#ccd6f6]" />
				<input className="my-4 p-2 rounded-xl bg-[#ccd6f6]" type="text" placeholder="Email" name="name" />
				<textarea
					className="bg-[#ccd6f6] p-2 rounded-xl"
					placeholder="Message..."
					name="message"
					id=""
					cols="30"
					rows="10"></textarea>
				<button className="text-white border-2 hover:bg-[#11AD72] hover:border-[#11AD72] px-8 py-3 my-8 mx-auto flex items-center rounded-xl">
					Send
				</button>
			</form>
		</div>
	)
}

export default Contact
