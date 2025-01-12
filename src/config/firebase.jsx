// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjdYcn1ijfENijm88SzVrM2rlyYL6fJJM",
  authDomain: "linkedin-clone-f3911.firebaseapp.com",
  projectId: "linkedin-clone-f3911",
  storageBucket: "linkedin-clone-f3911.firebasestorage.app",
  messagingSenderId: "784608475930",
  appId: "1:784608475930:web:ea90d3b3296450a3e48aa3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
