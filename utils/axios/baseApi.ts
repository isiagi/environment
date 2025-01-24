import axios from "axios";

const instance = axios.create({
  baseURL: "https://751b-102-85-181-182.ngrok-free.app/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
