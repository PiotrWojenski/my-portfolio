import { React, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import Logo from '../assets/piotr wojenski - logo.png'

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	const handleClick = () => setShowMenu(!showMenu)

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-300 bg-[#1e3b69]">
			<img src={Logo} alt="Logo" style={{ width: '50px' }} />

			{/* menu*/}

			<ul className="hidden md:flex ">
				<li className="hover:text-[#11AD72] duration-200">Home</li>
				<li className="hover:text-[#11AD72] duration-200">About</li>
				<li className="hover:text-[#11AD72] duration-200">Skills</li>
				<li className="hover:text-[#11AD72] duration-200">Work</li>
				<li className="hover:text-[#11AD72] duration-200">Contact</li>
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
						: '  absolute top-0 left-0 w-full h-screen bg-transparent  flex flex-col justify-center items-center'
				}>
				<li className="py-5 text-5xl">Home</li>
				<li className="py-5 text-5xl">About</li>
				<li className="py-5 text-5xl">Skills</li>
				<li className="py-5 text-5xl">Work</li>
				<li className="py-5 text-5xl">Contact</li>
			</ul>

			{/* Social icons*/}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/piotr-wojenski/"
							target="_blank"
							rel="noreferrer">
							Linkedin
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#373737]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/piotr-wojenski/"
							target="_blank"
							rel="noreferrer">
							Github
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c04646]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/piotr-wojenski/"
							target="_blank"
							rel="noreferrer">
							Email
							<HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#439868]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/piotr-wojenski/"
							target="_blank"
							rel="noreferrer">
							CV
							<BsFillPersonFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
