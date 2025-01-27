import axios from "axios";

const instance = axios.create({
  baseURL: "https://9669-102-86-0-173.ngrok-free.app/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
