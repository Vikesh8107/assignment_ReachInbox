// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);