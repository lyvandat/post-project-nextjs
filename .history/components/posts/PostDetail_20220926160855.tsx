import classes from "./PostDetail.module.css";

const PostDetail: React.FC = (props) => {
  return (
    <div className={classes.detail}>
      <div className={classes["detail-header"]}>
        <h2>title</h2>
        <Image
          src="/images/my-photo.jpg"
          alt="title"
          width={300}
          height={200}
        ></Image>
      </div>
    </div>
  );
};

export default PostDetail;
