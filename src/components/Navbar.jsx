import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Ref for dropdown menu to detect clicks outside
  const menuRef = useRef(null);
  const buttonRef = useRef(null); // Ref for button to prevent closing on its own click

  useEffect(() => {
    // Handler for closing dropdown when clicking outside
    const handler = (e) => {
      // Close dropdown if click is outside the dropdown menu or button
      if (menuRef.current && !menuRef.current.contains(e.target) && !buttonRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Adding the event listener
    document.addEventListener("mousedown", handler);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <nav className=" bg-stone-800 p-2 w-full flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo */}
      <Link to="/"><img
        className=" md:hidden object-cover h-15 w-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
        src={LogoImg}
        alt="Logo"
      /></Link>
      <div className=" hidden sm:hidden md:flex flex-1 text-4xl ml-6">
            <Link to="/" className="custom-link">
            Portfolio</Link>
      </div>

      <div className="md:w-3/5 lg:w-2/4 sm:w-2/5 xl:w-2/5">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-6 lg:space-x-12">
          <li><Link to="/" className="custom-link text-2xl">Home</Link></li>
          <li><Link to="/about" className="custom-link text-2xl">About</Link></li>
          <li><Link to="/project" className="custom-link text-2xl">Projects</Link></li>
          <li><Link to="/contact" className="custom-link text-2xl">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        // Reference for the button to avoid closing dropdown when clicking the button itself
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="button-color md:hidden bg-gray-300 px-4 py-2 rounded-lg"
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}  // Ref for the dropdown menu
        className={`dropdown absolute top-12 right-2 bg-gray-100 rounded-lg shadow-lg w-40 md:hidden transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } z-50`}
      >
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-1 rounded-tr-lg rounded-tl-lg">
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-1">
            About
          </Link>
          <Link to="/project" onClick={() => setIsOpen(false)} className="block px-4 py-1">
            Projects
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-1 rounded-bl-lg rounded-br-lg">
            Contact
          </Link>
        </div>
    </nav>
  );
}

export default Navbar;