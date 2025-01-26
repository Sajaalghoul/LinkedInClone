import Game from "../Game/Game";
import styles from "./DailyGames.module.css";
const DailyGames = () => {
  return (
    <section className={styles.dailyGames}>
      <p className={styles.gamesTitle}>Daily Games</p>
      <Game title="Tango" details="Harmonize the grid" image="Tango.png" />
      <Game title="Queens" details="Crown Each region" image="queens.png" />
      <Game
        title="PinPoint"
        details="Guess the cateogry"
        image="pinpoint.png"
      />
      <Game
        title="Crossclimb"
        details="Unlock atrivia ladder"
        image="crossclimb.png"
      />
    </section>
  );
};

export default DailyGames;
