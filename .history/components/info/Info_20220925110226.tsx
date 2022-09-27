import classes from "./Info.module.css";
import Image from "next/image";

const Info: React.FC = () => {
  return (
    <div className={classes.info}>
      <div className={classes["image-wrapper"]}>
        <Image
          src="/images/my-photo.jpg"
          alt="my photo"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi I'm Dat</h1>
      <p>
        this blog is about web development - especially frontend pet projects
        using ReactJs and other programming tools.
      </p>
    </div>
  );
};

export default Info;
