// @ts-nocheck
import React, { FC, Suspense, StrictMode } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from 'app/store';
import IntlProvider from 'features/intl/components/IntlProvider';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import muiTheme, { styledTheme } from 'theme';
import Dialog from 'features/feedback/components/Dialog/container';
import Confirm from 'features/feedback/components/Confirm/container';
import Snackbar from 'features/feedback/components//Snackbar/container';
import { GlobalStyle } from 'features/common/components/GlobalStyle';
import ErrorBoundary from 'react-error-boundary';
import { Error } from 'features/common/components/Error';
import { renderRoutes } from 'react-router-config';
import { routes } from 'features/common/routes';
import { Loading } from 'features/common/components/Loading'; // @ts-nocheck
import jss from './plugins/jss';

export const App: FC = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <IntlProvider>
            <ConnectedRouter history={history}>
              <MuiThemeProvider theme={muiTheme}>
                <StyledThemeProvider theme={styledTheme}>
                  <ErrorBoundary FallbackComponent={Error}>
                    <StylesProvider jss={jss}>
                      <CssBaseline />
                      {renderRoutes(routes)}
                      <Dialog />
                      <Confirm />
                      <Snackbar />
                      <GlobalStyle />
                    </StylesProvider>
                  </ErrorBoundary>
                </StyledThemeProvider>
              </MuiThemeProvider>
            </ConnectedRouter>
          </IntlProvider>
        </Suspense>
      </Provider>
    </StrictMode>
  );
};
