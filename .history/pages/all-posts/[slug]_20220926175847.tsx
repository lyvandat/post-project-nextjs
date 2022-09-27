import { GetStaticProps } from "next";
import PostDetail from "../../components/posts/PostDetail";
import { getSinglePost } from "../../lib/posts-util";

type post = {
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
};

const DetailPage: React.FC<{ postDetail: post }> = (props) => {
  return <PostDetail post={props.postDetail} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;
  const postDetail = getSinglePost(slug);

  return {
    props: {
      postDetail,
    },
  };
};

export default DetailPage;
