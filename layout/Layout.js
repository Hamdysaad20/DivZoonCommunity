import React from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import MainDivzoonHeader from "../components/MainDivzoonHeader";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Divzoon👨‍💻 </title>
        <link rel='icon' href='/divicobg.ico' />
      </Head>

      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
