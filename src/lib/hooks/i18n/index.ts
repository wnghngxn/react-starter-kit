import {
  useIntl as useReactIntl,
  IntlProvider,
  FormattedMessage,
} from 'react-intl';
import { Locale } from 'features/intl/type';

export { IntlProvider, FormattedMessage };

export const useLanguage = () => {
  const { locale } = useReactIntl();
  return locale as Locale;
};

export const useI18n = <T>(locales: Record<Locale, T>) => {
  const language = useLanguage();
  return locales[language];
};

export const useIntl = () => {
  const { formatMessage } = useReactIntl();
  return formatMessage;
};
