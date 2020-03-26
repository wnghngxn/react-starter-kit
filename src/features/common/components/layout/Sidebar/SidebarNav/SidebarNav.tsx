import React, { FC, ComponentType } from 'react';
import { List } from '@material-ui/core';
import Menu from './Menu';

const SidebarNav: FC<{
  pages: {
    title: string;
    children: {
      title: string;
      href: string;
      disabled?: boolean;
      icon?: ComponentType;
    }[];
  }[];
}> = ({ pages }) => (
  <List>
    {pages.map(page => (
      <Menu page={page} key={page.title} />
    ))}
  </List>
);

export default SidebarNav;
