import { USER } from 'features/user/constances';
import { RouteConst } from 'features/common/constances';

export const redirectToUser = {
  to: USER.path,
  type: RouteConst.redirect,
};
