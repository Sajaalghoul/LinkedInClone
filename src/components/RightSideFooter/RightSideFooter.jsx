import styles from "./RightSide.module.css";
const RightSideFooter = () => {
  return (
    <footer className={styles.footer}>
      <img
        src="../../assets/images/hiring.png"
        alt="HiringPiicture"
        className={styles.hiringPiicture}
      />
      <div>
        <a>Accessability</a>
      </div>
    </footer>
  );
};

export default RightSideFooter;
