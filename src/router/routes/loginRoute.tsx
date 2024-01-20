import { lazyLoad } from '@/utils';

const loginRoute = [
  {
    path: '/login',
    element: lazyLoad({ componentName: 'login' }),
    meta: {
      title: '登录',
      isAuth: false,
    },
  },
];

export default loginRoute;
