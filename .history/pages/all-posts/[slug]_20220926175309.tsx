import { GetStaticProps } from "next";
import PostDetail from "../../components/posts/PostDetail";
import { getSinglePost } from "../../lib/posts-util";

const DetailPage: React.FC = (props) => {
  return <PostDetail />;
};

export function getStaticProps<GetStaticProps>(context) {
  const { params } = context;
  const { slug } = params;
  const postDetail = getSinglePost(slug);

  return {
    props: {
      post: postDetail,
    },
  };
}

export default DetailPage;
