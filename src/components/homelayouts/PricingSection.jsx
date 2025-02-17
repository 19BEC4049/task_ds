import { useState, useEffect } from "react";
import axios from "axios";


const PricingSection = () => {
  const [behindTheWheelData, setBehindTheWheelData] = useState(null);
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHours, setSelectedHours] = useState(2);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [comboDataResponse, setComboDataResponse] = useState(null);

  // Fetch Course Data
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://testoneactdevapi.projectsideaboxdigital.io.in/api/v1/getAllCourse",
        { type: "" },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data?.response?.length > 0) {
        setBehindTheWheelData(response.data.response[0]);
        const filteredData = response.data.response.filter(item => [3, 4, 5].includes(item.productid));
        setAllCourses(filteredData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch Combo Data (Updated to Send Dynamic Selection)
  const comboData = async () => {
    if (!behindTheWheelData) return; // Ensure data is available

    try {
      const selectedHourPackage = behindTheWheelData?.courseDetails?.find(
        (detail) => detail.duration === selectedHours
      )?.packageid;

      const selectedCoursePackages = allCourses
        .filter((course) => selectedCourse.includes(course.productname))
        .map((course) => course.courseDetails[0].packageid);

      const packageIds = selectedHourPackage ? [selectedHourPackage, ...selectedCoursePackages] : selectedCoursePackages;

      if (packageIds.length === 0) {
        console.warn("No package IDs selected");
        return;
      }

      const response = await axios.post(
        "https://testoneactdevapi.projectsideaboxdigital.io.in/api/v1/checkPackageisExist",
        { packageid: packageIds, studentid: 0 }
      );

      console.log("Combo Data Response:", response.data);
      setComboDataResponse(response.data.response); // Store the response data
    } catch (error) {
      console.error("Error fetching combo data:", error);
    }
  };

  // Call fetchData on mount
  useEffect(() => {
    fetchData();
  }, []);

  // Call comboData when selectedHours or selectedCourse updates
  useEffect(() => {
    comboData();
  }, [selectedHours, selectedCourse, behindTheWheelData]);

  const handleHourSelection = (duration) => {
    setSelectedHours(duration);
  };

  const handleSelection = (productName) => {
    setSelectedCourse((prevSelected) =>
      prevSelected.includes(productName)
        ? prevSelected.filter((item) => item !== productName) // Remove if already selected
        : [...prevSelected, productName] // Add if not selected
    );
  };

  const getPricing = (course, index) => {
    if (!selectedHours) return course.courseDetails[0].packageamount;
    if (selectedHours < 6) {
      return index === 1 ? course.courseDetails[0].packageamount : course.courseDetails[0].combopackageamount1;
    }
    if (selectedHours >= 6 && selectedHours < 12) {
      return course.courseDetails[0].combopackageamount1;
    }
    return course.courseDetails[0].combopackageamount2;
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto p-4">
      <div className="text-center text-3xl my-3 font-semibold">Behind-the-Wheel</div>
      <div className="bg-purple-500 text-white text-center font-bold py-3 rounded-lg">
        <p>Get 15% off this Valentine’s season - Offer valid from Feb 01 to Feb 28, 2025!</p>
      </div>

      <div className="bg-gray-100 p-6 mt-4 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="md:basis-1/3 flex flex-col justify-center md:text-left text-center">
          <h2 className="text-2xl font-bold text-black">Gear Up for Your Driver’s License!</h2>
          <p className="text-gray-500">Select Hours - Pick Your Time Slots</p>
        </div>

        <div className="md:basis-5/6 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 overflow-y-auto h-[200px]">
          {loading ? (
            <p>Loading packages...</p>
          ) : behindTheWheelData ? (
            behindTheWheelData.courseDetails?.map((detail, index) => (
              <label key={index} className="flex items-center justify-between border p-4 rounded-lg shadow-sm bg-white cursor-pointer">
                <input
                  type="radio"
                  name="hours"
                  className="mr-2"
                  onChange={() => handleHourSelection(detail.duration)}
                  checked={selectedHours === detail.duration}
                />
                <span>{detail.duration} Hours</span>
                <div className="flex flex-col">
                  <span className="text-md font-bold text-black">${detail.discountprice}</span>
                  <span className="text-gray-500 line-through">${detail.packageamount}</span>
                </div>
              </label>
            ))
          ) : (
            <p>No course details available</p>
          )}
        </div>
      </div>

      <div className="text-white p-6 mt-6 rounded-lg flex flex-col md:flex-row bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/download.jpg')" }}>
        <div className="md:w-1/4 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl text-black font-bold">COMBO <br /> OFFERS <br /> FOR YOU</h2>
        </div>
        <div className="md:w-3/4">
          <p className="text-sm text-center md:text-left mb-4">
            BUNDLE UP & SAVE - Click Below Course And Buy as a Package
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {loading ? (
              <p>Loading offers...</p>
            ) : allCourses.length >= 3 ? (
              allCourses.map((course, index) => (
                <label key={index} className="flex items-center justify-between bg-white text-black p-4 rounded-lg shadow-sm cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => handleSelection(course.productname)}
                    checked={selectedCourse.includes(course.productname)}
                  />
                  <span>{course.productname}</span>
                  <span className="text-lg font-bold">${getPricing(course, index)}</span>
                  <span className="text-gray-500 line-through">${course.courseDetails[0].packageamount}</span>
                </label>
              ))
            ) : (
              <p>Not enough data available.</p>
            )}
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold mt-5">{selectedHours ? `${selectedHours} hours of Behind The Wheels` : "Select Hours"}</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mt-2">
        <h1 className="text-2xl font-bold">{selectedHours ? `$${selectedHours * 40}` : "$0.00"}</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">Buy Now</button>
      </div>

      {comboDataResponse && (
  <div className="mt-4 p-4 bg-white shadow-lg rounded-lg">
    <h2 className="text-xl font-bold text-black">Combo Package Details</h2>
    <p className="text-gray-600">Final Cost: ${comboDataResponse.finalcost}</p>
    <p className="text-gray-600">Discount Price: ${comboDataResponse.discountprice}</p>
    <h3 className="text-lg font-semibold mt-2">Included Packages:</h3>
    <ul className="list-disc pl-5">
      {comboDataResponse.packages?.map((pkg, index) => (
        <li key={index} className="text-gray-700">
          {pkg.packagename} - ${pkg.discountprice}
        </li>
      ))}
    </ul>
  </div>
)}

    </div>
  );
};

export default PricingSection;
