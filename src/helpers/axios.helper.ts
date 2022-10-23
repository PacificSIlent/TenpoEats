import axios from 'axios';
import { URL_BASE } from 'config/env.json';
import { errorHandler } from 'helpers';

const contadorError1 = 2;
const contadorError2 = 8;

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
    (response) => {
      const contador = Math.floor(Math.random() * 10);
      if (
        (contador === contadorError1 || contador === contadorError2) &&
        response.config.url?.includes('dashboard')
      ) {
        return Promise.reject(new Error('Sin data'));
      }
      return response;
    },
    async (error) => {
      return errorHandler(error);
    },
  );

  return axiosInstance;
};

export default axiosHelper;
