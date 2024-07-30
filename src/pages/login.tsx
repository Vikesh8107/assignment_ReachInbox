import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const router = useRouter();

  const handleSingInWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userEmail = user?.email;
      const userName = userEmail?.split("@")[0];

      // Fetch ID Token
      const idToken = await user.getIdToken(true);
      console.log("ID Token: ", idToken);

      // Store token in local storage or session storage
      localStorage.setItem("idToken", idToken);

      // Redirect to Welcome page after successful login
      router.push({
        pathname: "/allInbox",
        query: { userName },
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex justify-center items-center bg-black text-white p-4 border-b border-gray-800 font-serif">
        <img
          src="./logo.jpeg"
          alt="ReachInbox logo"
          className="h-8 mr-2 block rounded-sm"
        />
        <h2 className="text-xl">ReachInbox</h2>
      </header>
      <main className="flex-1 flex justify-center items-center text-center">
        <div className="bg-gray-900 p-10 px-24 rounded-lg shadow-md">
          <h1 className="text-2xl mb-5">Create a new account</h1>
          <div className="flex flex-col items-center">
            <button
              className="flex items-center justify-center bg-transparent border border-gray-600 rounded-md p-3 text-white cursor-pointer transition duration-300 hover:bg-gray-800 hover:border-gray-500 mb-5"
              aria-label="Sign Up with Google"
              onClick={handleSingInWithGoogle}
            >
              <img
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                alt="Google logo"
                className="w-5 h-5 mr-2"
              />
              Sign Up with Google
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-md mb-5">
              Create an Account
            </button>
            <p className="mt-5">
              Already have an account?{" "}
              <a href="/sign-in" className="text-gray-300 font-bold">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-gray-400 text-center p-4">
        <p className="m-0 text-sm">© 2024 ReachInbox. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
