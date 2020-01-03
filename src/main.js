import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios';

import VueAxios from 'vue-axios'

Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.prototype.$axios=Axios; //设置原型
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
