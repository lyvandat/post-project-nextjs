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

  return {
    paths: paths,
    fallback: false, // ngoài các slug đã khai báo thì sẽ trả trang 404 not found
    // blocking, true sẽ pre-render khi có request và có thể trả về lỗi (true phải handle thêm trường hợp loading không thì sẽ xảy ra lỗi chưa có dữ liệu mà các dòng render đã chạy trước)
  };
};

export default DetailPage;
