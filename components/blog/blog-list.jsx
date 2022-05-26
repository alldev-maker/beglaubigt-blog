import Article from "./article";

function setClassName(index) {
  switch (index) {
    case 0:
      return "article1 col-12";
    case 1:
      return "article3 col-md-6 col-lg-4";
    case 2:
      return "article3 col-md-6 col-lg-4";
    case 3:
      return "article3 col-md-6 col-lg-4";
    case 4:
      return "article2 col-md-6";
    case 5:
      return "article2 col-md-6";
    default:
      return "";
  }
}

const BlogList = ({ blogData, tags }) => {
  return (
    <div className="row">
      {blogData.map((item, idx) => (
        <div className={setClassName(idx)} key={idx}>
          <Article article={item} tags={tags} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
