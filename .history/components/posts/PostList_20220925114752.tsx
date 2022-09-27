import classes from "./PostList.module.css";
import PostItem from "./PostItem";

type post = {
  title: string;
  date: string;
  excerpt: string;
};

const PostList: React.FC = () => {
  return (
    <ul className={classes.list}>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </ul>
  );
};

export default PostList;
