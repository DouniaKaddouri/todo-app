// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Remplacez par l'URL de votre API
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
