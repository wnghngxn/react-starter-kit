import { nav as userNav } from 'features/user';
import { ComponentType } from 'react';

export const nav: {
  title: string;
  children: {
    title: string;
    href: string;
    disabled?: boolean;
    icon?: ComponentType;
  }[];
}[] = [userNav];
