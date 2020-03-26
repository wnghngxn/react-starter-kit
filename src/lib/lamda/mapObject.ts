import { transform } from 'lodash';

const mapObject = <T>(map: (value: T, key: string) => [T, string]) => (
  x: Record<string, T>,
): {} =>
  transform(
    x,
    (acc: Record<string, T>, value: T, key: string) => {
      const [valuea, keya] = map(value, key);
      return {
        ...acc,
        [keya]: valuea,
      };
    },
    {},
  );

export default mapObject;
