import { Fragment } from "react";
import Head from "next/head";
import NewPost from "../components/posts/NewPost";
const NewPostPage: React.FC = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Adding new contact</title>
        <meta
          name="description"
          content="Adding new feedback detail to our posts"
        />
      </Head>
      <NewPost />
    </Fragment>
  );
};

export default NewPostPage;
