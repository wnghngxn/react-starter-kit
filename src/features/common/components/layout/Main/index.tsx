import React, { useState, Suspense, FC } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Box } from '@material-ui/core';
import { Loading } from 'features/common/components/Loading';
import ErrorBoundary from 'react-error-boundary';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useAutoEffect } from 'hooks.macro';
import t from 'tersus-jsx.macro';
import { usePush } from 'lib/hooks/route/usePush';
import { useAuth } from '../../../api/auth';
import { PageUrl } from '../../../constances';
import { Error } from '../../../components/Error';
import { ShiftContent } from '../../../components/ShiftContent';
import Sidebar from '../Sidebar';
import { Topbar } from '../Topbar';

// eslint-disable-next-line max-statements
export const Main: FC<RouteConfigComponentProps> = ({ route }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;
  const auth = useAuth();
  const location = useLocation();
  const isLoginPage = location.pathname === PageUrl.login;
  const isRootPage = location.pathname === PageUrl.root;
  const pushLoginPage = usePush(PageUrl.login);
  const pushUserPage = usePush(PageUrl.user);
  useAutoEffect(() => {
    if (!auth && !isLoginPage) {
      pushLoginPage();
    }
    if (auth && (isRootPage || isLoginPage)) {
      pushUserPage();
    }
  });
  return t(
    <ErrorBoundary FallbackComponent={Error}>
      <Switch>
        <Route tj-if={!auth} path={PageUrl.login}>
          <Topbar onSidebarOpen={handleSidebarOpen} main={!auth} />
          <Suspense fallback={<Loading />}>
            {route && renderRoutes(route.routes)}
          </Suspense>
        </Route>
        <Route tj-if={auth && !isLoginPage}>
          <ShiftContent shift={isDesktop}>
            <Topbar onSidebarOpen={handleSidebarOpen} main={auth} />
            <Sidebar
              onClose={handleSidebarClose}
              open={shouldOpenSidebar}
              variant={isDesktop ? 'persistent' : 'temporary'}
            />
            <Box p="10px">
              <Suspense fallback={<Loading />}>
                {route && renderRoutes(route.routes)}
              </Suspense>
            </Box>
          </ShiftContent>
        </Route>
      </Switch>
    </ErrorBoundary>,
  );
};
