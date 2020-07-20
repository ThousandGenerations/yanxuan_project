// 对 axios 进行二次封装
import axios from "axios";
//配置通用路径和超时
const instance = axios.create({
  baseURL: "/api",
  timeout: 15000
});

//axios 请求拦截器
instance.interceptors.request.use(config => {
  return config;
});

//axios 响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data; //成功返回 response.data整个响应体  而不是整个响应体的上一级
  },
  error => {
    //失败
    console.log("响应拦截器失败回调执行");
    // alert(`响应失败${error.message || "未知错误"}`);
    return Promise.reject(error); //返回一个失败的 promise 也可以抛出错误
  }
);

export default instance;
