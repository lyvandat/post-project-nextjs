import React from "react";
import ReactDOM from "react-dom";
import classes from "./Notification.module.css";

const Notification: React.FC<{ message: { status: string; text: string } }> = (
  props
) => {
  return ReactDOM.createPortal(
    <div className={`${classes.notification} ${classes[props.message.status]}`}>
      {props.message.text}
    </div>,
    document.getElementById("notification") as HTMLElement
  );
};

export default Notification;
