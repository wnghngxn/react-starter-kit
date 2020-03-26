import useSWR from 'swr';
import { User } from 'features/user/resources/user';
import { HttpStatusCode } from 'constances/http';
import { fetch } from '../../utils/http';

// todo

export const useAuth = () => {
  const { data } = useSWR<HttpStatusCode>(
    '/current_user/',
    // @ts-ignore
    (url: string) => {
      return fetch<User>(url, 'get', {});
    },
    { suspense: true },
  );
  if (data === HttpStatusCode.OK) {
    return true;
  }
  return false;
};
