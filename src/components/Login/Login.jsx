import LoginNav from "../LoginNav/LoginNav";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <LoginNav />
      <div className={styles.LoginHero}>
        <div className={styles.LoginLeftSide}>
          <h1 className={styles.LoginTitle}>
            Welcome To Your Professioanl Community
          </h1>
          <button className={styles.GoogleLoginButton}>
            <img
              src="../../assets/images/google_logo_icon.webp"
              alt="GoogleIcon"
              className={styles.GoogleIcon}
            />
            <p>Continue With Google</p>
          </button>
        </div>
        <img
          src="../../assets/images/login-hero.png"
          alt="HeroImage"
          className={styles.HeroImage}
        />
      </div>
    </>
  );
};

export default Login;
