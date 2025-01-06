import styles from "./UserCardInfo.module.css";
import { Link } from "react-router-dom";
const UserCardInfo = () => {
  return (
    <Link to="/user" className={styles.UserCardInfo}>
      <img
        className={styles.CardBackground}
        src="../../assets/images/card-bg.svg"
        alt="cardBackground"
      />
      <img
        className={styles.UserImg}
        src="../../assets/images/user.svg"
        alt="cardUserImage"
      />
      <div className={styles.InfoDetails}>
        <h2 className={styles.Name}>Saja Alghoul</h2>
        <p className={styles.specialization}>
          Software Engineer || Full Stack Developer|| React.js || Node.js
        </p>
        <p className={styles.country}>Palestinian Authority</p>
        <div className={styles.universitySection}>
          <img
            src="../../assets/images/university.png"
            alt="university"
            className={styles.universityImg}
          />
          <p className={styles.University}>Alazhar University</p>
        </div>
      </div>
    </Link>
  );
};

export default UserCardInfo;
