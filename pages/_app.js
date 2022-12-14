import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
