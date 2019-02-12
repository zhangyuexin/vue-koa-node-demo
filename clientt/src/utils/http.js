import axios from 'axios';
import Qs from 'qs';

const instance = axios.create({
  baseURL: '',
  withCredentials: true,
  validateStatus(status) {
    if (status > 500) {
      // location.href = '#/notFount';
    }

    return true;
  },
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
});

// instance.interceptors.response.use(function (response) {
//   if (response.data.code === 10030) {
//     // location.href = '#/login';
//     // localStorage.clear();
//     // location.reload();
//     return false;
//   }

//   if (response.data.code !== 1) {
//     if (response.data.code > 5000) {
//       return Promise.resolve(response.data);
//     }

//     // Message({
//     //   showClose: true,
//     //   message: response.data.tip,
//     //   type: 'error',
//     //   duration: 3000
//     // });

//     if (response.config.url.indexOf('login') < 0) {
//       return Promise.reject(response.data.tip);
//     }
//   }

//   return response.data;
// }, function (error) {
//   return Promise.reject(error);
// });

// instance.interceptors.request.use(function (config) {
//   const url = config.url;
//   const token = getToken();

//   if (url.indexOf('/common') > -1) {
//     config.baseURL = '';
//   }

//   if (url.indexOf('hardware') > -1) {
//     config.baseURL = '';
//   }

//   if (url.indexOf('login') < 0 && !!token) {
//     config.headers.token = token;
//   }
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

export default {
  get(url, params) {
    return instance.get(
      url, {
        params
      }
    ).then(rs => (rs));
  },
  post(url, data) {
    return instance.post(
      url, Qs.stringify(data)
    ).then(rs => (rs));
  },
  put(url, data) {
    return instance.put(
      url, Qs.stringify(data)
    ).then(rs => (rs));
  },
  delete(url, params) {
    return instance.delete(
      url, {
        params
      }
    ).then(rs => (rs));
  }
};
