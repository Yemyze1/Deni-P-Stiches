import React from 'react'

const Nav = () => {
  return (
    <nav className="bg-indigo-900 flex items-center justify-between px-25 py-4">
      <h1 className="text-white text-2xl hover:text-indigo-600 cursor-pointer font-bold">Deni-P Stiches</h1>
      <ul className="flex space-x-6">
        <a href="#home"><li className="text-white hover:text-indigo-300 cursor-pointer">Home</li></a>
        <a href="#about"><li className="text-white hover:text-indigo-300 cursor-pointer">About Us</li></a>
        <a href="#collections"><li className="text-white hover:text-indigo-300 cursor-pointer">Collections</li></a>
       <a href="#contact"> <li className="text-white hover:text-indigo-300 cursor-pointer">Contact Us</li></a>
        <a href="#bottom"><li className="text-white hover:text-indigo-400 cursor-pointer">Bottom</li></a>
      </ul>
    </nav>
  )
}

export default Nav