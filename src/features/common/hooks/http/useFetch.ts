import { useState } from 'react';
import { useAutoCallback } from 'hooks.macro';
import { Method } from 'axios';
import { http, HttpConfig } from '../../utils/http';

const useFetch = <T>(
  method: Method,
  url: string,
  config?: HttpConfig,
): [
  (x: HttpConfig) => Promise<void | T | undefined>,
  boolean,
  boolean,
  false | Error,
  T | undefined,
] => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<false | Error>(false);
  const [loaded, setLoaded] = useState(false);
  const [value, setValue] = useState<T>();
  const fetch = useAutoCallback((eventValues: HttpConfig) => {
    setLoading(true);
    setLoaded(false);
    setError(false);
    setValue(undefined);
    const httpConfig = {
      ...config,
      ...eventValues,
    };
    return http(true)<T>(url, method, httpConfig)
      .then(x => {
        setLoading(false);
        setLoaded(true);
        setError(false);
        setValue(x);
        if (httpConfig.onOk) {
          httpConfig.onOk(value);
        }
        return x;
      })
      .catch((e: Error) => {
        setLoading(false);
        setError(e);
        setLoaded(false);
        setValue(undefined);
        if (httpConfig.onErr) {
          httpConfig.onErr(e);
        }
      });
  });
  return [fetch, loading, loaded, error, value];
};

export default useFetch;
