import styles from "./FeedSuggetion.module.css";
const FeedSuggetion = () => {
  return (
    <div className={styles.feedSuggetion}>
      <img
        src="../../assets/images/google_logo_icon.webp"
        alt="feedSuggetionImage"
        className={styles.feedImg}
      />
      <div className={styles.feedSuggetionDetails}>
        <p className={styles.DetailsTitle}>Google for developers</p>
        <p className={styles.DetailsMore}>
          Company-Technology.informaton and Internet
        </p>
        <button className={styles.FollowButton}>+Follow</button>
      </div>
    </div>
  );
};

export default FeedSuggetion;
