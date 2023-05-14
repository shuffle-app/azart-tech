
import "../styles/globals.css";




import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import Loader from "@/components/shared/Loader";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    Router.events.on('routeChangeStart', startLoading);
    Router.events.on('routeChangeComplete', stopLoading);
    Router.events.on('routeChangeError', stopLoading);

    // Завершаем загрузку после первой отрисовки
    setTimeout(stopLoading, 1000); // Задержка в 1 секунду

    return () => {
      Router.events.off('routeChangeStart', startLoading);
      Router.events.off('routeChangeComplete', stopLoading);
      Router.events.off('routeChangeError', stopLoading);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Loader/> // Ваш лоадер здесь
      ) : (
        <>
          <Head>
            <base href="/" />
          </Head>
          <Component {...pageProps} />
        </>
      )}
    </div>
  );
}
