// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';


// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }


// _app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHacR-WUY-Pe0_PVenCg7snHdraQzMBUk",
  authDomain: "loginsignup-5039d.firebaseapp.com",
  projectId: "loginsignup-5039d",
  storageBucket: "loginsignup-5039d.appspot.com",
  messagingSenderId: "42722889591",
  appId: "1:42722889591:web:d5ddd0fd80149117061b72",
  measurementId: "G-1JKBBN9SC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error('Error setting persistence:', error);
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
