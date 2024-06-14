// src/api/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:'https://global-expert-backend.onrender.com/api',   //url for production
  // baseURL: 'http://localhost:5000/api',    //url for localhost
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
