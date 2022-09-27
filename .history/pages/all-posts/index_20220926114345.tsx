import LayoutSection from "../../components/layout/LayoutSection";
import PostList from "../../components/posts/PostList";

const AllPosts: React.FC = (props) => {
  return (
    <LayoutSection title="All Posts">
      <PostList />
    </LayoutSection>
  );
};

export default AllPosts;
