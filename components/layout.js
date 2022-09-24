import Footer from "./footer";
import Navbar from "./navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
