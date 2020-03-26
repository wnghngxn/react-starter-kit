import { map } from 'lodash';

type Enum = Record<string, string>;

type Option = {
  value: number | string;
  label: string;
};

const translateEnumToSelectOptions = (
  valueEnum: Record<string, string | number>,
  localEnum: Enum,
): Option[] => {
  const options = map(localEnum, (value, key) => {
    return {
      value: valueEnum[key],
      label: value,
    };
  });
  return options;
};

export default translateEnumToSelectOptions;
