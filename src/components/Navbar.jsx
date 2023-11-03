import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import Logo from '../assets/piotr wojenski - logo.png'

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	const handleClick = () => setShowMenu(!showMenu)

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e2241] text-gray-300">
			<img src={Logo} alt="Logo" style={{ width: '50px' }} />

			{/* menu*/}
			<ul className="hidden md:flex">
				<li>Home</li>
				<li>About</li>
				<li>Skills</li>
				<li>Work</li>
				<li>Contact</li>
			</ul>
			{/* Hamburger*/}
			<div onClick={handleClick} className="md:hidden text-2xl z-10 cursor-pointer">
				{showMenu ? <FaTimes /> : <FaBars />}
			</div>

			{/* Moblie menu*/}
			<ul
				className={
					!showMenu
						? 'hidden'
						: '  absolute top-0 left-0 w-full h-screen bg-[#0e2241]  flex flex-col justify-center items-center'
				}>
				<li className="py-5 text-4xl">Home</li>
				<li className="py-5 text-4xl">About</li>
				<li className="py-5 text-4xl">Skills</li>
				<li className="py-5 text-4xl">Work</li>
				<li className="py-5 text-4xl">Contact</li>
			</ul>

			{/* Social icons*/}
			<div className="flex fixed flex-col top-[35%] left-0">
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
