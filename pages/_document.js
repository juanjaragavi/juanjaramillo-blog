import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;700;900&family=Montserrat:wght@100;300;400;500;700;800&family=Raleway:wght@100;300;400;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <noscript>
          🇬🇧 Your Browser needs to have JavaScript enabled in order to run this
          Web App. | 🇪🇸 Tu Navegador necesita tener JavaScript activado para
          poder correr esta Web App.
        </noscript>
        <Head />
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
