import classes from "./PostList.module.css";
import PostItem from "./PostItem";

import post from "../../models/post";

const PostList: React.FC<{ posts: post[] }> = (props) => {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
