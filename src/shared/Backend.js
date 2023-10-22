import axios from 'axios';
import { BASE_URL } from '../config/Endpoints';
import { GET_TOKEN } from './Storage';

const token = GET_TOKEN();

const defaults = {
    headers: () => ({
      'Content-Type': 'application/vnd.adminconsole.v1+json',
      Authorization: token ? `Bearer ${token}` : undefined,
    }),
    error: {
      code: 'INTERNAL_ERROR',
      message: 'Something went wrong. Please check your internet connection or contact our support.',
      status: 503,
      data: {},
    },
  };
  
  const api = (method, url, variables) =>
    new Promise((resolve, reject) => {
      axios({
        url: `${BASE_URL}${url}`,
        method,
        headers: defaults.headers(),
        params: method === 'get' ? variables : undefined,
        data: method !== 'get' ? variables : undefined,
      }).then(
        response => {
          resolve(response.data);
        },
        error => {
          if (error.response) {
              reject(error.response.data.error);
          } else {
            reject(defaults.error);
          }
        },
      );
    });

export default {
    get: (...args) => api('get', ...args),
    post: (...args) => api('post', ...args),
    put: (...args) => api('put', ...args),
    patch: (...args) => api('patch', ...args),
    delete: (...args) => api('delete', ...args),
};


