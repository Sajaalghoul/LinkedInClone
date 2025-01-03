import styles from "./Home.module.css";
import UpWork from "../UpWork/UpWork";
const Home = () => {
  return (
    <div className={styles.Home}>
      <UpWork />
    </div>
  );
};

export default Home;
