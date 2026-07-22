import axiosInstance from "../../utils/axios";
import isLocal from "../../utils/isLocal";

export const getVideos = async ({ tags, search }) => {
  if (isLocal) {
    let queryString = "";

    if (tags?.length > 0) {
      queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
      queryString += `${queryString ? "&" : ""}q=${search}`;
    }

    const response = await axiosInstance.get(`/videos?${queryString}`);
    return response.data;
  }

  // MockAPI
  const response = await axiosInstance.get("/videos");

  let videos = response.data;

  if (tags?.length > 0) {
    videos = videos.filter((video) =>
      video.tags.some((tag) => tags.includes(tag))
    );
  }

  if (search.trim() !== "") {
    const text = search.toLowerCase();

    videos = videos.filter(
      (video) =>
        video.title.toLowerCase().includes(text) ||
        video.description.toLowerCase().includes(text) ||
        video.author.toLowerCase().includes(text)
    );
  }

  return videos;
};
