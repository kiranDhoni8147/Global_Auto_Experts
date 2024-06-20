// src/api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://global-expert-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
