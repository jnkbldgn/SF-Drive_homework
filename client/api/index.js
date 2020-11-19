import createInstance from './instance';

const instance = createInstance();

export function register(body) {
  return instance.post('/api/register', body);
}

export default {
  register,
};
