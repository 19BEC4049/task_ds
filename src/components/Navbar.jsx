import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white flex justify-between px-4 md:px-16 py-2 text-sm">
        <span>Mon-Fri (8am-8pm) / Sat & Sun (8am-6pm)</span>
        <span>info@1actdrivingschools.com</span>
        <div className="hidden md:flex gap-2">
          <button className="bg-green-500 px-4 py-1 rounded-md text-white">
            Call 770-274-4223
          </button>
          <button className="bg-green-500 px-4 py-1 rounded-md text-white">
            Text 404-590-4570
          </button>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-semibold text-xs">
            <li className="relative group">
              <a href="#" className="hover:text-blue-600">DRIVING LESSONS/DRIVERS ED</a>
              <div className="absolute left-0 top-8 bg-white shadow-md w-48 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
              </div>
            </li>
            <li><a href="#" className="hover:text-blue-600">ROAD TESTING</a></li>
            <li className="relative group">
              <a href="#" className="hover:text-blue-600">DEFENSIVE DRIVING</a>
              <div className="absolute left-0 top-8 bg-white shadow-md w-48 hidden group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
              </div>
            </li>
            <li><a href="#" className="hover:text-blue-600">DUI/RISK REDUCTION</a></li>
            <li><a href="#" className="hover:text-blue-600">CLINICAL EVALUATION</a></li>
            <li><a href="#" className="hover:text-blue-600">VICTIM IMPACT</a></li>
            <li><a href="#" className="hover:text-blue-600">LOCATIONS</a></li>
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex">
            <button className="bg-black text-white px-4 py-2 rounded-md">LOGIN</button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white shadow-md px-4 py-3 space-y-2">
            <li><a href="#" className="block">DRIVING LESSONS/DRIVERS ED</a></li>
            <li><a href="#" className="block">ROAD TESTING</a></li>
            <li><a href="#" className="block">DEFENSIVE DRIVING</a></li>
            <li><a href="#" className="block">DUI/RISK REDUCTION</a></li>
            <li><a href="#" className="block">CLINICAL EVALUATION</a></li>
            <li><a href="#" className="block">VICTIM IMPACT</a></li>
            <li><a href="#" className="block">LOCATIONS</a></li>
            <li>
              <button className="bg-black text-white w-full px-4 py-2 rounded-md">LOGIN</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
