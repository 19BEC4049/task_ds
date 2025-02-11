import React from 'react';

const Layout4 = () => {
  return (
    <section className="bg-[#0063D3] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-[#FFB55A]">
            Prominent Characteristic Features
          </h2>
          <p className="text-white text-2xl md:text-3xl font-bold mt-2">
            Get on the Road with Confidence!
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img 
            src="/src/assets/images/Z_BTW_section.78479c8184d3bb1ddbe2.jpg" 
            alt="Driving Lessons" 
            className="w-full h-auto max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Pickup and Drop',
            description: 'Flexible online scheduling and free Pickup and Drop off within our radius!',
            icon: '🛻'
          },
          {
            title: 'Expert Instruction',
            description: 'Learn from licensed professionals with years of experience, ensuring top-notch Driving Lessons and safety.',
            icon: '🎓'
          },
          {
            title: 'Service Radius',
            description: 'Our Service Area covers a 15-mile radius beyond each of our convenient locations.',
            icon: '📍'
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md flex flex-col items-start">
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-lg font-bold mt-3">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Layout4;