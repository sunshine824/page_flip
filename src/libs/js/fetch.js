import Vue from 'vue'
import qs from 'qs'

/**
 * 封装post请求
 * @param url     请求接口
 * @param params  请求参数
 * @returns {*}
 */
export function post(url, params) {
  let _this = Vue.prototype
  _this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token');
  return _this.$http({
    method: 'post',
    url: url,
    data: qs.stringify(params)
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

/**
 * 封装get请求
 * @param url      请求接口
 * @param params   请求参数
 * @returns {Promise<T>}
 */
export function get(url, params) {
  let _this = Vue.prototype

  return _this.$http.get(
    (url), {
      params: params
    }).then(res => {
    return Promise.resolve(res.data)
  })
}
