import classes from "./PostItem.module.css";
import Image from "next/image";
import Link from "next/link";

type post = {
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
};

const PostItem: React.FC<{ post: post }> = (props) => {
  const { slug, title, image, date, excerpt } = props.post;

  const dateString = new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={classes.item}>
      <Image
        src={imagePath}
        alt={title}
        width={500}
        height={400}
        layout="responsive"
      ></Image>
      <h2>{title}</h2>
      <time>{dateString}</time>
      <p>{excerpt}</p>
      <Link href={"/all-posts/" + slug}>
        <a>View detail</a>
      </Link>
    </li>
  );
};

export default PostItem;
