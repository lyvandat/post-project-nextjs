import classes from "./NewPost.module.css";

const NewPost: React.FC = (props) => {
  return (
    <section className={classes.contact}>
      <h1> How can we help you ?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text"></input>
        </div>
        <div className={classes.controls}>
          <label htmlFor="email">Your Email</label>
          <input id="email" type="text"></input>
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default NewPost;
