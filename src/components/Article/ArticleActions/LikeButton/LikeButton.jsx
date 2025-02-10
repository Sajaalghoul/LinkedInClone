import React, { useEffect, useState } from "react";
import { getLikesByUser, likePost } from "../../../../APIS/FireStoreAPI";

const LikeButton = ({ postId, userId, setLikesCount }) => {
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
  }, [userId, postId]);

  const handleLike = () => {
    likePost(postId, userId, liked, setLiked, setLikesCount);
  };

  return (
    <button className="flex gap-5 p-3" onClick={handleLike}>
      {liked ? (
        <img
          src="../../assets/images/heart-like.svg"
          alt="likeIcon"
          className="w-5"
        />
      ) : (
        <img
          src="../../assets/images/unlike.svg"
          alt="likeIcon"
          className="w-5"
        />
      )}
      <p>Like</p>
    </button>
  );
};

export default LikeButton;
