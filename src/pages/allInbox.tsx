import { useEffect } from "react";
import axios from "axios";

const AllInboxPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch token from local storage
        const idToken = localStorage.getItem("idToken");
        console.log("ID Token: ", idToken);

        if (idToken) {
          const response = await axios.get(
            "https://hiring.reachinbox.xyz/api/v1/onebox/list",
            {
              headers: {
                Authorization: `Bearer ${idToken}`,
              },
            }
          );
          console.log("Data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Your component code */}
      This is the Onebox page.
    </div>
  );
};

export default AllInboxPage;
