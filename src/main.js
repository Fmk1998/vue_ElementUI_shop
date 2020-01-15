import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
//导入全局样式表
import './assets/css/global.css'
import './assets/iconfont/iconfont.css'
//配置请求的根路径
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  //在最后必须return config
  return config
})

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.prototype.$axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
