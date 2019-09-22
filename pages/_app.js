import React from 'react';

import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Fullstack Developer</title>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
