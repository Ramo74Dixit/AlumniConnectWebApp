import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="p-4 md:flex md:items-center">
      <div className="text-[#326C85] text-3xl font-bold m-3">
        AlumniConnect
      </div>
      <div className="hidden md:flex space-x-12 ml-auto">
        <Link to="/" className="text-black font-medium no-underline">
          Home
        </Link>
        <Link to="/event" className="text-black font-medium no-underline">
          Events
        </Link>
        <Link to="/donate" className="text-black font-medium no-underline">
          Donate
        </Link>
        <Link to="/job-portal" className="text-black font-medium no-underline">
          Job Portal
        </Link>
        
        <div className="relative" ref={dropdownRef}>
          <span 
            className="text-black font-medium no-underline cursor-pointer"
            onClick={toggleDropdown}
          >
            Registration 
          </span>
          {dropdownOpen && (
            <div className="absolute bg-white shadow-lg mt-2">
              <Link to="/register-college" className="block px-4 py-2 text-black font-medium no-underline">
                Register As College
              </Link>
              <Link to="/register-alumni" className="block px-4 py-2 text-black font-medium no-underline">
                Register As an Alumni
              </Link>
              <Link to="/register-student" className="block px-4 py-2 text-black font-medium no-underline">
                Register As a Student
              </Link>
            </div>
          )}
        </div>

        <Link to="/contact" className="text-black font-medium no-underline">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
