// src/api/httpService.js
import axiosInstance from './axiosConfig';

// GET request
export const get = async (url, config = {}) => {
  try {
    const response = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// POST request
export const post = async (url, data, config = {}) => {
  try {
    const response = await axiosInstance.post(url, data, config);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// PUT request
export const put = async (url, data, config = {}) => {
  try {
    const response = await axiosInstance.put(url, data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// DELETE request
export const del = async (url, config = {}) => {
  try {
    const response = await axiosInstance.delete(url, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
