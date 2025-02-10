import ArticleTemplate from "../../Article/ArticleTemplate/ArticleTemplate";
import FeedSortBy from "../FeedSortBy/FeedSortBy";
import ShareBox from "../ShareBox/ShareBox";
import styles from "./HomeMain.module.css";
import PostModal from "../../common/PostModal/PostModal";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../../APIS/FireStoreAPI";
const HomeMain = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    console.log("updated");
    getPosts(dispatch);
  }, [dispatch]);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <main className={styles.HomeMain}>
      <ShareBox handleModal={handleModal} />
      <FeedSortBy />
      {posts &&
        posts.map((post) => <ArticleTemplate key={post.id} post={post} />)}
      {showModal && <PostModal handleModal={handleModal} />}
    </main>
  );
};

export default HomeMain;
