import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { setPosts } from "../state/posts/postSlice";
import { setUser } from "../state/User/UserSlice";

let postsDbRef = collection(db, "posts");

export const addPostToStorage = async (post) => {
  try {
    const docRef = await addDoc(postsDbRef, post);
    toast.success("post added Successfulty");
  } catch (e) {
    toast.error("Error adding the post");
  }
};
export const getPosts = async (dispatch) => {
  try {
    const querySnapshot = await getDocs(postsDbRef);
    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setPosts(posts));
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }
};

let usersDbRef = collection(db, "users");
export const addUserToStorage = async (user) => {
  try {
    const docRef = await addDoc(usersDbRef, user);
    toast.success("user added Successfulty");
  } catch (e) {
    toast.error("Error adding the user");
  }
};

export const getCurrentUser = async (dispatch) => {
  try {
    const { email } = JSON.parse(localStorage.getItem("currentuser"));
    const querySnapshot = await getDocs(usersDbRef);
    const currentUser = querySnapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((doc) => doc.email === email)[0];
    localStorage.setItem("currentuser", JSON.stringify(currentUser));
    dispatch(setUser(currentUser));
    // toast.success("user get Successfulty");
  } catch (e) {
    toast.error("Error getting the user");
  }
};

export const updateCurrentUser = async (updatedData,dispatch) => {
  const { id } = JSON.parse(localStorage.getItem("currentuser"));
  console.log(id);
  try {
    const userDocRef = doc(usersDbRef, id);
    await updateDoc(userDocRef, updatedData);
    dispatch(setUser(updatedData));
    await getCurrentUser(dispatch);
    toast.success("User updated successfully!");
  } catch (e) {
    toast.error("Error updating the user.");
  }
};
