import { lazyLoad } from '@/utils';

const homeRoute = [
  {
    element: lazyLoad({ componentName: 'home' }),
    path: '/home',
    meta: {
      title: '首页',
      isAuth: true,
    },
    children: [],
  },
];

export default homeRoute;
