import LayoutSection from "../../components/layout/LayoutSection";
import PostList from "../../components/posts/PostList";
import { getAllPosts } from "../../lib/posts-util";

const AllPosts: React.FC = (props) => {
  return (
    <LayoutSection title="All Posts">
      <PostList />
    </LayoutSection>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}

export default AllPosts;
