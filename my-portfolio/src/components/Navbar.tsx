"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-blue-600 cursor-pointer">Abhishek Mehta</h1>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600 transition duration-300">Home</Link>
          <Link href="/about" className="hover:text-blue-600 transition duration-300">About</Link>
          <Link href="/projects" className="hover:text-blue-600 transition duration-300">Projects</Link>
          <Link href="/resume" className="hover:text-blue-600 transition duration-300">Resume</Link>
          <Link href="/contact" className="hover:text-blue-600 transition duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navbar Links */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute top-16 left-0 w-full text-center py-4`}
      >
        <Link href="/" className="block py-2 hover:text-blue-600">Home</Link>
        <Link href="/about" className="block py-2 hover:text-blue-600">About</Link>
        <Link href="/projects" className="block py-2 hover:text-blue-600">Projects</Link>
        <Link href="/resume" className="block py-2 hover:text-blue-600">Resume</Link>
        <Link href="/contact" className="block py-2 hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
