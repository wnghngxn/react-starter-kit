import { useIntl } from 'lib/hooks/i18n';

export const useProps = () => {
  return {
    intl: useIntl(),
  };
};
