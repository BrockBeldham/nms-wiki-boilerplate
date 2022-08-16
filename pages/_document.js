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
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag('js', new Date());
              
                window.gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
              `
            }}
          />
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
