import React, { useState } from "react";
import styles from "./PostModal.module.css";
import { addPost } from "../../APIS/FireStoreApi";

import { useSelector } from "react-redux";
const PostModal = ({ handleModal }) => {
  const user = useSelector((state) => state.user.user);
  const [editorText, setEditorText] = useState("");

  const handleEditorText = (e) => {
    const value = e.target.value;
    setEditorText(value);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageUrl = reader.result;
        // setEditorText((prev) => prev + ` <img src="${imageUrl}" alt="img" /> `);
      };
    }
  };
  const handlePost = async (e) => {
    e.preventDefault();
    const posttext = editorText;
    try {
      await addPost({ text: posttext, user: user });
      await handleModal();
      setEditorText("");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  return (
    <div className={styles.PostModal}>
      <form className={styles.PostModalContent}>
        <header className={styles.PostModalHeader}>
          <span className="flex items-center gap-3 p-2 hover:bg-slate-200 cursor-pointer rounded-lg ">
            <img
              src={user?.photoURL}
              alt="userImage"
              className={styles.userImg}
            />
            <span className="flex flex-col gap-0">
              <p className="font-bold">{user?.displayName}</p>
              <p>Post to all</p>
            </span>
          </span>
          <img
            src="../../assets/images/close.svg"
            alt="close"
            className="w-6 cursor-pointer hover:rounded-md  hover:bg-gray-200"
            onClick={handleModal}
          />
        </header>
        <textarea
          value={editorText}
          onChange={handleEditorText}
          placeholder="What do you want to talk about?"
          className="h-32 resize-none mb-44"
          autoFocus={true}
        />
        <div className="flex items-center gap-4 pl-2">
          <div className="flex items-center gap-4 pl-2">
            <input
              type="file"
              id="file"
              name="image"
              accept="image/png, image/jpeg, image/gif"
              onChange={handleImageUpload}
              className={styles.hiddenFileInput}
            />
            <label htmlFor="file" className="cursor-pointer">
              <img
                src="../../assets/images/picture.svg"
                alt="photoAddIcon"
                className="w-4"
              />
            </label>
            <img
              src="../../assets/images/video.svg"
              alt="videoAddIcon"
              className="w-6 cursor-pointer"
            />
          </div>
          <img
            src="../../assets/images/plus.svg"
            alt="plusAddIcon"
            className="w-4 cursor-pointer"
          />
        </div>
        <div className="flex justify-end border-t-2 pt-2">
          <button
            type="submit"
            onClick={handlePost}
            className={`text-white bg-blue-500 font-bold border p-3 rounded-3xl disabled:gray ${
              editorText ? "bg-blue-500" : "bg-gray-300"
            }`}
            disabled={!editorText}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostModal;
