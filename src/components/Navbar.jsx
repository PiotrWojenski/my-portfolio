import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo-PW (2).png'

const Navbar = () => {
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e2241] text-gray-300">
			<div>
				<img src={Logo} alt="Logo PW" style={{ width: '60px' }} />
			</div>
		</div>
	)
}

export default Navbar
