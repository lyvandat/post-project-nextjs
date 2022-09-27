import type { NextPage } from "next";
import React from "react";
import Info from "../components/info/Info";
import PostList from "../components/posts/PostList";
import LayoutSection from "../components/layout/LayoutSection";
import { getFeaturedPosts } from "../lib/posts-util";

type post = {
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
};

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
