import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
         
          <Main />
          <NextScript />
          <p> Hare Krishna </p>
        </body>
      </Html>
    )
  }
}
export default MyDocument