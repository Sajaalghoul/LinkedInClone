import LoginNav from "../LoginNav/LoginNav";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/User/UserSlice";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../APIS/AuthApi";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      const userData = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
      };
      dispatch(setUser(userData));
      navigate("/home");
      alert("Signed in successfully with Google");
    } catch (error) {
      alert("Error signing in with Google", error);
    }
  };
  return (
    <>
      <LoginNav />
      <div className={styles.LoginHero}>
        <div className={styles.LoginLeftSide}>
          <h1 className={styles.LoginTitle}>
            Welcome To Your Professioanl Community
          </h1>
          <button className={styles.GoogleLoginButton} onClick={handleGoogle}>
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
