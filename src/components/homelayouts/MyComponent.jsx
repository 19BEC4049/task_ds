import { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://testoneactdevapi.projectsideaboxdigital.io.in/api/v1/getAllCourse",
          { type: "" },
          { headers: { "Content-Type": "application/json" } }
        );

        console.log("Full API Response:", response.data);

        // Ensure response is structured correctly
        if (response.data && Array.isArray(response.data.response)) {
          setResponseData(response.data.response);
        } else {
          console.warn("Unexpected API response format:", response.data);
          setResponseData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Packages List</h2>

      {responseData.length > 0 ? (
        responseData.map((course, courseIndex) => (
          <div key={courseIndex}>
            {/* Check if courseDetails exists and is an array */}
            {Array.isArray(course.
            courseDetails) ? (
              course.courseDetails.map((detail, detailIndex) => (
                <div key={detailIndex} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                  <h3>Package {detailIndex + 1}</h3>
                  <p><strong>Package Name:</strong> {detail.packagename || "N/A"}</p>
                  <p><strong>Duration:</strong> {detail.duration || "N/A"} hours</p>
                  <p><strong>Price:</strong> ${detail.packageamount || "N/A"}</p>
                  <p><strong>Discount:</strong> {detail.discount || "0"}%</p>
                  <p><strong>Discount Price:</strong> ${detail.discountprice || "N/A"}</p>
                  {detail.productimage && <img src={detail.productimage} alt="Package Image" style={{ width: "200px", height: "auto" }} />}
                </div>
              ))
            ) : (
              <p>No course details available</p>
            )}
          </div>
        ))
      ) : (
        <p>Loading packages...</p>
      )}
    </div>
  );
};

export default MyComponent;
