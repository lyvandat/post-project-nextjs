import Head from "next/head";

import PostDetail from "../../components/posts/PostDetail";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

import { getSinglePost, getAllFileName } from "../../lib/posts-util";
import post from "../../models/post";
import React from "react";

// tham khảo trang docs của nextjs
interface IParams extends ParsedUrlQuery {
  slug: string;
}

const DetailPage: React.FC<{ postDetail: post }> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{props.postDetail.title}</title>
        <meta name="description" content={props.postDetail.excerpt} />
      </Head>
      <PostDetail post={props.postDetail} />
    </React.Fragment>
  );
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
    revalidate: 600;
  });

  return {
    paths: paths,
    fallback: false, // ngoài các slug đã khai báo thì sẽ trả trang 404 not found
    // blocking, true sẽ pre-render khi có request và có thể trả về lỗi (true phải handle thêm trường hợp loading không thì sẽ xảy ra lỗi chưa có dữ liệu mà các dòng render đã chạy trước)
  };
};

export default DetailPage;
