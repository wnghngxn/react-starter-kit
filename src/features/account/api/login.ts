import { useFetch } from 'features/common/hooks/http';
import { HttpConfig } from 'features/common/utils/http';

const url = '/login/';

export const useCreateLogin = (onOk?: HttpConfig['onOk']) => {
  return useFetch('post', url, {
    onOk,
  });
};
