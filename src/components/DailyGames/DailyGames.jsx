import styles from "./DailyGames.module.css";
const DailyGames = () => {
  return (
    <section className={styles.dailyGames}>
      <p className={styles.gamesTitle}>Daily Games</p>
      <div className={styles.game}>
        <img
          src="../../assets/images/Tango.png"
          alt="GameImage"
          className={styles.gameImage}
        />
        <div className={styles.gameDetails}>
          <p className={styles.DetailsTitle}>Tango</p>
          <p className={styles.DetailsMore}>Harmonize the grid</p>
        </div>
        <img
          src="../../assets/images/arrowPoint.png"
          alt="GameArrow"
          className={styles.GameArrow}
        />
      </div>
      <div className={styles.game}>
        <img
          src="../../assets/images/Tango.png"
          alt="GameImage"
          className={styles.gameImage}
        />
        <div className={styles.gameDetails}>
          <p className={styles.DetailsTitle}>Tango</p>
          <p className={styles.DetailsMore}>Harmonize the grid</p>
        </div>
        <img
          src="../../assets/images/arrowPoint.png"
          alt="GameArrow"
          className={styles.GameArrow}
        />
      </div>
      <div className={styles.game}>
        <img
          src="../../assets/images/Tango.png"
          alt="GameImage"
          className={styles.gameImage}
        />
        <div className={styles.gameDetails}>
          <p className={styles.DetailsTitle}>Tango</p>
          <p className={styles.DetailsMore}>Harmonize the grid</p>
        </div>
        <img
          src="../../assets/images/arrowPoint.png"
          alt="GameArrow"
          className={styles.GameArrow}
        />
      </div>
      <div className={styles.game}>
        <img
          src="../../assets/images/Tango.png"
          alt="GameImage"
          className={styles.gameImage}
        />
        <div className={styles.gameDetails}>
          <p className={styles.DetailsTitle}>Tango</p>
          <p className={styles.DetailsMore}>Harmonize the grid</p>
        </div>
        <img
          src="../../assets/images/arrowPoint.png"
          alt="GameArrow"
          className={styles.GameArrow}
        />
      </div>
    </section>
  );
};

export default DailyGames;
