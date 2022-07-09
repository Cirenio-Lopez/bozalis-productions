import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Thomas Bozalis | Film Maker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Rising Film Maker | Portfolio for Thomas Bozalis"
        />
        <link rel="icon" href="/favicon.png" />
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thomas Bozalis" />
        <meta name="twitter:image" content="/metaCard.png" />
        <meta
          name="twitter:description"
          content="Rising Film Maker | Portfolio for Thomas Bozalis"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
