import { useState, useEffect } from "react";
import UserCardInfo from "../UserCardInfo/UserCardInfo";
import styles from "./HomeLeftSise.module.css";
import { Link } from "react-router-dom";

const HomeLeftSide = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  // handling show more button in samll screens( be show less by default)
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
      setShowMore(isSmallScreen);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); //clean evenlistener when unmounted
    };
  }, []);

  return (
    <div className={styles.HomeLeftSide}>
      {/* user Card */}
      <section className={styles.UserCard}>
        <UserCardInfo />
        {!showMore ? (
          <section className={styles.UserCardPart}>
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
              <p className={styles.PremiumTitle}>
                Gain exclusive tools & insights
              </p>
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
        ) : (
          ""
        )}
      </section>
      {!showMore ? (
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
      ) : (
        ""
      )}
      <button className={styles.ShowMoreButton} onClick={toggleShowMore}>
        {!showMore ? "Show less " : "Show More "}
      </button>
    </div>
  );
};

export default HomeLeftSide;
