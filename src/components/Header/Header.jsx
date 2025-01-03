import styles from "./Header.module.css";
import navigatores from "../../navigatores";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [signOut, setsignOut] = useState(false);
  // MeClick to show signout
  const toggleSignOut = () => {
    setsignOut((previous) => !previous);
  };
  return (
    <div className={styles.haeder}>
      <div className={styles.headerMain}>
        <img
          src="../../assets/images/home-logo.svg"
          alt="HeaderLogo"
          className={styles.HeaderLogo}
        />
        <div className={styles.Search}>
          <img src="../../assets/images/search-icon.svg" alt="SearchLogo" />
          <input
            type="text"
            placeholder="Search Your Job"
            className={styles.SearchInput}
          />
        </div>
      </div>
      <nav className={styles.HeaderNav}>
        <ul className={styles.navList}>
          {navigatores.map((navigator) => (
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
          ))}
          <li className={styles.NavDownItem}>
            <img
              src="../../assets/images/user.svg"
              alt="user"
              className={styles.userImage}
            />
            <div className={styles.workDown} onClick={toggleSignOut}>
              <img
                src="../../assets/images/down-icon.svg"
                alt="UserDown"
                className={styles.downIcon}
              />
              <p>Me</p>
            </div>
            {signOut && <div className={styles.Signout}>SignOut</div>}
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
              <p>Work</p>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
