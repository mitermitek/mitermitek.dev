import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Kevin Mitermite - French web developer.</title>
      </Head>
      <Navbar />
      <main className="container mx-auto px-2 sm:px-4 py-2.5 mb-10">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
