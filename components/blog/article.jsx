import Image from "next/image";
import { PrismicLink } from "@prismicio/react";

import TagItem from "../tag/tag";

const Article = ({ article, tags }) => {
  return (
    <article>
      <div className="article-img">
        <Image
          src={article.data.previewImg.url}
          alt={article.data.previewImg.alt}
          width={article.data.previewImg.dimensions.width}
          height={article.data.previewImg.dimensions.height}
          layout="responsive"
          priority
        />
      </div>
      <div className="article-brief">
        <div className="d-flex flex-wrap mb-3">
          {article.data.tags.map((item, idx) => (
            <TagItem allTags={tags} tagData={item} key={idx} />
          ))}
        </div>
        <PrismicLink document={article}>
          <h4 className="article-title">{article.data.title}</h4>
          <p className="article-summary my-3">{article.data.summary}</p>
          <div className="author">
            <Image
              src={article.data.publisherAvatar.url}
              alt={article.data.publisherAvatar.alt}
              width={45}
              height={45}
              className="author__avatar"
            />
            <p className="author__name">{article.data.publisherName}</p>
          </div>
        </PrismicLink>
      </div>
    </article>
  );
};

export default Article;
