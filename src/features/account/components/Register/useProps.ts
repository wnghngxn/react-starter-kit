import { useIntl } from 'lib/hooks/i18n';
import { useFormValidate } from 'lib/hooks/validate';
import { openSuccessSnackbar } from 'app/store';
import { useCreateRegister } from '../../api/register';

export const useProps = () => {
  const [register, loading, , error] = useCreateRegister(() => {
    openSuccessSnackbar('created!');
  });
  const username = 'username';
  const password = 'password';
  const registerCode = 'register_code';
  const validate = useFormValidate([username, password, registerCode], {});
  const intl = useIntl();
  return {
    register,
    loading,
    error,
    validate,
    intl,
    username,
    password,
    registerCode,
  };
};
