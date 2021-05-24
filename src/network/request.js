import axios from 'axios'

export default function request (option) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 10000
  });

  instance.interceptors.request.use(config => {
    return config;
  },err => {
    console.log(err);
    return err
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
    if  (err && err.response) {
      switch (err.response.status) {
        case 400:
            err.message = '请求错误'
            break
        case 401:
            err.message = '未授权访问'
            break
      }
    }
    return err
  })
  return instance(option)
}