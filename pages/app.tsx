import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/xenomaicono.svg" /> {/* Cambia "/favicon.ico" por la ruta de tu archivo */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}