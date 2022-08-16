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
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
                ga("create", "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}", "auto");
                ga("send", "pageview");
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
