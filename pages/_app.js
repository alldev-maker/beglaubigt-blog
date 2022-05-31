import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import AppContext from "./appContext";
import { linkResolver, repositoryName } from "../prismicio";

import "../styles/styles.css";
import "../styles/scss/index.scss";

export default function App({ Component, pageProps }) {
  const { tags } = pageProps;

  const tagOptions = [{ value: "All", label: "All" }];
  for (let i = 0; i < tags?.length; i++)
    tagOptions.push({ value: tags[i]?.id, label: tags[i]?.data.name });

  const [tag, setTag] = useState(tagOptions[0]);

  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <Head>
        <title>beglaubigt.de - Der Digitale Notar</title>
      </Head>
      <PrismicPreview repositoryName={repositoryName}>
        <AppContext.Provider
          value={{
            state: { tagOptions: tagOptions, tag: tag },
            setTag: setTag,
          }}
        >
          <Component {...pageProps} />
        </AppContext.Provider>
      </PrismicPreview>
    </PrismicProvider>
  );
}
