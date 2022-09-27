import classes from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation: React.FC = (props) => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes.container}>
        <Link href="/">
          <a>
            <h2>My Daily Blog</h2>
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/all-posts">All Posts</Link>
            </li>
            <li>
              <Link href="/new-post">New Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
