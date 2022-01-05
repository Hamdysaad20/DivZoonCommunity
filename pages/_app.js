import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from "../layout/Layout";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
      <link rel="Divzoon icon" href="/divicobg.ico" />

      </Head>
    <Component  {...pageProps} />
    </Layout>  
  );
}

export default MyApp
