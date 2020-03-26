import { usePush } from 'lib/hooks/route/usePush';
import { useIntl } from 'lib/hooks/i18n';
import { useFormValidate } from 'lib/hooks/validate';
import { PageUrl } from 'features/common/constances';
import { mutate } from 'swr';
import { useCreateLogin } from '../../api/login';

export const useProps = () => {
  const push = usePush(undefined);
  const [login, loading, , error] = useCreateLogin(() => {
    mutate('/user');
    push(PageUrl.user);
  });
  const username = 'username';
  const password = 'password';
  const validate = useFormValidate([username, password], {});
  const intl = useIntl();
  return {
    push,
    loading,
    login,
    error,
    username,
    password,
    validate,
    intl,
  };
};
