import React from "react";
import { Link } from "react-router-dom";
import styles from './LoginNav.module.css';

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
        <a className={styles.JoinNow}>Join Now</a>
        <button className={styles.signInButton}>Sign in</button>
      </div>
    </div>
  );
};

export default LoginNav;
