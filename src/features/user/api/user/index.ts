import { useHttp, useFetch } from 'features/common/hooks/http';
import { HttpConfig } from 'features/common/utils/http';
import { useAutoMemo } from 'hooks.macro';
import { User } from '../../resources/user';

// todo

const url = '/user/';

export const useUserList = (params: { query: string; randam?: number }) => {
  const data = useAutoMemo({
    params,
  });
  return useHttp<User[]>('get', url, data);
};

export const useUpdateUser = (
  onOk: HttpConfig['onOk'],
  onErr?: HttpConfig['onErr'],
) => {
  return useFetch('patch', url, {
    onOk,
    onErr,
  });
};

export const useCreateUser = (
  onOk?: HttpConfig['onOk'],
  onErr?: HttpConfig['onErr'],
) => {
  return useFetch('post', url, {
    onOk,
    onErr,
  });
};
