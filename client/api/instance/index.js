import axios from 'axios';

const transformResponseSuccess = (response) => response.data;
const transformResponseReject = (error) => Promise.reject(error.response);

export default function createInstance() {
  const instance = axios.create();
  instance.interceptors.response.use(transformResponseSuccess, transformResponseReject);

  return instance;
}
