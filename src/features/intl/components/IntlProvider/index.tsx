import { IntlProvider } from 'lib/hooks/i18n';
import { connect } from 'react-redux';
import i18n from 'i18n/locales';
import { RootState } from 'app/store';
import { Locale } from '../../type';

const mapState = (state: RootState) => {
  const locale = state.intl.get('locale') as Locale;
  return {
    locale,
    messages: i18n[locale],
  };
};

export default connect(mapState)(IntlProvider);
