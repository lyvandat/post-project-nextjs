import { createPortal } from "react-dom";
import classes from "./Notification.module.css";

const Notification: React.FC<{ title: string }> = (props) => {
  return <div className={classes.notification}></div>;
};
