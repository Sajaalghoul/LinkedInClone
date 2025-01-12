import ArticleActions from "../ArticleActions/ArticleActions";
import ArticleContent from "../ArticleContent/ArticleContent";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import styles from "./Articletemplate.module.css";

const ArticleTemplate = () => {
  return (
    <section className={styles.article}>
      <ArticleHeader />
      <ArticleContent />
      <ArticleActions />
    </section>
  );
};

export default ArticleTemplate;
