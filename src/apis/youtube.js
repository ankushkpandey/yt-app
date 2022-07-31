import axios from "axios";
const KEY = "AIzaSyBjLl8O3gfc1fth7imvR15RdjHS_-pZNMw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
