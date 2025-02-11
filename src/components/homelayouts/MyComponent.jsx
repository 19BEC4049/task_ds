import { useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [responseData, setResponseData] = useState(null);

  const postData = async () => {
    try {
      const response = await axios.post(
        "https://testoneactdevapi.projectsideaboxdigital.io.in/api/v1/checkPackageisExist",
        {
          // 🔥 Add required data here
          packageId: "12345",
          userId: "67890",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResponseData(response.data);
      console.log(responseData);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div>
      <h2>POST API Response:</h2>
      <button onClick={postData}>Send POST Request</button>
      <pre>{JSON.stringify(responseData, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
