import classes from "./PostItem.module.css";
import Image from "next/image";
import Link from "next/link";

type post = {
  image: string;
  title: string;
  date: string;
  excerpt: string;
};

const PostItem: React.FC = () => {
  return (
    <li className={classes.item}>
      <Image
        src="/images/my-photo.jpg"
        alt="item1"
        width={500}
        height={400}
        layout="responsive"
      ></Image>
      <h2>Chao mung den voi khoa hoc moi</h2>
      <time>26 thang 11, 2022</time>
      <p>
        day la dong mo ta ve san pham ban se su dung trong suot quang thoi gian
        ban hoc va thuc hanh luyen tap voi reactjs
      </p>
      <Link href="/all-posts/post1">View detail</Link>
    </li>
  );
};

export default PostItem;
