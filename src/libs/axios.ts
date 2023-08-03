import { Axios, AxiosError } from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

export default class ExternalAPI extends Axios {
  constructor() {
    super({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    this.interceptors.request.use(
      (config) => {
        // const token = localStorage.getItem('token');

        // console.log('before request');

        Object.assign(config.headers, {});
        return config;
      },
      (error) => {
        // return Promise.reject(error);
      },
    );

    this.interceptors.response.use(
      (res) => {
        res.data = JSON.parse(res.data);
        return res;
      },
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Do something
        }

        return Promise.reject(error);
      },
    );
  }
}
