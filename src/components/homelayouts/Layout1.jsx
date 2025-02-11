import React from 'react';

export default function Layout1() {
  return (
    <section className="py-10 bg-[#0063D3]">
      <div className="w-[90%] md:w-[80%] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Section - Text & Button */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFB55A] leading-tight">
              "Get Ahead of the Curve,<br /> Driving Lessons"
            </p>
            
            <ul className="my-6 space-y-2 text-white text-lg">
              <li>Empowering you to become a Safe, Confident, and Responsible Driver</li>
              <li>Empowering you to become a Safe, Confident, and Responsible Driver</li>
            </ul>

            <button className="bg-[#FFB55A] text-black font-semibold py-2 px-6 rounded-lg hover:bg-[#E69C45] transition">
              Enquire Us
            </button>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img 
              src="/src/assets/images/combopageimage.9a160a494e1b4c8d33b1 (1).png" 
              alt="Driving Lessons" 
              className="w-full h-auto max-w-md md:max-w-full mx-auto md:mx-0 object-cover rounded-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
