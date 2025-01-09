import styles from "./Articletemplate.module.css";
import { useState } from "react";

const ArticleTemplate = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  return (
    <section className={styles.article}>
      <div className={styles.articleHeader}>
        <img
          src="../../assets/images/user.svg"
          alt="ArticleUserImage"
          className={styles.UserImg}
        />
        <div className={styles.articleHeaderDetails}>
          <span className={styles.detailsNameAndDegree}>
            <p className={styles.detailsName}>Saja Alghoul</p>
            <p className={styles.detailsDegree}>. First degree+</p>
          </span>
          <p className={styles.detailsMore}>
            Software Engineer || Full Stack Developer|| React.js || Node.js
          </p>
          <span className={styles.articleHoursAndStatus}>
            <p className={styles.articlehours}>5 hours.</p>
            <img
              src="../../assets/images/globalStatus.png"
              alt="PostStatusImage"
              className={styles.PostStatusImage}
            />
          </span>
        </div>
        <div className={styles.articleHeaderButtons}>
          <button className={styles.Follow}>+ Follow</button>
        </div>
      </div>
      <div className={styles.articleContent}>
        <div className={styles.contentText}>
          𝐔𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐁𝐫𝐨𝐰𝐬𝐞𝐫 𝐀𝐏𝐈𝐬 𝐢𝐧 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭: 𝐓𝐲𝐩𝐞𝐬 𝐨𝐟 𝐁𝐫𝐨𝐰𝐬𝐞𝐫 𝐀𝐏𝐈𝐬 𝐃𝐎𝐌
          𝐀𝐏𝐈: Interact with and manipulate HTML and CSS elements. 𝐅𝐞𝐭𝐜𝐡 𝐀𝐏𝐈:
          Make network requests to retrieve resources asynchronously.
          𝐆𝐞𝐨𝐥𝐨𝐜𝐚𝐭𝐢𝐨𝐧 𝐀𝐏𝐈: Access user location data for location-based
          services. 𝐂𝐚𝐧𝐯𝐚𝐬 𝐀𝐏𝐈: Render graphics and animations on a web page.
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
      <div className={styles.articleActionsNumber}>
        <img
          src="../../assets/images/like.svg"
          alt="likeIcon"
          className={styles.ActionImage}
        />
        <p className={styles.reactionsNumber}>905</p>
        <p className={styles.commentsNumber}>81 comments.</p>
        <p className={styles.repostsNumber}>90 reposts</p>
      </div>
      <div className={styles.articlActions}>
        <div className={styles.Action}>
          <img
            src="../../assets/images/like.svg"
            alt="likeIcon"
            className={styles.ActionImage}
          />
          <p className={styles.ActionTitle}>like</p>
        </div>
        <div className={styles.Action}>
          <img
            src="../../assets/images/comment.svg"
            alt="commentIcon"
            className={styles.ActionImage}
          />
          <p className={styles.ActionTitle}>comment</p>
        </div>
        <div className={styles.Action}>
          <img
            src="../../assets/images/repost.svg"
            alt="repostIcon"
            className={styles.ActionImage}
          />
          <p className={styles.ActionTitle}>repost</p>
        </div>
        <div className={styles.Action}>
          <img
            src="../../assets/images/send.svg"
            alt="sendIcon"
            className={styles.ActionImage}
          />
          <p className={styles.ActionTitle}>send</p>
        </div>
      </div>
    </section>
  );
};

export default ArticleTemplate;
