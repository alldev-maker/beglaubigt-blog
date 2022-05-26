import dayjs from "dayjs";

const formatDate = (date) => {
  return dayjs(date).format("D. MMM YYYY");
};

export default formatDate;
