import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <React.Fragment>
      <MainNavigation></MainNavigation>
      <main className={classes.main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
