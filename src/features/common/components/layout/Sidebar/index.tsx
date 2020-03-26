import React, { FC } from 'react';
import { Drawer } from '@material-ui/core';
import { nav } from 'features/common/nav';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { SIDEBAR_WIDTH } from 'constances/layout';
import SidebarNav from './SidebarNav';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: SIDEBAR_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: SIDEBAR_WIDTH,
    },
    toolbar: theme.mixins.toolbar,
  }),
);

const Sidebar: FC<{
  open: boolean;
  variant: 'persistent' | 'temporary';
  onClose: () => void;
}> = ({ open, onClose }) => {
  const classes = useStyles();
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <SidebarNav pages={nav} />
    </Drawer>
  );
};

export default Sidebar;
