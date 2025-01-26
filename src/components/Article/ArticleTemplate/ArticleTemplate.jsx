import ArticleActions from "../ArticleActions/ArticleActions";
import ArticleContent from "../ArticleContent/ArticleContent";
import ArticleHeader from "../ArticleHeader/ArticleHeader";
import styles from "./Articletemplate.module.css";

const ArticleTemplate = ({ post }) => {
  return (
    <section className={styles.article}>
      <ArticleHeader user={post?.user} timePosted={post.timePosted} />
      <ArticleContent text={post?.text} image={post.image}/>
      <ArticleActions />
    </section>
  );
};

export default ArticleTemplate;
