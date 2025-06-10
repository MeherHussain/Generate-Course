import axios from "axios"; // Replace require with import

const YouTube_service = "https://www.googleapis.com/youtube/v3/search";
const GetVideos = async (query) => {
  const params = {
    part: "snippet",
    q: query,
    maxResults: 1,
    type: "video",
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };
  const response = await axios.get(YouTube_service, { params });
  return response.data.items;
};

export default GetVideos;
