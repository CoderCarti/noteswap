import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleSignupClick = () => {
    navigate('/signup')
  }

  return (
    <nav className="bg-[#ebe6e6] shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">YourLogo</span>
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
              <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-3 ">
           <ul className='flex flex-row gap-4'>
            <li onClick={handleLoginClick} className='cursor-pointer hover:text-green-500 transition duration-300'>Login</li>
            <li onClick={handleSignupClick} className='cursor-pointer hover:text-green-500 transition duration-300'>Signup</li>
           </ul>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg 
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#ebe6e6] shadow-md`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">Services</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white">Contact Us</a>
        <div className="py-2 px-4">
          <a href="#" className="block text-center py-2 px-2 text-sm bg-green-500 text-white rounded hover:bg-green-400 transition duration-300">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar