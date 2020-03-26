import { map } from 'ramda';

const mapKeysToValues = <T>(keys: string[]) => (
  entities: Record<string, T>[],
): T[][] =>
  map((entity: Record<string, T>) => map((key: string) => entity[key])(keys))(
    entities,
  );

export default mapKeysToValues;
