import React, { useState } from "react";

const PricingSection = () => {
  const [selectedHours, setSelectedHours] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleSelection = (hours) => {
    const price = ((hours * 70) * 0.85).toFixed(2);
    setSelectedHours(hours);
    setSelectedPrice(price);



    
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto p-4">
      {/* Offer Banner */}
      <div className="text-center text-3xl my-3 font-semibold">Behind-the-Wheel</div>
      <div className="bg-purple-500 text-white text-center font-bold py-3 rounded-lg">
        Get 15% off this Valentine's season - Offer valid from Feb 01 to Feb 28, 2025!
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-100 p-6 mt-4 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="md:basis-1/3 flex flex-col justify-center md:text-left text-center">
          <h2 className="text-2xl font-bold text-black">Gear Up for Your Driver's License!</h2>
          <p className="text-gray-500">Select Hours - Pick Your Time Slots</p>
        </div>

        {/* Pricing Options */}
        <div className="md:basis-5/6 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 overflow-y-auto h-[200px]">
          {[20, 22, 24, 26, 28, 30, 40, 10, 101, 20, 40, 70, 80].map((hours, index) => (
            <label
              key={index}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm bg-white cursor-pointer"
            >
              <input
                type="radio"
                name="hours"
                className="mr-2"
                onChange={() => handleSelection(hours)}
              />
              <span>{hours} Hours</span>
              <span className="text-lg font-bold text-black">
                ${((hours * 70) * 0.85).toFixed(2)}
              </span>
              <span className="text-gray-500 line-through">${hours * 70}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Combo Offers Section */}
      <div
        className="text-white p-6 mt-6 rounded-lg flex flex-col md:flex-row bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/images/download.jpg')",
        }}
      >
        <div className="md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl text-black font-bold">COMBO <br /> OFFERS <br /> FOR YOU</h2>
        </div>

        <div className="md:w-3/4">
          <p className="text-sm text-center md:text-left mb-4">
            BUNDLE UP & SAVE - Click Below Course And Buy as a Package
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Drivers Education / Joshua’s Law", price: 124 },
              { name: "Road Testing", price: 125, original: 150 },
              { name: "Defensive Driving", price: 75, original: 95 },
            ].map((offer, index) => (
              <label
                key={index}
                className="flex items-center justify-between bg-white text-black p-4 rounded-lg shadow-sm cursor-pointer"
              >
                <input type="checkbox" className="mr-2" />
                <span>{offer.name}</span>
                <span className="text-lg font-bold">${offer.price}</span>
                {offer.original && (
                  <span className="text-gray-500 line-through">${offer.original}</span>
                )}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <h1 className="text-2xl font-bold mt-5">
        {selectedHours ? `${selectedHours} hours of Behind The Wheels` : "Select Hours"}
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-2">
        <h1 className="text-2xl font-bold">
          {selectedPrice ? `$${selectedPrice}` : "$0.00"}
        </h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          Buy Now
        </button>
      </div>

      <p className="mt-3 text-md font-semibold text-center sm:text-left">
        Please note: Teens Age 16 & 17 are required to take the 30-hour Driver's Education class in order to take their Driver's License.
      </p>
    </div>
  );
};

export default PricingSection;