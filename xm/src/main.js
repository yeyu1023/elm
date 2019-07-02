// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import Rate from 'vant';
import 'vant/lib/Rate/style';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

import router from './router'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.use(Rate);


// 、、导入vuex封装的模块，store文件夹下的index.js
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  Rate,
  components: { App },
  template: '<App/>'
})
