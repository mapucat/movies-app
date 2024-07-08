import axios, { InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (process.env.REACT_APP_API_READ_ACCESS_TOKEN) {
      config.headers.Authorization = `Bearer ${process.env.REACT_APP_API_READ_ACCESS_TOKEN}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
