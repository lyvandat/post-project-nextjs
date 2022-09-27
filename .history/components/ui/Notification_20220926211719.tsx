import React from "react";
import ReactDOM from "react-dom";
import classes from "./Notification.module.css";

const Notification: React.FC<{ message: { status: string; text: string } }> = (
  props
) => {
  const element = ReactDOM.createPortal(
    <div className={`${classes.notification} ${classes[props.message.status]}`}>
      {props.message.text}
    </div>,
    document.getElementById("notification") as HTMLElement
  );

  return element;
};

export default Notification;
