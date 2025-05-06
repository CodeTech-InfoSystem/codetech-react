import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#AD954F" />
        <meta name="description" content="Codetech Infosystem - Innovative Tech Solutions" />
        <meta name="keywords" content="Software, Web Development, Codetech Infosystem, IT Solutions" />
        <meta property="og:title" content="Codetech Infosystem" />
        <meta property="og:description" content="We help build and manage software solutions for businesses." />
        <meta property="og:image" content="https://codetechinfosystem.com/images/logo.svg" />
        <meta property="og:url" content="https://codetechinfosystem.com/" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>Codetech Infosystem</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
