import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
let dbRef = collection(db, "posts");
import { toast } from "react-toastify";
export const addPost = async (post) => {
  try {
    const docRef = await addDoc(dbRef, post);
    toast.success("added Successfulty");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding the post: ", e);
    toast.error("Error adding the post");
  }
};
