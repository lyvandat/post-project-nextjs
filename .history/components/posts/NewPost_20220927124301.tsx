import { rejects } from "assert";
import React, { useState, ChangeEventHandler, FormEvent } from "react";
import Notification from "../ui/Notification";
import classes from "./NewPost.module.css";

const NewPost: React.FC = (props) => {
  // 2 way binding.
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState({
    status: "",
    text: "",
  });

  const inputNameHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };

  const inputEmailHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value);
  };

  const inputFeedbackHandler: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setFeedback(event.target.value);
  };

  function submitContactHandler(e: FormEvent) {
    e.preventDefault();

    const contactInfo = {
      email,
      name,
      feedback,
    };

    setMessage({ status: "pending", text: "Inserting contact info to db..." });
    fetch("/api/new-post", {
      method: "POST",
      body: JSON.stringify(contactInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) return res.json();

        // handle status error
        return res.json().then((data) => {
          setMessage({ status: "error", text: data.message });
        });
      })
      .then((data) => {
        setMessage({ status: "success", text: data.message });

        // reset contact input form.
        setEmail("");
        setName("");
        setFeedback("");
      })
      .catch((error) => setMessage({ status: "pending", text: error.message }));
  }

  return (
    <React.Fragment>
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
                onChange={inputEmailHandler}
                id="name"
                type="text"
              ></input>
            </div>
          </div>
          <div className={classes.text}>
            <label htmlFor="feedback">Your Feedback</label>
            <textarea
              value={feedback}
              onChange={inputFeedbackHandler}
              id="feedback"
              rows={12}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
      {message.status && <Notification message={message} />}
    </React.Fragment>
  );
};

export default NewPost;
