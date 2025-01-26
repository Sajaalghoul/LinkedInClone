import styles from "./UserCardInfo.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "../../../APIS/FireStoreApi";

const UserCardInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);
  return (
    <UserCardWrapper user={user} className="w-full">
      <Link to="/user">
        <CardBackground style={{ height: "60px" }} />
        <UserProfileImage image={user?.photoURL} className="w-16" />
        <UserDetails user={user} />
      </Link>
    </UserCardWrapper>
  );
};

export const UserCardWrapper = ({ children, className, ...props }) => {
  return (
    <div className={`${styles.UserCardWrapper} ${className}`} {...props}>
      {children}
    </div>
  );
};
export const CardBackground = ({ className, style }) => (
  <img
    className={`${styles.CardBackground} ${className}`}
    style={style}
    src="../../assets/images/card-bg.svg"
    alt="cardBackground"
  />
);

export const UserProfileImage = ({ image, className, style }) => (
  <img
    className={`border border-white mx-auto absolute top-8 left-4 rounded-full ${className}`}
    src={image || "../../assets/images/user.svg"}
    style={style}
    alt="cardUserImage"
  />
);

export const UserDetails = ({ user, className }) => (
  <div className={`${styles.InfoDetails} ${className}`}>
    <UserName name={user?.displayName} />
    <Specialization headline={user?.headline} />
    {user?.country && <Location location={`${user?.country}, ${user.city}`} />}
    {user?.college && <EductaionSection education={user?.college} />}
  </div>
);

export const UserName = ({ name, className }) => (
  <h2 className={`${styles.Name} ${className}`}>{name || "Welcome, there"}</h2>
);

export const Specialization = ({ className, headline }) => (
  <p className={`${styles.specialization} ${className}`}>{headline || ""}</p>
);

export const Location = ({ className, location }) => (
  <p className={`${styles.location} ${className}`}>{location || ""}</p>
);

export const EductaionSection = ({ className, education }) => (
  <div className={`${styles.eductaionSection} ${className}`}>
    <img
      src="../../assets/images/university.png"
      alt="university"
      className={styles.educationImg}
    />
    <p className={styles.Education}>{education || ""}</p>
  </div>
);

export default UserCardInfo;
