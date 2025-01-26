import styles from "./ArticleHeader.module.css";
import { timeAgo } from "../../../utils/timeUtils/timeAgo";
const ArticleHeader = ({ user, timePosted }) => {
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
        <p className={styles.detailsMore}>
          Software Engineer || Full Stack Developer|| React.js || Node.js
        </p>
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
      </div>
    </div>
  );
};

export default ArticleHeader;
