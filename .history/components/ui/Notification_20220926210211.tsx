import ReactDOM from "react-dom";
import classes from "./Notification.module.css";

const Notification: React.FC<{ message: { status: string; text: string } }> = (
  props
) => {
  const notificationElement = document.getElementById(
    "notification"
  ) as HTMLElement;
  return ReactDOM.createPortal(
    <div className={`${classes.notification} ${classes[props.message.status]}`}>
      {props.message.text}
    </div>,
    notificationElement
  );
};

export default Notification;
