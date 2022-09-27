import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Head from 'next/head'; 
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Welcome to our posts about web development</title>
        <meta name="description" content="useful lessons about state-of-the-art web development tools and features are wrapped in this website" />
      </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </React.Fragment>
  );
}

export default MyApp;
