import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  renders() {
    return (
      <Html>
        <Head></Head>
        <body>
          <div id="notification"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
