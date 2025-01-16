import styles from "./UserCardInfo.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserImage from "../UserImage/UserImage";
const UserCardInfo = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Link to="/user" className={styles.UserCardInfo}>
      <img
        className={styles.CardBackground}
        src="../../assets/images/card-bg.svg"
        alt="cardBackground"
      />
      <UserImage image={user?.photoURL} style={{width: "60px"}} />
      <div className={styles.InfoDetails}>
        <h2 className={styles.Name}>{user?.displayName}</h2>
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
