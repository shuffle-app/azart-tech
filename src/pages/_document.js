import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PQC67DR" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
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
