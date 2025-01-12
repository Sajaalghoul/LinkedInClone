import styles from "./ShareBox.module.css";
const ShareBox = () => {
  //show more button
  return (
    <div className={styles.shareBox}>
      <div className={styles.shareBoxUpper}>
        <img
          src="../../assets/images/user.svg"
          alt="userImage"
          className={styles.userImg}
        />
        <p className={styles.userDetails}>Start A post , try writing with AI</p>
      </div>
      <div className={styles.ShareBoxLinks}>
        <button className={styles.ShareBoxLink}>
          <img
            src="../../assets/images/video.png"
            alt="videoIcon"
            className={styles.LinkImage}
          />
          <p>Video</p>
        </button>
        <button className={styles.ShareBoxLink}>
          <img
            src="../../assets/images/photo.svg"
            alt="photoIcon"
            className={styles.LinkImage}
          />
          <p>Photo</p>
        </button>
        <button className={styles.ShareBoxLink}>
          <img
            src="../../assets/images/article.png"
            alt="photoIcon"
            className={styles.LinkImage}
          />
          <p>Write Article</p>
        </button>
      </div>
    </div>
  );
};

export default ShareBox;
