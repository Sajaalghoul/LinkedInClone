import styles from "./ArticleActions.module.css";
import CommentSection from "./CommentSection/CommentSection";
import LikeButton from "./LikeButton/LikeButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getComments } from "../../../APIS/FireStoreAPI";

const ArticleActions = ({ postId, userId }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [commentShow, setCommentShow] = useState(false);
  const comments = useSelector((state) => state.comments.comments).filter(
    (comment) => comment.postId === postId
  );
  const dispatch = useDispatch();
  const toggleCommentSection = () => {
    setCommentShow((prev) => !prev);
  };
  useEffect(() => {
    getComments(dispatch);
  }, [dispatch]);

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
        <LikeButton
          postId={postId}
          userId={userId}
          setLikesCount={setLikesCount}
        />
        <button className={styles.Action} onClick={toggleCommentSection}>
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
      {commentShow ? (
        <CommentSection
          postId={postId}
          toggleCommentSection={toggleCommentSection}
        />
      ) : (
        <ul className="m-2 p-2   flex flex-col gap-2">
          {comments.map((comment) => (
            <li key={comment.id} className="flex flex-col gap-2 bg-slate-50 p-1">
              <div className="flex justify-between">
                <p>{comment.user.displayName}</p>
                <p>{comment.timePosted}</p>
              </div>
              <p className="m-2">{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ArticleActions;
