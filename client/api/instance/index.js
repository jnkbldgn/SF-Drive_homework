import axios from 'axios';

const transformResponse = (res) => res.data;

export default function createInstance() {
  const instance = axios.create();
  axios.interceptors.response.use(transformResponse);

  return instance;
}
