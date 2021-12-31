import React from "react";
import Head from "next/head";

import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <>
   
      <Head>
        <title>Divzoon👨‍💻 </title>
        <link rel="icon" href="/divicobg.ico" />

      </Head>
      
      <main className={styles.main}>{children}</main>
     
    </>
  );
};

export default Layout;