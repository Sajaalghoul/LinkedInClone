import styles from "./Home.module.css";
import HomeLeftSide from "./HomeLeftSide/HomeLeftSide";
import HomeMain from "../Feed/HomeMain/HomeMain";
import HomeRightSide from "./HomeRightSide/HomeRightSide";
const Home = () => {
  return (
    <main className={styles.Home}>
      <div className={styles.Layout}>
        <HomeLeftSide />
        <div className={styles.HomeMainRight}>
          <HomeMain />
          <HomeRightSide />
        </div>
      </div>
    </main>
  );
};

export default Home;
