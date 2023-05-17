import Head from 'next/head';
import '../styles/globals.css';
import { Cookie } from '@/components/common/Cookie/Cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const alreadyShown = window.localStorage.getItem('cookie') === 'true';

    if (!alreadyShown) {
      setShowCookie(true);
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.fbq('track', 'PageView');
    };

    // the below will only fire on route changes (not initial load - that is handled in the script below)
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PQC67DR' });
  }, []);

  return (
    <>
      <Head>
        <base href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />

      {showCookie && <Cookie />}
    </>
  );
}

export default MyApp;
