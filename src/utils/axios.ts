import Axios from 'axios'
import qs from 'qs'

const baseURL = 'https://api.github.com'

const axios = Axios.create({
  baseURL,
  timeout: 20000, // 请求超时 20s
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (request) => {
    // eslint-disable-next-line no-console
    console.log('request', request)
    return request
  },
  (error) => Promise.reject(error)
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    // eslint-disable-next-line no-console
    console.log('response', response)
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      // eslint-disable-next-line no-console
      console.error('[Axios Error]', code, msg)
    } else {
      // eslint-disable-next-line no-console
      console.error('[Axios Error]', error)
    }
    return Promise.reject(error)
  }
)

export default axios
