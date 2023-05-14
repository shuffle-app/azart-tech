import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <base href="/" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;