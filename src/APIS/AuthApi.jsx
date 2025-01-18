import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    return error;
  }
};
export const registerWithEmail = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  } catch (error) {
    return error;
  }
};

export const signInWithGoogle = async () => {
  try {
    await signOut(auth);
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    return error;
  }
};
