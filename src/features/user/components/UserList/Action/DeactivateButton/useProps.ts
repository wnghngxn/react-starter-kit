import { useIntl } from 'lib/hooks/i18n';
import { openSuccessSnackbar, openErrorSnackbar } from 'app/store';
import { useUpdateUser } from '../../../../api/user';

export const useProps = (refresh: (x: number) => void) => {
  const intl = useIntl();
  const [deactive] = useUpdateUser(
    () => {
      refresh(Math.random());
      openSuccessSnackbar('deactived!');
    },
    e => {
      openErrorSnackbar(e.message);
    },
  );
  const confirmMessage = intl({ id: 'sentence.confirm' });
  return { confirmMessage, deactive, intl };
};
