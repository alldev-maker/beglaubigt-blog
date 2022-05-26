import Link from "next/link";
import Image from "next/image";
import * as prismicH from "@prismicio/helpers";
import { RichText } from "prismic-reactjs";

import Layout from "../../components/layout";
import TagItem from "../../components/tag/tag";
import Article from "../../components/blog/article";

import { createClient, linkResolver } from "../../prismicio";
import htmlSerializer from "../../utils/htmlSerializer";

import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import formatDate from "../../utils/formatDate";

const BlogDetail = ({ blog, latestBlogs, tags, slices }) => {
  return (
    <Layout>
      <section className="section blog-detail">
        <div className="container">
          <div className="d-flex justify-content-center">
            {blog.data.tags.map((item, idx) => (
              <TagItem tagData={item} allTags={tags} key={idx} />
            ))}
          </div>
          <h1 className="blog-title">{blog.data.title}</h1>
          <div className="d-flex justify-content-between">
            <div className="author">
              <Image
                src={blog.data.publisherAvatar.url}
                alt={blog.data.publisherAvatar.alt}
                width={45}
                height={45}
                className="author__avatar"
              />
              <p className="author__name">{blog.data.publisherName}</p>
            </div>
            <p className="publish-date">{formatDate(blog.data.publishDate)}</p>
          </div>
          <div className="summary">
            <p className="my-5">{blog.data.summary}</p>
            <Image
              src={blog.data.previewImg.url}
              alt={blog.data.previewImg.alt}
              width={blog.data.previewImg.dimensions.width}
              height={blog.data.previewImg.dimensions.height}
              layout="responsive"
              priority
            />
          </div>
          <div className="blog-content">
            <RichText
              render={blog.data.content}
              htmlSerializer={htmlSerializer}
            />
          </div>
          <div className="back-link">
            <Link href="/blog">
              <a>Zurück zum Blog</a>
            </Link>
          </div>
        </div>
      </section>
      <section className="section latest-blogs pt-0">
        <div className="container">
          <div className="row">
            {latestBlogs.map((item, idx) => (
              <div className="article3 col-md-6 col-lg-4" key={idx}>
                <Article article={item} tags={tags} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <SliceZone slices={slices} components={components} />
    </Layout>
  );
};

export default BlogDetail;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const blog = await client.getByUID("blog", params.uid);
  const latestBlogs = await client.getAllByType("blog", {
    limit: 3,
    orderings: [
      { field: "document.data.publish-date", direction: "desc" },
      { field: "document.last_publication_date", direction: "desc" },
    ],
  });
  const tags = await client.getAllByType("tag");

  return {
    props: {
      blog,
      latestBlogs,
      tags,
      slices: blog.data.slices,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const blogs = await client.getAllByType("blog");

  return {
    paths: blogs.map((blog) => prismicH.asLink(blog, linkResolver)),
    fallback: false,
  };
}
