import { React, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import Logo from '../assets/piotr wojenski - logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	const handleClick = () => setShowMenu(!showMenu)

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-6  text-gray-300 bg-[#0a192f]">
			<img src={Logo} alt="Logo" style={{ width: '50px' }} />

			{/* menu*/}

			<ul className="hidden md:flex ">
				<li className="hover:text-[#11AD72] duration-200">
					{' '}
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="hover:text-[#11AD72] duration-200">
					{' '}
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="hover:text-[#11AD72] duration-200">
					{' '}
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="hover:text-[#11AD72] duration-200">
					{' '}
					<Link to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className="hover:text-[#11AD72] duration-200">
					{' '}
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
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
						: '  absolute top-0 left-0 w-full bg-[#0a192f] h-screen flex flex-col justify-center items-center'
				}>
				<li className="py-5 text-5xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-5 text-5xl">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-5 text-5xl">
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-5 text-5xl">
					<Link onClick={handleClick} to="work" smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className="py-5 text-5xl">
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
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
							href="https://github.com/piow"
							target="_blank"
							rel="noreferrer">
							Github
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c04646]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="pwojenskip@gmail.com"
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
