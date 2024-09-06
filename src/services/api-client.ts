import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiClient = axios.create({
    baseURL: apiUrl ,
})

export default apiClient;

export function getTokenIncludedConfig() {
    return {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
    };
  }
  