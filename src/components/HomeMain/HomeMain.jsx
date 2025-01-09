import ArticleTemplate from "../ArticleTemplate/ArticleTemplate";
import FeedSortBy from "../FeedSortBy/FeedSortBy";
import ShareBox from "../ShareBox/ShareBox";
import styles from "./HomeMain.module.css";
const HomeMain = () => {
  return <main className={styles.HomeMain}>
    <ShareBox/>
    <FeedSortBy/>
    <ArticleTemplate/>
    <ArticleTemplate/>
  </main>;
};

export default HomeMain;
