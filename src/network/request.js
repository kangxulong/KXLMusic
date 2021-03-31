import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"

const instance = axios.create({
  baseURL:BASE_URL,
  timeout:TIMEOUT
})

instance.interceptors.request.use(
  config => {

    // 可以在此处加入loadding动画
    // 也可以序列化config
    return config
  },
  err => {
    return err
  }
)

instance.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    if(err&&err.response){
      switch(err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("请求被拦截");
          break;
        default:
          console.log("其他错误信息");
      }
    }
  }
)

export default instance;