import styles from "./Home.module.css";
import HomeLeftSide from "../HomeLeftSide/HomeLeftSide";
import HomeMain from "../HomeMain/HomeMain";
import HomeRightSide from "../HomeRightSide/HomeRightSide";
const Home = () => {
  return (
    <main className={styles.Home}>
      <div className={styles.Layout}>
        <HomeLeftSide/>
        <HomeMain/>
        <HomeRightSide/>
      </div>
    </main>
  );
};

export default Home;
