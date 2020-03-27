import React, { FC } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp';

import { useCreateLogout } from 'features/account/api/logout';
import t from 'tersus-jsx.macro';
import { AccountPageUrl } from 'features/account/constances';
import { usePush } from 'lib/hooks/route/usePush';
import { brand } from 'constances/site';
import { useStyles } from './index.style';

export const Topbar: FC<{
  onSidebarOpen?: () => void;
  main?: boolean;
}> = ({ onSidebarOpen, main = true }) => {
  const pushLoginPage = usePush(AccountPageUrl.login);
  const [logout, sent] = useCreateLogout(() => {
    pushLoginPage();
  });
  const classes = useStyles();
  return t(
    <AppBar color="primary" className={classes.appBar}>
      <Toolbar className={classes.space}>
        <Box component="span" fontSize="body2" mx={1}>
          {brand}
        </Box>
        <Box justifyItems="flex-end" display="flex">
          <IconButton onClick={() => logout({})} disabled={sent} tj-if={main}>
            <ExitToApp />
          </IconButton>
          <Box display="flex" clone>
            <Hidden mdUp implementation="css">
              <Button
                color="inherit"
                onClick={() => {
                  if (onSidebarOpen) {
                    onSidebarOpen();
                  }
                }}
              >
                <MenuIcon />
              </Button>
            </Hidden>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>,
  );
};
