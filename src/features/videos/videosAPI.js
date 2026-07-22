import axiosInstance from "../../utils/axios";
import PAGE_SIZE from "../../utils/page_size";

export const getVideos = async ({ tags, search, page }) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  queryString += `&_page=${page}&_limit=${PAGE_SIZE}`;
  const response = await axiosInstance.get(`/videos/?${queryString}`);
  return {
    videos: response.data,
    totalCount: Number(response.headers["x-total-count"]),
  };
};
