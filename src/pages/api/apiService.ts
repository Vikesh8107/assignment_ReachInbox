import axios from "axios";
import { getAuth } from "firebase/auth";

const apiBaseURL = "https://hiring.reachinbox.xyz/api/v1/onebox";

export const fetchEmails = async () => {
  const auth = getAuth();
  const idToken = await auth.currentUser?.getIdToken(true);

  if (idToken) {
    const response = await axios.get(`${apiBaseURL}/list`, {
      headers: { Authorization: `Bearer ${idToken}` },
    });
    return response.data.data;
  }
  throw new Error("No ID token available");
};

// Implement other API functions similarly
