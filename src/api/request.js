//对axios进行二次封装
import axios from 'axios'

const requests=axios.create({
    baseURL:"/api",
    timeout:5000,
})
// 添加请求拦截器
requests.interceptors.request.use((config)=>{
    // 在发送请求之前做些什么
    return config;
  });


// 添加响应拦截器
requests.interceptors.response.use((res) =>{
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return res.data;
  }, (error) =>{
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
  
    return Promise.reject(new Error('failure'))
  });

  export default requests;