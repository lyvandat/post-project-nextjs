import classes from "./MainNavigation.module.css";
import Link from "next/link";

const MainNavigation: React.FC = (props) => {
  return (
    <header>
      <h2>My Daily Blog</h2>
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
    </header>
  );
};

export default MainNavigation;
