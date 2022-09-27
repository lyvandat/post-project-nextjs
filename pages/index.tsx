import type { NextPage } from "next";
import React from "react";
import Info from "../components/info/Info";
import PostList from "../components/posts/PostList";
import LayoutSection from "../components/layout/LayoutSection";
import { getFeaturedPosts } from "../lib/posts-util";

import post from "../models/post";

const Home: NextPage<{ featuredPosts: post[] }> = (props) => {
  return (
    <React.Fragment>
      <Info />
      <LayoutSection title="featured posts">
        <PostList posts={props.featuredPosts} />
      </LayoutSection>
    </React.Fragment>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
}

export default Home;
