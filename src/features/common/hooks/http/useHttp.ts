import { useState, Dispatch, SetStateAction } from 'react';
import { http, HttpConfig } from 'features/common/utils/http';
import { Method } from 'axios';
import { useAutoEffect } from 'hooks.macro';

const useHttp = <T>(
  method: Method,
  url: string,
  config: HttpConfig & { disabled?: boolean },
): [
  boolean,
  boolean,
  false | Error,
  undefined | T,
  Dispatch<SetStateAction<number>>,
] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<false | Error>(false);
  const [loaded, setLoaded] = useState(false);
  const [value, setValue] = useState<T>();
  const [refresh, setRefresh] = useState(0);
  useAutoEffect(() => {
    if (config.disabled && refresh >= 0) {
      return;
    }
    setLoading(true);
    setError(false);
    http(true)<T>(url, method, config)
      .then(x => {
        setLoading(false);
        setLoaded(true);
        setError(false);
        setValue(x);
      })
      .catch(e => {
        setLoading(false);
        setLoaded(false);
        setError(e);
        setValue(undefined);
      });
  });
  return [loading, loaded, error, value, setRefresh];
};

export default useHttp;
