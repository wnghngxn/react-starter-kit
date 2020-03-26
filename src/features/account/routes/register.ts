import { lazy } from 'react';
import { AccountPageUrl } from '../constances';

export const registerRoute = {
  path: AccountPageUrl.register,
  exact: true,
  component: lazy(() => import('../components/Register')),
};
