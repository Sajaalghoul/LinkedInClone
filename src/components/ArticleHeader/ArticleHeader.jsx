import styles from "./ArticleHeader.module.css";
const ArticleHeader = () => {
  return (
    <div className={styles.articleHeader}>
      <img
        src="../../assets/images/user.svg"
        alt="ArticleUserImage"
        className={styles.UserImg}
      />
      <div className={styles.articleHeaderDetails}>
        <span className={styles.detailsNameAndDegree}>
          <p className={styles.detailsName}>Saja Alghoul</p>
          <p className={styles.detailsDegree}>. First degree+</p>
        </span>
        <p className={styles.detailsMore}>
          Software Engineer || Full Stack Developer|| React.js || Node.js
        </p>
        <span className={styles.articleHoursAndStatus}>
          <p className={styles.articlehours}>5 hours.</p>
          <img
            src="../../assets/images/globalStatus.png"
            alt="PostStatusImage"
            className={styles.PostStatusImage}
          />
        </span>
      </div>
      <div className={styles.articleHeaderButtons}>
        <button className={styles.Follow}>+ Follow</button>
      </div>
    </div>
  );
};

export default ArticleHeader;
