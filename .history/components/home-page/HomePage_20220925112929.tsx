import React from "react";
import Info from "../info/Info";
import PostList from "../posts/PostList";

const HomePage: React.FC = () => {
  return (
    <div>
      <Info />
      <PostList />
    </div>
  );
};

export default HomePage;
