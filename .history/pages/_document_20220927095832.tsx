import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* merge với các thẻ trong head khác*/}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notification"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
