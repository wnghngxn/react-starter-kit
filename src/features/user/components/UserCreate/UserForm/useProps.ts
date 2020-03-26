import { useIntl } from 'lib/hooks/i18n';
import { useFormValidate } from 'lib/hooks/validate';
import { store } from 'app/store';
import { useAutoMemo } from 'hooks.macro';
import { useCreateUser } from '../../../api/user';
import { UserColumns } from '../../../resources/user';
// todo
export const useProps = () => {
  const fieldName = useAutoMemo({
    title: UserColumns.id,
    expire: UserColumns.expire,
  });
  const requiredFields = useAutoMemo([fieldName.expire]);
  const validate = useFormValidate(requiredFields, {});
  const intl = useIntl();
  const [create, loading, , error, value] = useCreateUser(() => {
    store.dispatch.feedback.closeDialog();
    store.dispatch.user.setRefetching(Math.random());
  });
  return {
    create,
    loading,
    error,
    value,
    validate,
    intl,
    fieldName,
  };
};
