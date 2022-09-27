import Image from "next/image";
import Reactmarkdown from "react-markdown";
import classes from "./PostDetail.module.css";

type post = {
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
};

const PostDetail: React.FC<{ post: post }> = (props) => {
  const { slug, title, image, content } = props.post;
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <div className={`${classes.detail} container`}>
      <div className={classes["detail-header"]}>
        <h2>{title}</h2>
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
