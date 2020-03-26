import React, { FC, ComponentType, createElement } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import { Button, Box } from '@material-ui/core';
import { map } from 'lodash';
import { useIntl } from 'lib/hooks/i18n';
import t from 'tersus-jsx.macro';

import { StyledListItem } from './Menu.styled';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: blueGrey[800],
    justifyContent: 'flex-start',
    textTransform: 'none',
    padding: '4px 16px',
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.body2.fontWeight,
    borderRadius: 0,
    '$:hover': {
      backgroundColor: theme.palette.divider,
    },
  },
  menuHead: {
    color: '#b2bfce',
    'text-transform': 'uppercase',
    'font-size': '10px',
    'padding-left': '20px',
    'font-weight': 700,
    'letter-spacing': '.6px',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  active: {
    backgroundColor: theme.palette.divider,
    'border-left': '4px solid #008bdc',
    '& $icon': {
      color: theme.palette.primary.main,
    },
    '&&': {
      paddingLeft: '12px',
    },
  },
  nestedButton: {
    paddingLeft: theme.spacing(4),
  },
  expandContainer: {
    flexGrow: 10,
    textAlign: 'right',
  },
}));

const Menu: FC<{
  page: {
    title: string;
    children: {
      title: string;
      href: string;
      disabled?: boolean;
      icon?: ComponentType;
    }[];
  };
}> = ({ page }) => {
  const classes = useStyles();
  const intl = useIntl();
  return t(
    <>
      <StyledListItem as="li" button className={classes.menuHead}>
        {intl({ id: page.title })}
      </StyledListItem>
      {map(page.children, page => {
        return (
          <StyledListItem disableGutters key={page.title} button as="li">
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={NavLink}
              to={page.href}
              fullWidth
              disabled={page.disabled}
            >
              <Box tj-if={page.icon} clone className={classes.icon}>
                {createElement(page.icon!)}
              </Box>
              {intl({ id: page.title })}
            </Button>
          </StyledListItem>
        );
      })}
    </>,
  );
};

export default Menu;
