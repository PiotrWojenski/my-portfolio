import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo-PW (2).png'

const Navbar = () => {
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e2241] text-gray-300">
			<div>
				<img src={Logo} alt="Logo" style={{ width: '50px' }} />
			</div>

			{/* menu*/}
			<ul className="flex ">
				<li>Home</li>
				<li>About</li>
				<li>Skills</li>
				<li>Work</li>
				<li>Contact</li>
			</ul>

			{/* Hamburger*/}
			<div className="hidden">
				<FaBars />
			</div>

			{/* Moblie menu*/}
			<ul className="hidden">
				<li>Home</li>
				<li>About</li>
				<li>Skills</li>
				<li>Work</li>
				<li>Contact</li>
			</ul>

			{/* Social icons*/}
			<div className="hidden"> </div>
		</div>
	)
}

export default Navbar
