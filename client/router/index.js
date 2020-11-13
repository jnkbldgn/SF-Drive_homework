import { lazy } from 'react';

const layout = (name) => lazy(() => import(`layout/${name}`));

export const routes = [
  {
    path: '/',
    component: layout('About'),
  },
  {
    path: '/registration',
    component: layout('Registration'),
  },
];

export default {
  routes,
};
