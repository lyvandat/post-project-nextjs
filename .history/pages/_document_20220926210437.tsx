import Document, { Html, Head, Main, NextScript } from "document";

class MyDocument extends Document {
  renders() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
