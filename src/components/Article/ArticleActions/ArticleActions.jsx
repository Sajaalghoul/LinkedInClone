import styles from "./ArticleActions.module.css";
import LikeButton from "./LikeButton/LikeButton";
import { useState } from "react";
const ArticleActions = ({postId,userId}) => {
    const [likesCount, setLikesCount] = useState(0);
  return (
    <>
      <div className={styles.articleActionsNumber}>
        <img
          src="../../assets/images/like.svg"
          alt="likeIcon"
          className={styles.ActionImage}
        />
        <p className={styles.reactionsNumber}>{likesCount}</p>
        <p className={styles.commentsNumber}>81 comments.</p>
        <p className={styles.repostsNumber}>90 reposts</p>
      </div>
      <div className={styles.articlActions}>
        <LikeButton postId={postId} userId={userId} setLikesCount={setLikesCount}/>
        <button className={styles.Action}>
          <img
            src="../../assets/images/comment.svg"
            alt="commentIcon"
            className={styles.ActionImage}
          />
          <p className={styles.ActionTitle}>comment</p>
        </button>
        <button className={styles.Action}>
          <img
            src="../../assets/images/repost.svg"
            alt="repostIcon"
            className={styles.ActionImage}
          />
          <p className={styles.ActionTitle}>repost</p>
        </button>
        <button className={styles.Action}>
          <img
            src="../../assets/images/send.svg"
            alt="sendIcon"
            className={styles.ActionImage}
          />
          <p className={styles.ActionTitle}>send</p>
        </button>
      </div>
    </>
  );
};

export default ArticleActions;
