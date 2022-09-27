import React from "react";
import ReactDOM from "react-dom";
import classes from "./Notification.module.css";

const element = document.querySelector("#notification") as HTMLElement;

const Notification: React.FC<{ message: { status: string; text: string } }> = (
  props
) => {
  return ReactDOM.createPortal(
    <div className={`${classes.notification} ${classes[props.message.status]}`}>
      {props.message.text}
    </div>,
    element
  );
};

export default Notification;
