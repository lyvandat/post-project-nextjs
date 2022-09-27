import Image from "next/image";
import Reactmarkdown from "react-markdown";
import classes from "./PostDetail.module.css";

import post from "../../models/post";

const PostDetail: React.FC<{ post: post }> = (props) => {
  const { slug, title, image, content } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <div className={`${classes.detail} container`}>
      <div className={classes["detail-header"]}>
        <h2>{title}</h2>
        <Image src={imagePath} alt={title} width={300} height={200}></Image>
      </div>
      <div className={classes["detail-body"]}>
        <Reactmarkdown>{content}</Reactmarkdown>
      </div>
    </div>
  );
};

export default PostDetail;
