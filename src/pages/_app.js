import Head from 'next/head';
import '../styles/globals.css';
import Script from 'next/script';
import { Cookie } from '@/components/common/Cookie/Cookie';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const alreadyShown = window.localStorage.getItem('cookie') === 'true';

    if (!alreadyShown) {
      setShowCookie(true);
    }
  }, []);

  return (
    <>
      <Head>
        <base href="/" />
      </Head>
      <>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PQC67DR');`,
          }}
          strategy="afterInteractive"
        />
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
      </>
      <Component {...pageProps} />

      {showCookie && <Cookie />}
    </>
  );
}

export default MyApp;
