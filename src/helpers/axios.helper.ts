import axios from 'axios';
import { URL_BASE } from 'config/env.json';
import { errorHandler } from 'helpers';

const axiosHelper = () => {
  const axiosInstance = axios.create({
    baseURL: URL_BASE,
  });

  axiosInstance.interceptors.request.use(
    async (request) => {
      return request;
    },
    (error) => Promise.reject(error),
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      return errorHandler(error);
    },
  );

  return axiosInstance;
};

export default axiosHelper;
