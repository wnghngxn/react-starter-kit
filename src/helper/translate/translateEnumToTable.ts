import { map } from 'lodash';

const translateEnumToTable = <
  T extends {
    name: string;
  }
>(
  columns: T[],
  local: Record<string, string>,
) => {
  return map(columns, value => {
    return {
      ...value,
      label: local[value.name],
    };
  });
};

export default translateEnumToTable;
