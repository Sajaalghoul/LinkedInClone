import { Link } from "react-router-dom";
import FeedSuggetion from "./FeedSuggetion/FeedSuggetion";
import styles from "./HomeRightSide.module.css";
import RightSideFooter from "./RightSideFooter/RightSideFooter";
import DailyGames from "./DailyGames/DailyGames";
const HomeRightSide = () => {
  return (
    <aside className={styles.HomeRightSide}>
      <section className={styles.feedAdd}>
        <div className={styles.feedAddUpper}>
          <p className={styles.feedTitle}>Add To Your Feed</p>
          <img
            src="../../assets/images/feed-icon.svg"
            alt="FeedIcon"
            className={styles.feedEexclamation}
          />
        </div>
        <FeedSuggetion
          title="Google Development"
          details=" Company-Technology.informaton and Internet"
          image="google_logo_icon.webp"
        />
        <FeedSuggetion
          title="Google Development"
          details=" Company-Technology.informaton and Internet"
          image="google_logo_icon.webp"
        />
        <FeedSuggetion
          title="Google Development"
          details=" Company-Technology.informaton and Internet"
          image="google_logo_icon.webp"
        />
        <Link to="/user" className={styles.viewRecommindation}>
          <p>view all recommindation</p>
          <img
            src="../../assets/images/arrowTo.webp"
            alt="arrowSvg"
            className={styles.arrow}
          />
        </Link>
      </section>
      <DailyGames />
      <RightSideFooter />
    </aside>
  );
};

export default HomeRightSide;
