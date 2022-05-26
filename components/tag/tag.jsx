const TagItem = ({ tagData, allTags }) => {
  const tagItem = allTags.filter((item) => item.id === tagData.tag.id)[0].data;

  // const clickTag = (value) => onClickTab(value);

  return <span className="tag">{tagItem.name}</span>;
};

export default TagItem;
