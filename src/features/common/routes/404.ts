import { lazy } from 'react';
import { PageUrl } from '../constances';

export const notFoundRoute = {
  path: [PageUrl.notFound],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  component: lazy(() => import('features/common/components/404')),
};
