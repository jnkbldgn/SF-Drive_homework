import axios from 'axios';

const transformResponse = (res) => res.data;

export default function createInstance() {
  const instance = axios.createInstance({
    transformResponse,
  });

  return instance;
}
