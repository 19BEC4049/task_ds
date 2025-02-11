import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      {/* Main Navbar */}
      <div className="flex flex-row items-center w-full">
        {/* Logo (Always Visible) */}
        <div className="w-2/3 md:w-[15%] flex justify-center">
          <img src="src/assets/logo.53fa7b598da42d10b26c.png" alt="Logo" className="h-16 p-0" />
        </div>

        <div className="w-[85%] flex flex-col items-center">
          {/* Blue Background Section (Hidden on Mobile) */}
          <div className="w-full flex-row justify-between items-center py-2 px-10 bg-[#1976D2] text-white hidden md:flex">
            <p>Mon-Fri (8am-8pm) / Sat & Sun (8am-6pm)</p>
            <p>info@1actdrivingschools.com</p>
            <p>Text 404-590-4570</p>
          </div>

          {/* Navbar Section */}
          <div className="w-full text-left p-0 flex justify-between items-center">
            {/* Desktop Navbar (Hidden on Mobile) */}
            <ul className="w-[83%] hidden md:flex justify-between text-xs font-bold px-5">
              <li className="hover:text-gray-300 cursor-pointer">DRIVING LESSONS/DRIVERS ED</li>
              <li className="hover:text-gray-300 cursor-pointer">ROAD TESTING</li>
              <li className="hover:text-gray-300 cursor-pointer">DEFENSIVE DRIVING</li>
              <li className="hover:text-gray-300 cursor-pointer">DUI/RISK REDUCTION</li>
              <li className="hover:text-gray-300 cursor-pointer">CLINICAL EVALUATION</li>
              <li className="hover:text-gray-300 cursor-pointer">VICTIM IMPACT</li>
              <li className="hover:text-gray-300 cursor-pointer">L`OCATIONS</li>
            </ul>

            {/* Click Me Button (Hidden on Mobile) */}
            <div className="w-[17%] h-14 bg-[#000] hidden md:flex items-center justify-center">
              <button className="bg-blue-500 text-white px-4 py-1 rounded">Click Me</button>
            </div>

            {/* Mobile Menu Toggle Button (Only on Mobile) */}
            <button className="w-1/3 flex justify-end md:hidden text-2xl text-[#1976D2]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
          </div>
        </div>
      </div>
      

      {/* Mobile Menu (Only on Mobile) */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-md p-5 z-50 md:hidden">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-4">
            <img src="src/assets/logo.53fa7b598da42d10b26c.png" alt="Logo" className="h-16" />
            <button className="text-2xl text-[#1976D2]" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col space-y-4 text-lg font-bold text-[#1976D2]">
            <li className="hover:text-gray-500 cursor-pointer">DRIVING LESSONS/DRIVERS ED</li>
            <li className="hover:text-gray-500 cursor-pointer">ROAD TESTING</li>
            <li className="hover:text-gray-500 cursor-pointer">DEFENSIVE DRIVING</li>
            <li className="hover:text-gray-500 cursor-pointer">DUI/RISK REDUCTION</li>
            <li className="hover:text-gray-500 cursor-pointer">CLINICAL EVALUATION</li>
            <li className="hover:text-gray-500 cursor-pointer">VICTIM IMPACT</li>
            <li className="hover:text-gray-500 cursor-pointer">LOCATIONS</li>
          </ul>

          {/* Mobile Login Button */}
          <div className="mt-6">
            <button className="w-full bg-[#1976D2] text-white py-2 rounded-md">
              LOGIN
            </button>
          </div>

          {/* Call & Text Buttons */}
          <div className="mt-4 flex flex-col gap-3">
            <button className="w-full bg-green-500 text-white py-2 rounded-md">
              Call 770-274-4223
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded-md">
              Text 404-590-4570
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
