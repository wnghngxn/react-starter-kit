import AccountBox from '@material-ui/icons/AccountBox';
import { USER } from '../constances';

export const nav = {
  title: USER.title,
  children: [
    {
      title: USER.title,
      href: USER.path,
      icon: AccountBox,
    },
  ],
};
