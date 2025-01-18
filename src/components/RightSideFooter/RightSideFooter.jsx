import styles from "./RightSide.module.css";
const RightSideFooter = () => {
  return (
    <footer className={styles.footer}>
        <img
          src="../../assets/images/hiring.png"
          alt="HiringPiicture"
          className={styles.hiringPicture}
        />
      <div className={styles.FooterLinks}>
        <a href="" className={styles.Link}>
          About
        </a>
        <a href="" className={styles.Link} style={{ color: "#CD9BDB" }}>
          Accessability
        </a>
        <a href="" className={styles.Link}>
          Help Center
        </a>
        <a href="" className={styles.Link}>
          Privacy &Terms
        </a>
        <a href="" className={styles.Link} style={{ color: "#CD9BDB" }}>
          Ad Choices
        </a>
        <a href="" className={styles.Link}>
          Advertising
        </a>
        <a href="" className={styles.Link}>
          Business Services
        </a>
        <a href="" className={styles.Link}>
          Get The Linkedin App
        </a>
        <a href="" className={styles.Link}>
          More
        </a>
      </div>
      <div className={styles.footerDetails}>
        <img
          src="../../assets/images/LinkedInLogo.png"
          alt="FooterLinkedin"
          className={styles.FooterLinkedinLogo}
        />

        <p className={styles.footerDetailsMore}>LinkedIn Corporation @ 2025</p>
      </div>
    </footer>
  );
};

export default RightSideFooter;
