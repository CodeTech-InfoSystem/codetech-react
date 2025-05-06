import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#AD954F" />
        <meta name="description" content="Codetech Infosystem - Innovative Tech Solutions" />
        <meta name="keywords" content="Software, Web Development, Codetech Infosystem, IT Solutions" />
        <meta property="og:title" content="Codetech Infosystem" />
        <meta property="og:description" content="We help build and manage software solutions for businesses." />
        <meta property="og:image" content="https://codetechinfosystem.com/images/logo.svg" />
        <meta property="og:url" content="https://codetechinfosystem.com/" />
        <title>Codetech Infosystem</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
