import React, { useState, ChangeEventHandler } from "react";
import classes from "./NewPost.module.css";

const NewPost: React.FC = (props) => {
  // 2 way binding.
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const inputNameHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const inputEmailHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  const inputFeedbackHandler: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFeedback(event.target.value);
  };

  function submitContactHandler() {}
  return (
    <section className={`${classes.contact} container`}>
      <h1> How can we help you ?</h1>
      <form onSubmit={submitContactHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              value={email}
              onChange={inputNameHandler}
              id="email"
              type="text"
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              value={name}
              onChange={inputNameHandler}
              id="name"
              type="text"
            ></input>
          </div>
        </div>
        <div className={classes.text}>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            value={feedback}
            onChange={inputNameHandler}
            id="feedback"
            rows={12}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default NewPost;
