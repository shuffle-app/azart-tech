import { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';
import Script from 'next/script';

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
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel-code"
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '2002507826747915');
                fbq('track', 'PageView');
              `,
          }}
          strategy="afterInteractive"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        {/* Yandex.Metrika noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div><img src="https://mc.yandex.ru/watch/93466519" style="position:absolute; left:-9999px;" alt="" /></div>`,
          }}
        />
        <noscript>
          <Image
            height={1}
            width={1}
            style={{ display: 'none' }}
            alt=""
            src="https://www.facebook.com/tr?id=2002507826747915&ev=PageView&noscript=1"
          />
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
