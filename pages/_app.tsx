import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>gesture</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <link
          rel="shortcut icon"
          href="http://www.junfengshow.com/static/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
