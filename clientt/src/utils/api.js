import http from './http'

export default class expertService {
  static getList(params) {
    return http.get('/list', params);
  }
  static deleteData(params) {
    return http.get('/delete', params);
  }
  static addData(params) {
    return http.post('/add', params);
  }
}
