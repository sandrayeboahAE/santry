import Document, {
  Head, Html, Main, NextScript,
} from 'next/document';
import React from "react";


export default class _Document extends Document {

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
