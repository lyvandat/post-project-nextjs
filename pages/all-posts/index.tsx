import Head from "next/head";
import React from "react";

import LayoutSection from "../../components/layout/LayoutSection";
import PostList from "../../components/posts/PostList";
import { getAllPosts } from "../../lib/posts-util";

import post from "../../models/post";

const AllPosts: React.FC<{
  posts: post[];
}> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Posts about Frontend</title>
        {/* nếu có thêm 1 thẻ meta description nữa thì thẻ sau đè thẻ trước */}
        <meta
          name="description"
          content="welcome to our posts about nextjs and reactjs"
        ></meta>
      </Head>
      <LayoutSection title="All Posts">
        <PostList posts={props.posts} />
      </LayoutSection>
    </React.Fragment>
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
