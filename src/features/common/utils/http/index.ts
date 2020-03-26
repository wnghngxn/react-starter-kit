/* eslint-disable consistent-return */
// todo
import axios from 'helper/axios';
import { Method, AxiosResponse, AxiosRequestConfig } from 'axios';
import { HttpStatusCode } from 'constances/http';
import { get } from 'lodash';
import { AccountPageUrl } from 'features/account/constances';
import { store } from 'app/store';
import { push } from 'connected-react-router';

export interface HttpResponse<T> {
  code: HttpStatusCode;
  error: string;
  data?: T;
}
type DefaultConfig = Omit<
  AxiosRequestConfig,
  'url' | 'method' | 'transformResponse'
>;
export type HttpConfig = DefaultConfig & {
  onOk?: <T>(x: T) => void;
  onErr?: (e: Error) => void;
};
export const http = (redirect: boolean) => <ResponseData>(
  url: string,
  method: Method,
  config: HttpConfig,
) => {
  return axios({
    url,
    method,
    transformResponse: [
      (data: string) => {
        return JSON.parse(data) as HttpResponse<ResponseData>;
      },
    ],
    ...config,
  }).then(
    (response: AxiosResponse<HttpResponse<ResponseData>>) => {
      const responseData = get(response, 'data');
      if (get(responseData, 'code') === HttpStatusCode.OK) {
        return get(responseData, 'data');
      }
      if (
        redirect &&
        get(responseData, 'code') === HttpStatusCode.Unauthenticated
      ) {
        if (window.location.pathname.slice(0, 6) !== AccountPageUrl.login) {
          store.dispatch(push(AccountPageUrl.login));
        }
      }
      throw new Error(get(responseData, 'error'));
    },
    (e: Error) => {
      throw e;
    },
  );
};

export const fetch = <ResponseData>(
  url: string,
  method: Method,
  config: HttpConfig,
) => {
  return axios({
    url,
    method,
    transformResponse: [
      (data: string) => {
        return JSON.parse(data) as HttpResponse<ResponseData>;
      },
    ],
    ...config,
  }).then(
    (response: AxiosResponse<HttpResponse<ResponseData>>) => {
      const responseData = get(response, 'data');
      if (get(responseData, 'code') === HttpStatusCode.Unauthenticated) {
        return HttpStatusCode.Unauthenticated;
      }
      return HttpStatusCode.OK;
    },
    () => {
      return HttpStatusCode.Unauthenticated;
    },
  );
};
