import { lazy } from 'react';

interface LazyComponentInfo {
  componentName: string;
  type?: 'component' | 'page';
}

export default function lazyLoad({
  type = 'page',
  componentName,
}: LazyComponentInfo) {
  return lazy(() => import(`@/${type}s/${componentName}`));
}
