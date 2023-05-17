import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';
import Script from 'next/script';
import { FB_PIXEL_ID } from '@/utils/fpixel';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Yandex.Metrika */}
        <Script
          id="yandex-metrika"
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(93466519, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:true});
              `,
          }}
          strategy="afterInteractive"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {/* Yandex.Metrika noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div><img src="https://mc.yandex.ru/watch/93466519" style="position:absolute; left:-9999px;" alt="" /></div>`,
          }}
        />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
