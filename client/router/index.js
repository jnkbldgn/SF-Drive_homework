import { lazy } from 'react';

export const routes = [
  {
    path: '/',
    component: lazy(() => import(/* webpackChunkName: 'About' */ 'layout/About')),
  },
  {
    path: '/registration',
    component: lazy(() => import(/* webpackChunkName: 'Registration' */ 'layout/Registration')),
  },
];

export default {
  routes,
};
