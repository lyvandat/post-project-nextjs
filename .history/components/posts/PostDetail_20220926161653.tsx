import Image from "next/image";
import Reactmarkdown from "react-markdown";
import classes from "./PostDetail.module.css";

const PostDetail: React.FC = (props) => {
  return (
    <div className={`${classes.detail} container`}>
      <div className={classes.detail}>
        <h2>title</h2>
        <Image
          src="/images/my-photo.jpg"
          alt="title"
          width={300}
          height={200}
        ></Image>
      </div>
      <div className={classes["detail-body"]}>
        <Reactmarkdown>{"#this is a text"}</Reactmarkdown>
      </div>
    </div>
  );
};

export default PostDetail;
