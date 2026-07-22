import axiosInstance from "../../utils/axios";
import isLocal from "../../utils/isLocal";

export const getRelatedVideos = async ({ tags, id }) => {
  if (isLocal) {
    const limit = 5;
    // This is a filtering query string
    const queryString =
      tags.length > 0
        ? tags.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${id}&_limit=${limit}`
        : `id_ne=${id}&_limit=${limit}`;

    const response = await axiosInstance.get(`/videos?${queryString}`);

    return response.data;
  }

  const response = await axiosInstance.get("/videos");

  return response.data
    .filter((video) => String(video.id) !== String(id))
    .filter((video) => video.tags.some((tag) => tags.includes(tag)))
    .slice(0, 5);
};
