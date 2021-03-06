import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局样式
import '@/scss/common.scss';

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  template: '<App/>',
  // render: h => h(App)
}).$mount('#app')
