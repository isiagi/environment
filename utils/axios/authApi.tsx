import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create Axios instance
const authInstance = axios.create({
  baseURL: "https://751b-102-85-181-182.ngrok-free.app/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to dynamically set the Authorization header
authInstance.interceptors.request.use(
  async (config) => {
    try {
      const user = await AsyncStorage.getItem("user"); // Retrieve user data from AsyncStorage
      const parsedUser = user ? JSON.parse(user) : null;

      if (parsedUser?.token) {
        config.headers.Authorization = `Token ${parsedUser.token}`;
      }
    } catch (error) {
      console.error("Error retrieving user token:", error);
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default authInstance;
