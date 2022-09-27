import LayoutSection from "../../components/layout/LayoutSection";
import PostList from "../../components/posts/PostList";
import { getAllPosts } from "../../lib/posts-util";

const AllPosts: React.FC = (props) => {
  return (
    <LayoutSection title="All Posts">
      <PostList posts={props.posts} />
    </LayoutSection>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: "hello"",
    },
  };
}

export default AllPosts;
