import createInstance from './instance';

const instance = createInstance();

export function register(data) {
  return instance.post('/api/register', data);
}

export default {
  register,
};
