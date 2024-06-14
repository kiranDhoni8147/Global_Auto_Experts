// src/api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  //use deployment url for production
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
