import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="beglaubigt.de" />
        <link rel="icon" href="/favicon.ico" />

        <link href="/plugin/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/plugin/GlowCookies/src/glowCookies.css" />

        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Prata&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/plugin/GlowCookies/src/glowCookies.js"></script>
        <script src="/js/glow-cookies.js"></script>

        <script src="/js/jquery-3.3.1.min.js"></script>
        <script src="/js/jquery-migrate-3.0.0.min.js"></script>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
          integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
          crossOrigin="anonymous"
        ></script>
        <script src="/plugin/bootstrap/js/bootstrap.min.js"></script>

        <script src="/js/main.js"></script>
      </body>
    </Html>
  );
}
