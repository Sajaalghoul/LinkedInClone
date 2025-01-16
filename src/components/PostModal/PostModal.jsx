import React from "react";
import styles from "./PostModal.module.css";
import { useSelector } from "react-redux";
const PostModal = ({ handleModal }) => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className={styles.PostModal}>
      <div className={styles.PostModalContent}>
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
          placeholder="What do you want to talk about?"
          className="h-32 resize-none mb-44"
        />
        <div className="flex items-center gap-4 pl-2">
          <img
            src="../../assets/images/picture.svg"
            alt="photoAddIcon"
            className="w-4 cursor-pointer"
          />
          <img
            src="../../assets/images/video.svg"
            alt="videoAddIcon"
            className="w-6  cursor-pointer"
          />
          <img
            src="../../assets/images/plus.svg"
            alt="plusAddIcon"
            className="w-4 cursor-pointer"
          />
        </div>
        <div className="flex justify-end border-t-2 pt-2">
          <button className="text-white bg-blue-500 font-bold border p-3 rounded-3xl disabled:gray">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
