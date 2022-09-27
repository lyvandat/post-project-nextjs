import PostDetail from "../../components/posts/PostDetail";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

import { getSinglePost, getAllFileName } from "../../lib/posts-util";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

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
  const { slug } = context.params as IParams;
  const postDetail = getSinglePost(slug);

  return {
    props: {
      postDetail,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const fileNames = getAllFileName();

  const paths = fileNames.map((file) => {
    const slug = file.replace(/\.md$/, "");

    return {
      params: { slug },
    };
  });
};

export default DetailPage;
