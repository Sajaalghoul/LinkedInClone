import ArticleTemplate from "../ArticleTemplate/ArticleTemplate";
import FeedSortBy from "../FeedSortBy/FeedSortBy";
import ShareBox from "../ShareBox/ShareBox";
import styles from "./HomeMain.module.css";
import PostModal from "../PostModal/PostModal";
import { useState } from "react";
const HomeMain = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <main className={styles.HomeMain}>
      <ShareBox handleModal={handleModal} />
      <FeedSortBy />
      <ArticleTemplate />
      <ArticleTemplate />
      {showModal && <PostModal handleModal={handleModal} />}
    </main>
  );
};

export default HomeMain;
