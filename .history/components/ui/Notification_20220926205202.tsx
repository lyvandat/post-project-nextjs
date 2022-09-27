import ReactDOM from "react-dom";
import classes from "./Notification.module.css";

const notificationElement = document.getElementById(
  "notification"
) as HTMLElement;

const Notification: React.FC<{ title: string }> = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.notification}></div>,
    notificationElement
  );
};
