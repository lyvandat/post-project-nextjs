import LayoutSection from "../../components/layout/LayoutSection";
import PostList from "../../components/posts/PostList";
import { getAllPosts } from "../../lib/posts-util";

const AllPosts: React.FC<{posts: {
  title: string, image: string, date: string, excerpt: string, slug: string, content: string}
}}> = (props) => {
  return (
    <LayoutSection title="All Posts">
      <PostList posts={props.posts} />
    </LayoutSection>
  );
};

export function getStaticProps() {
  const posts = getAllPosts();
  console.log(posts);
  return {
    props: {
      posts: posts,
    },
  };
}

export default AllPosts;
