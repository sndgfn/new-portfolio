import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto px-6 flex items-center justify-between text-white">
        <Link to="/" className="font-bold text-xl">Portfolio</Link>
        <div className="flex items-center gap-4">
          <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link to="/credentials" className="text-gray-300 hover:text-white">Credentials</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
