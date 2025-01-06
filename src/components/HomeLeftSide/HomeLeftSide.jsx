import UserCardInfo from "../UserCardInfo/UserCardInfo";
import styles from "./HomeLeftSise.module.css";
import { Link } from "react-router-dom";
const HomeLeftSide = () => {
  return (
    <div className={styles.LeftSide}>
      {/* user Card */}
      <section className={styles.UserCard}>
        <UserCardInfo />
        <hr />
        <section className={styles.viewrsAndImpressions}>
          <Link to="/user" className={styles.viewrsAndImpressionsLink}>
            <p className={styles.LinkTitle}>Profile Viewrs</p>
            <p className={styles.LinkNumber}>10</p>
          </Link>
          <Link to="/user" className={styles.viewrsAndImpressionsLink}>
            <p className={styles.LinkTitle}>Post Impressions</p>
            <p className={styles.LinkNumber}>25</p>
          </Link>
        </section>
        <hr />
        <section className={styles.PremiumSection}>
          <p className={styles.PremiumTitle}>Gain exclusive tools & insights</p>
          <Link to="/user" className={styles.PremiumLink}>
            <img
              src="../../assets/images/university.png"
              alt="university"
              className={styles.universityImg}
            />
            <p className={styles.PremiumLinkTitle}>Redeem Premium fot 0$</p>
          </Link>
        </section>
      </section>
      <section className={styles.HomeLeftSideLinks}>
        <Link className={styles.Links}>
          <img
            className={styles.LinksIcon}
            src="../../assets/images/savedItem.png"
            alt="SavedItems"
          />
          <p className={styles.LinksTitle}>Saved Items</p>
        </Link>
        <Link className={styles.Links}>
          <img
            className={styles.LinksIcon}
            src="../../assets/images/Groups.svg"
            alt="Groups"
          />
          <p className={styles.LinksTitle}>Groups</p>
        </Link>
        <Link className={styles.Links}>
          <img
            className={styles.LinksIcon}
            src="../../assets/images/NewSetter.png"
            alt="NewSettlers"
          />
          <p className={styles.LinksTitle}>NewSetters</p>
        </Link>
        <Link className={styles.Links}>
          <img
            className={styles.LinksIcon}
            src="../../assets/images/events.svg"
            alt="Events"
          />
          <p className={styles.LinksTitle}>Events</p>
        </Link>
      </section>
    </div>
  );
};

export default HomeLeftSide;
