import { map, toNumber, isNaN } from 'lodash';

type Option = {
  value: number | string;
  label_key: string;
};

type ValueEnum = Record<string, string | number>;

const translateEnumToOptions = (valueEnum: ValueEnum): Option[] => {
  const options = map(valueEnum, (value, key) => {
    return {
      value,
      label_key: key,
    };
  }).filter(x => {
    return isNaN(toNumber(x.label_key));
  });
  return options;
};

export default translateEnumToOptions;
