import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider(app);
