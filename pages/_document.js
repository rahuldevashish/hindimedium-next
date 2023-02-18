import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { themeStorageKey } from '@lib/theme'
const bgVariableName = '--bg'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <p> Hare Krishna </p>
        </body>
      </Html>
    )
  }
}

export default MyDocument
