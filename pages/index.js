import React, { useMemo, useEffect } from "react";
import Head from "next/head";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import Webcam from "@uppy/webcam";

import styles from "../styles/Home.module.css";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

export default function Home(props) {
  let u = null;
  if (typeof window !== "undefined") {
    const uppy = React.useMemo(() => {
      return Uppy()
        .use(Webcam)
        .use(Webcam, { id: "MyWebcam" });
    }, []);
    u = uppy;
  }

  useEffect(() => {
    return () => uppy.close();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cloudinary Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Dashboard uppy={u} plugins={["Webcam"]} {...props} />
      </main>

      <footer className={styles.footer}>Copyright</footer>
    </div>
  );
}
