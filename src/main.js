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

Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false


Vue.prototype.$axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
