import homeRoute from '@/router/routes/homeRoute';
import loginRoute from '@/router/routes/loginRoute';

const routes = [
  ...homeRoute,
  ...loginRoute,
  {
    path: '/',
    meta: {},
  },
];

export default routes;
