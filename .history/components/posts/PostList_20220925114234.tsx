import classes from "./PostList.module.css";
import PostItem from "./PostItem";

type post = {
  title: string;
  date: string;
  excerpt: string;
};

const PostList: React.FC = () => {
  return (
    <div className="container">
      <ul className={classes.list}>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </ul>
    </div>
  );
};

export default PostList;
