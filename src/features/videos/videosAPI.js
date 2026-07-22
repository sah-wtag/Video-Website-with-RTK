import axiosInstance from "../../utils/axios";
import isLocal from "../../utils/isLocal";
import PAGE_SIZE from "../../utils/page_size";

export const getVideos = async ({ tags, search, page }) => {
  if (isLocal) {
    let queryString = "";

    if (tags?.length > 0) {
      queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
      queryString += `${queryString ? "&" : ""}q=${search}`;
    }

    queryString += `${queryString ? "&" : ""}_page=${page}&_limit=${PAGE_SIZE}`;

    const response = await axiosInstance.get(`/videos?${queryString}`);

    return {
      videos: response.data,
      totalCount: Number(response.headers["x-total-count"]),
    };
  }

  // ============================
  // MockAPI
  // ============================

  const response = await axiosInstance.get("/videos");

  let videos = response.data;

  // Filter by tags
  if (tags?.length > 0) {
    videos = videos.filter((video) =>
      video.tags.some((tag) => tags.includes(tag))
    );
  }

  // Filter by search
  if (search.trim() !== "") {
    const text = search.toLowerCase();

    videos = videos.filter(
      (video) =>
        video.title.toLowerCase().includes(text) ||
        video.description.toLowerCase().includes(text) ||
        video.author.toLowerCase().includes(text)
    );
  }

  // Total videos after filtering
  const totalCount = videos.length;

  // Pagination
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  videos = videos.slice(start, end);

  return {
    videos,
    totalCount,
  };
};