import { useState, useEffect, useContext } from "react";
import { createClient } from "../prismicio";
import Select, { components } from "react-select";

import AppContext from "../appContext";
import Layout from "../components/layout";
import BlogList from "../components/blog/blog-list";

function filterBlog(blogs, tag) {
  return tag.value === "All"
    ? blogs
    : blogs.filter((item) =>
        item.data.tags.find((item) => item.tag.id === tag.value)
      );
}

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src="/arrow.png" alt="dropdown icon" />
    </components.DropdownIndicator>
  );
};

const Blog = ({ blogs, tags }) => {
  const context = useContext(AppContext);
  let { tagOptions, tag } = context.state;

  const [blogList, setBlogList] = useState([]);
  const [count, setCount] = useState(blogs.length);

  const handleTag = (selected) => {
    context.setTag(selected);
  };

  useEffect(() => {
    let blogArr = [];
    for (let i = 0; i < blogs?.length; i += 6) {
      blogArr.push(filterBlog(blogs, tag)?.slice(i, i + 6));
    }
    setBlogList(blogArr);
    setCount(filterBlog(blogs, tag).length);
  }, [blogs, tagOptions, tag]);

  return (
    <Layout>
      <section className="section blog-section">
        <div className="container">
          <h2 className="blog-section__title">Beglaubigt.de Blog</h2>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="blog-count">
              Neueste Zuerst <span>{count}</span>
            </p>
            <Select
              id="selectTag"
              instanceId="selectTag"
              options={tagOptions}
              value={tag}
              onChange={handleTag}
              isSearchable={false}
              components={{ DropdownIndicator }}
              styles={{
                valueContainer: (base) => ({
                  ...base,
                  padding: "0",
                }),
                control: (base) => ({
                  ...base,
                  outline: "none",
                  border: "none",
                  background: "#FFFFFF",
                  boxShadow: "0px 0px 4px rgba(12, 35, 69, 0.1)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  width: "160px",
                  height: "25px",
                  minHeight: "25px",
                }),
                menu: (base) => ({
                  ...base,
                  width: "auto",
                  overflow: "auto",
                  boxShadow: "0px 0px 4px rgba(12, 35, 69, 0.1)",
                  borderRadius: "8px",
                }),
                menuList: (base) => ({
                  ...base,
                  width: "160px",
                  height: "auto",
                }),
                singleValue: (base, state) => ({
                  ...base,
                  padding: "0 9px",
                  margin: 0,
                  borderRadius: "50%",
                  fontWeight: "600",
                  fontSize: "16px",
                  lineHeight: "153.5%",
                  color: state.isSelected ? "#1A5CBF" : "#0C2345",
                }),
                dropdownIndicator: () => ({
                  padding: "0 8px",
                }),
                indicatorSeparator: () => ({
                  display: "none",
                }),
                option: (base, state) => {
                  return {
                    ...base,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "1px 9px",
                    margin: "0",
                    width: "100%",
                    borderBottom: "1px solid rgba(19,19,19,0.1)",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "153.5%",
                    color: state.isSelected ? "#1A5CBF" : "#0C2345",
                    backgroundColor: state.isSelected
                      ? "rgba(217, 230, 242, 0.5)"
                      : "white",
                    borderRadius: "unset",
                    border: "unset",
                    "&:hover": {
                      color: "#1A5CBF",
                      backgroundColor: "rgba(217, 230, 242, 0.5)",
                    },
                  };
                },
              }}
            />
          </div>
          {blogList?.map((item, idx) => (
            <BlogList blogData={item} key={idx} tags={tags} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const blogs = await client.getAllByType("blog", {
    orderings: [
      { field: "document.data.publish-date", direction: "desc" },
      { field: "document.last_publication_date", direction: "desc" },
    ],
  });
  const tags = await client.getAllByType("tag");

  return {
    props: {
      blogs,
      tags,
    },
  };
}
