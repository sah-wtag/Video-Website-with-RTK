import axios from "axios";
import isLocal from "./isLocal";

const axiosInstance = axios.create({
  baseURL: isLocal
    ? "http://localhost:9000"
    : "https://6a605e27b1933e9d25fd2150.mockapi.io/api/v1",
});

export default axiosInstance;
