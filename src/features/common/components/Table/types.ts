import { MUIDataTableColumn } from 'mui-datatables';

export type Column = MUIDataTableColumn & {
  name: string;
  boolean?: boolean;
} & {
  name: string;
  null?: boolean;
} & {
  name: string;
  time?: boolean;
} & {
  name: string;
} & {
  name: string;
  label?: string;
};
