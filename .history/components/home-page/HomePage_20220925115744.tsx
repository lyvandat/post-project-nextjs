import React from "react";
import Info from "../info/Info";
import PostList from "../posts/PostList";
import LayoutSection from "../layout/LayoutSection";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Info />
      <LayoutSection>
        <PostList />
      </LayoutSection>
    </React.Fragment>
  );
};

export default HomePage;
