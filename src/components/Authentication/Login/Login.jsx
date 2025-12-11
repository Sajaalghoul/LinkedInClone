import LoginNav from "../LoginNav/LoginNav";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../../state/user/userSlice";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../../../APIS/AuthApi";
import {
  addUserToStorage,
  checkUserExistsInStorage,
} from "../../../APIS/FireStoreAPI";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result.user);
      const userData = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
      };
      console.log(userData);
      dispatch(setUser(userData));
      const userExists = await checkUserExistsInStorage(result.user.uid);
      if (!userExists) {
        await addUserToStorage({
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        });
      }
      localStorage.setItem("currentuser", JSON.stringify(userData));
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
