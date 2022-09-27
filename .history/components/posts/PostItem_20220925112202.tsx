import classes from "./PostItem.module.css";
import Image from "next/image";

type post = {
    image: string;
    title: string;
    date: string;
    excerpt: string;
};

const PostItem: React.FC<post: post> = (props) => {
    return(
        <li className={classes.item}>
            <Image src="" alt="item1" width={300} height={200}></Image>
            <h2>Chao mung den voi khoa hoc moi</h2>
            <time>26 thang 11 , 2022</time>
            <p>day la dong mo ta ve san pham ban se su dung.</p>
        </li>
    )
}