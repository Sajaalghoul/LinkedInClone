import { Link } from "react-router-dom";
import styles from "./LoginNav.module.css";

const LoginNav = () => {
  return (
    <div className={styles.LoginNav}>
      <Link to="/" className={styles.NavLink}>
        <img
          src="../../assets/images/login-logo.svg"
          alt="NavLogoLinkedIn"
          className={styles.NavImage}
        />
      </Link>
      <div className={styles.NavButtons}>
        <a className={styles.JoinNow}>  <Link to="/joinNow">Join Now</Link></a>
        <button className={styles.signInButton}>
          <Link to="/signin">Sign in</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginNav;
