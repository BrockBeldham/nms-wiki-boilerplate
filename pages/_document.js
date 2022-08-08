import Document, { Html, Head, Main, NextScript } from 'next/document';
import SvgSpritesheet from '../components/svg-spritesheet';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <SvgSpritesheet />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
