// import classes from "./LayoutSection.module.css";
import React from "react";

const LayoutSection: React.FC<{ children: React.ReactNode; title: string }> = (
  props
) => {
  return (
    <section className="">
      <div className="container">
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </section>
  );
};

export default LayoutSection;
