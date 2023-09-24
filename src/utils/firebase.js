// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD0XM9TRIr0ox3iZ96AEnnLBMgR2CsIj8",
  authDomain: "netflixgpt-ecbc0.firebaseapp.com",
  projectId: "netflixgpt-ecbc0",
  storageBucket: "netflixgpt-ecbc0.appspot.com",
  messagingSenderId: "529064983844",
  appId: "1:529064983844:web:025789a987bf8455ee87b1",
  measurementId: "G-PSHGYK2DHB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
