import axios from 'axios';
import { API_SERVER_BASE_URL } from 'constances/url';

const baseConfig = {
  timeout: 10000,
  maxRedirects: 5,
  withCredentials: true,
  baseURL: API_SERVER_BASE_URL,
};

const http = axios.create(baseConfig);

http.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default http;
