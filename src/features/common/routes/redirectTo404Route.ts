import { PageUrl } from 'features/common/constances';
import { RouteConst } from '../constances';

export const redirectTo404Route = {
  to: PageUrl.notFound,
  type: RouteConst.redirect,
};
