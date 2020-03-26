import { HttpConfig } from 'features/common/utils/http';
import { useFetch } from 'features/common/hooks/http';

const url = '/logout/';

export const useCreateLogout = (onOk?: HttpConfig['onOk']) => {
  return useFetch('post', url, {
    onOk,
  });
};
