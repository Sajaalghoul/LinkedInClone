import styles from "./ArticleContent.module.css";
import { useState } from "react";
const ArticleContent = ({ text, image }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  const initialText = text.substring(0, 200);
  const remainingText = text.substring(200);
  return (
    <div className={styles.articleContent}>
      <div className={styles.contentText}>
        {initialText}
        {showMore && <p>{remainingText}</p>}
        {remainingText && (
          <button onClick={toggleShowMore} className={styles.toggleButton}>
            {showMore ? "Show Less" : "....Show More"}
          </button>
        )}
      </div>
      <div className={styles.contentMedia}>
        <img src={image} alt="articleImage" className={styles.PostImage} />
      </div>
    </div>
  );
};

export default ArticleContent;
