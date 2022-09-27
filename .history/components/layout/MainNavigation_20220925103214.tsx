import classes from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation: React.FC = (props) => {
  return (
    <header className={classes["main-header"]}>
      <div className={classes.container}>
        <Link>
          <h2>My Daily Blog</h2>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="">All Posts</Link>
            </li>
            <li>
              <Link href="">New Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
