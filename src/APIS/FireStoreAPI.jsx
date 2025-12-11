import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  getDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { setPosts } from "../state/posts/postSlice";
import { setUser } from "../state/user/userSlice";
import { setComments } from "../state/comments/commentSlice";
// posts collection
let postsDbRef = collection(db, "posts");

export const addPostToStorage = async (post) => {
  try {
    const docRef = await addDoc(postsDbRef, post);
    toast.success("Post added successfully");
    return docRef.id;
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
export const editPostFromStorage=async(id,updatedData)=>{
  try { 
    const postDocRef = doc(postsDbRef, id);
    await updateDoc(postDocRef, updatedData);
    toast.success("Post updated successfully!");
  } catch (e) {
    toast.error("Error updating the post.");
}}

export const deletePostFromStorage = async (postId) => {
  console.log(postId);
  try {
    const postDocRef = doc(postsDbRef, postId);
    await deleteDoc(postDocRef);
    toast.success("Post deleted successfully!");
  } catch (e) {
    toast.error("Error deleting the post.");
  }
};
// users collection
let usersDbRef = collection(db, "users");
export const addUserToStorage = async (user) => {
  console.log(user);
  try {
    await addDoc(usersDbRef, user);
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
  } catch (e) {
    toast.error("Error getting the user");
  }
};

export const updateCurrentUser = async (updatedData, dispatch) => {
  const { id } = JSON.parse(localStorage.getItem("currentuser"));
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
// likes collection
let likesDbRef = collection(db, "likes");

export const likePost = async (
  postId,
  userId,
  liked,
  setLiked,
  setLikesCount
) => {
  try {
    const docId = `${userId}_${postId}`;
    const docRef = doc(likesDbRef, docId);
    console.log(liked);
    if (!liked) {
      await setDoc(docRef, { userId, postId });
      setLikesCount((prev) => prev + 1);
      toast.success("Post liked");
    } else {
      await deleteDoc(docRef);
      setLikesCount((prev) => prev - 1);
      toast.success("Like removed");
    }
    setLiked(!liked); // Move the state update here
  } catch (e) {
    toast.error("Error liking the post");
    console.error("Error liking the post: ", e);
  }
};
export const getLikesByUser = async (
  userId,
  postId,
  setLiked,
  setLikesCount
) => {
  try {
    console.log("in get");
    const likesQuery = query(likesDbRef, where("postId", "==", postId));
    const querySnapshot = await getDocs(likesQuery);
    const likes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setLikesCount(likes.length);
    const isLiked = likes.some((like) => like.userId === userId);
    setLiked(isLiked);
  } catch (error) {
    console.error("Error fetching likes: ", error);
  }
};
// // comments collection
let commentsDbRef = collection(db, "comments");

export const addCommentToStorage = async (comment) => {
  try {
    await addDoc(commentsDbRef, comment);
    toast.success("comment added Successfulty");
  } catch (e) {
    toast.error("Error adding the comment");
  }
};
export const getComments = async (dispatch) => {
  try {
    const querySnapshot = await getDocs(commentsDbRef);
    const comments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setComments(comments));
  } catch (error) {
    console.error("Error fetching comments: ", error);
  }
};

export const checkUserExistsInStorage = async (uid) => {
  const userRef = doc(db, "users", uid);
  try {
    const userSnap = await getDoc(userRef);
    return userSnap.exists();
  } catch (error) {
    console.error("Error checking user existence: ", error);
    return false;
  }
};
