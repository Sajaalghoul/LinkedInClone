import styles from "./ArticleContent.module.css";
import { useState } from "react";
const ArticleContent = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  return (
    <div className={styles.articleContent}>
      <div className={styles.contentText}>
        𝐔𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐁𝐫𝐨𝐰𝐬𝐞𝐫 𝐀𝐏𝐈𝐬 𝐢𝐧 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭: 𝐓𝐲𝐩𝐞𝐬 𝐨𝐟 𝐁𝐫𝐨𝐰𝐬𝐞𝐫 𝐀𝐏𝐈𝐬 𝐃𝐎𝐌 𝐀𝐏𝐈:
        Interact with and manipulate HTML and CSS elements. 𝐅𝐞𝐭𝐜𝐡 𝐀𝐏𝐈: Make
        network requests to retrieve resources asynchronously. 𝐆𝐞𝐨𝐥𝐨𝐜𝐚𝐭𝐢𝐨𝐧 𝐀𝐏𝐈:
        Access user location data for location-based services. 𝐂𝐚𝐧𝐯𝐚𝐬 𝐀𝐏𝐈:
        Render graphics and animations on a web page.
        {showMore && (
          <p>
            𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐀𝐏𝐈: Store data on the client-side. 𝐖𝐞𝐛 𝐒𝐨𝐜𝐤𝐞𝐭𝐬: Enable
            real-time communication between the client and server.
          </p>
        )}
        <button onClick={toggleShowMore} className={styles.toggleButton}>
          {showMore ? "Show Less" : "....Show More"}
        </button>
      </div>
      <div className={styles.contentMedia}>
        <img
          src="../../assets/images/articleImg.png"
          alt="articleImage"
          className={styles.PostImage}
        />
      </div>
    </div>
  );
};

export default ArticleContent;
