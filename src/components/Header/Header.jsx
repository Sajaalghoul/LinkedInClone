import styles from "./Header.module.css";
import navigatores from "../../navigatores";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { setUser } from "../../state/User/UserSlice";
import { useDispatch } from "react-redux";
import withAuth from "../../HOC/withAuth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignOut, setIsSignOut] = useState(false);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(setUser(null));
      navigate("/");
      alert("User signed out successfully");
    } catch (error) {
      alert("Error signing out:", error);
    }
  };
  // render navigators
  const renderNavItems = () =>
    navigatores.map((navigator) => (
      <li key={navigator.name}>
        <NavLink
          to={navigator.route}
          className={({ isActive }) =>
            `${styles.NavItem} ${isActive ? styles.active : ""}`
          }
        >
          <img
            src={`../../assets/images/${navigator.name}.svg`}
            alt={navigator.name}
            className={styles.itemImg}
          />
          <p>{navigator.name}</p>
        </NavLink>
      </li>
    ));
  // MeClick to show signout
  const toggleSignOut = () => {
    setIsSignOut((previous) => !previous);
  };
  //   render signout
  const renderSignOut = () =>
    isSignOut && (
      <div className={styles.Signout} onClick={handleSignOut}>
        SignOut
      </div>
    );

  return (
    <header className={styles.haeder}>
      <div className={styles.headerMain}>
        <Link to="/home">
          <img
            src="../../assets/images/home-logo.svg"
            alt="HeaderLogo"
            className={styles.HeaderLogo}
          />
        </Link>
        <form className={styles.Search}>
          <img src="../../assets/images/search-icon.svg" alt="SearchLogo" />
          <input
            type="text"
            placeholder="Search"
            className={styles.SearchInput}
          />
        </form>
      </div>
      <nav className={styles.HeaderNav}>
        <ul className={styles.navList}>
          {renderNavItems()}
          <li className={styles.NavDownItem}>
            <img
              src="../../assets/images/user.svg"
              alt="user"
              className={styles.userImage}
            />
            <button className={styles.workDown} onClick={toggleSignOut}>
              <img
                src="../../assets/images/down-icon.svg"
                alt="UserDown"
                className={styles.downIcon}
              />
              <p>Me</p>
            </button>
            {renderSignOut()}
          </li>
          <li
            className={styles.NavDownItem}
            style={{ borderLeft: "1px solid gray", paddingLeft: "5px" }}
          >
            <img
              src="../../assets/images/work.svg"
              alt="work"
              className={styles.workImage}
            />
            <div className={styles.workDown}>
              <img
                src="../../assets/images/down-icon.svg"
                alt="UserDown"
                className={styles.downIcon}
              />
              <p>For Business</p>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withAuth(Header);
