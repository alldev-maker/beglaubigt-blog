import Head from "next/head";

const SEO = (props) => {
  const { title, description, keyword, image } = props.slice.primary;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:image" content={image.url} />
    </Head>
  );
};

export default SEO;
