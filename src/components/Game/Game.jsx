import styles from "./Game.module.css";
import PropTypes from "prop-types";
const Game = (props) => {
  return (
    <div className={styles.game}>
      <img
        src={`../../assets/images/${props.image}`}
        alt="GameImage"
        className={styles.gameImage}
      />
      <div className={styles.gameDetails}>
        <p className={styles.DetailsTitle}>{props.title}</p>
        <p className={styles.DetailsMore}>{props.details}</p>
      </div>
      <img
        src="../../assets/images/arrowPoint.png"
        alt="GameArrow"
        className={styles.GameArrow}
      />
    </div>
  );
};
Game.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default Game;
