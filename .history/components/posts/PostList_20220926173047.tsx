import classes from "./PostList.module.css";
import PostItem from "./PostItem";

type post = {
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
};

const PostList: React.FC<{ posts: post[] }> = (props) => {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
};

export default PostList;
