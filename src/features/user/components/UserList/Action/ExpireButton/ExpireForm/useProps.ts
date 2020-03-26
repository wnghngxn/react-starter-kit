import { useIntl } from 'lib/hooks/i18n';
import { useFormValidate } from 'lib/hooks/validate';
import { store } from 'app/store';
import { get } from 'lodash';
import { useUpdateUser } from '../../../../../api/user';

export const useProps = () => {
  const name = 'expiration_ts';
  const validate = useFormValidate([name], {});
  const intl = useIntl();
  // todo
  const [updateUserExpire, loading, , error, value] = useUpdateUser(() => {
    store.dispatch.user.setRefetching(Math.random());
    store.dispatch.feedback.closeDialog();
    store.dispatch.feedback.openSnackbar({
      content: 'updated!',
    });
  });
  const registerCode = get(value, 'register_code');
  return {
    name,
    validate,
    intl,
    updateUserExpire,
    loading,
    error,
    value,
    registerCode,
  };
};
