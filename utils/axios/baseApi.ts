import axios from "axios";

const instance = axios.create({
  baseURL: "https://environment-be.onrender.com/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
