import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" p-4 md:flex md:items-center ">
      <div className="text-[#326C85] text-3xl font-bold m-3 ">
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
        <Link to="/contact" className="text-black font-medium no-underline">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
