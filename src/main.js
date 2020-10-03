import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 把vue作用域对象挂载代axios是一个库，并不是vue中的第三方插件，使用时不能通过Vue.use()安装插件
// vue-axios是将axios集成到Vue.js的小包装器
import axios from 'axios'
import VueAxios from 'vue-axios'   
import VueLazyload from 'vue-lazyload'
// import env from './env'




// 根据前端的跨域方式进行调整 /a/b :   /api/a/b  =>/a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; 

// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL=env.baseURL

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res =  response.data
  if(res.status == 0) {
    return res.data
  }else if(res.status == 10){
    window.location.href='/#/login'
  }else{
    alert(res.msg)
  }
})



// Vue.use 导入外部的插件
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
