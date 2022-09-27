import LayoutSection from "../../components/layout/LayoutSection";
import PostList from "../../components/posts/PostList";
import { getAllPosts } from "../../lib/posts-util";

const AllPosts: React.FC = (props) => {
  return (
    <LayoutSection title="All Posts">
      <h2>hello</h2>
    </LayoutSection>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();
  console.log(posts);
  return {
    props: {
      posts: "hello",
    },
  };
}

export default AllPosts;
