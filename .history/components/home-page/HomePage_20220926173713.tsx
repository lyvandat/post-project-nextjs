import React from "react";
import Info from "../info/Info";
import PostList from "../posts/PostList";
import LayoutSection from "../layout/LayoutSection";
import { getFeaturedPosts } from "../../lib/posts-util";

type post = {
  slug: string;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  content: string;
};

const HomePage: React.FC<{ featuredPosts: post[] }> = (props) => {
  return (
    <React.Fragment>
      <Info />
      <LayoutSection title="featured posts">
        <PostList posts={props.featuredPosts} />
      </LayoutSection>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      featuredPosts,
    },
  };
}

export default HomePage;
