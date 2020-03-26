import { HttpConfig } from 'features/common/utils/http';
import { useFetch } from 'features/common/hooks/http';

const url = '/register/';

export const useCreateRegister = (onOk?: HttpConfig['onOk']) => {
  return useFetch('post', url, {
    onOk,
  });
};
