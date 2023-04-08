import Document, { Html, Head, Main, NextScript } from 'next/document';
import SvgSpritesheet from '../components/svg-spritesheet';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/images/favicon/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon/favicon-16x16.png' />
          <link rel='manifest' href='/images/favicon/site.webmanifest' />
          <link rel='mask-icon' href='/images/favicon/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#b91d47' />
          <meta name='theme-color' content='#b7484e' />
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
