import { useContext, useCallback } from "react";
import { useRouter } from "next/router";
import AppContext from "../../appContext";

const TagItem = ({ tagData, allTags }) => {
  const context = useContext(AppContext);
  const router = useRouter();

  const tagItem = allTags.filter((item) => item.id === tagData.tag.id)[0];

  const handleTag = useCallback(() => {
    router.push("/blog");
    context.setTag({ value: tagItem.id, label: tagItem.data.name });
  }, []);

  return (
    <span className="tag" onClick={handleTag}>
      {tagItem.data.name}
    </span>
  );
};

export default TagItem;
