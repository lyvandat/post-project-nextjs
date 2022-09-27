import type { NextPage } from "next";
import React from "react";
import MainNavigation from "../components/layout/MainNavigation";
import Info from "../components/info/Info";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Info />
    </React.Fragment>
  );
};

export default Home;
