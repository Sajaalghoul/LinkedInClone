import styles from "./ArticleHeader.module.css";
import { timeAgo } from "../../../utils/timeUtils/timeAgo";
import { useState } from "react";
import { deletePostFromStorage } from "../../../APIS/FireStoreAPI";
import { deletePost } from "../../../state/posts/postSlice";
import { useDispatch } from "react-redux";
import PostModal from "../../common/PostModal/PostModal";
const ArticleHeader = ({ user, timePosted, postId, text, image }) => {
  const [OpenModal, setOpenModal] = useState(false);
  const userId = JSON.parse(localStorage.getItem("currentuser")).id;
  const dispatch = useDispatch();
  // use the hook ya saja for the dispatch(reminder)
  const handleDelete = async () => {
    await deletePostFromStorage(postId);
    dispatch(deletePost(postId));
  };
  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };
  return (
    <div className={styles.articleHeader}>
      <img
        src={user?.photoURL || "../../assets/images/user.svg"}
        alt="ArticleUserImage"
        className={styles.UserImg}
      />
      <div className={styles.articleHeaderDetails}>
        <span className={styles.detailsNameAndDegree}>
          <p className={styles.detailsName}>{user?.displayName}</p>
          <p className={styles.detailsDegree}>. First degree+</p>
        </span>
        <p className={styles.detailsMore}>{user?.headline}</p>
        <span className={styles.articleHoursAndStatus}>
          <p className={styles.articlehours}> {timeAgo(timePosted)} </p>
          <img
            src="../../assets/images/globalStatus.png"
            alt="PostStatusImage"
            className={styles.PostStatusImage}
          />
        </span>
      </div>
      <div className={styles.articleHeaderButtons}>
        <button className={styles.Follow}>+ Follow</button>
        {userId === user?.id && (
          <>
            <button className="p-2" onClick={handleModal}>
              Edit
            </button>
            <button className="p-2" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
      {OpenModal && (
        <PostModal
        handleModal={handleModal}
          postId={postId}
          prevText={text}
          prevImage={image}
        />
      )}
    </div>
  );
};

export default ArticleHeader;
