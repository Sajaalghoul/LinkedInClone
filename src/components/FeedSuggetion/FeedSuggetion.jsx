import styles from "./FeedSuggetion.module.css";
import PropTypes from "prop-types";
const FeedSuggetion = (props) => {
  return (
    <div className={styles.feedSuggetion}>
      <img
        src={`../../assets/images/${props.image}`}
        alt="feedSuggetionImage"
        className={styles.feedImg}
      />
      <div className={styles.feedSuggetionDetails}>
        <p className={styles.DetailsTitle}>{props.title}</p>
        <p className={styles.DetailsMore}>{props.details}</p>
        <button className={styles.FollowButton}>+Follow</button>
      </div>
    </div>
  );
};

FeedSuggetion.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default FeedSuggetion;
