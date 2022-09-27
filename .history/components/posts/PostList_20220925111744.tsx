import classes from "./PostList.module.css";

type post = {
  title: string;
  date: string;
  excerpt: string;
};

const PostList: React.FC<{
  posts: post[];
}> = (props) => {
  return <ul className={classes.list}></ul>;
};
