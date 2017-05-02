/* global DEV */
import Vue from 'vue';
import Meta from 'vue-meta';
import { Loading, Message } from 'element-ui';
import axios from 'axios';
import VueLazyload from 'vue-lazyload';
import App from './App';
import router from './router';
import store from './store';
import filters from './filters';


Vue.use(Meta);
Vue.use(Loading);
Vue.filter('timestamp', filters);
Vue.use(VueLazyload, {
  attempt: 1,
});


Vue.prototype.$msg = Message;

if (typeof DEV === 'undefined' || DEV === false) {
  // aliyun
  // http://120.24.177.234:3000
  axios.defaults.baseURL = 'http://120.24.177.234:3000';
  // axios.defaults.baseURL = 'https://pegasus-app.herokuapp.com';
} else {
  axios.defaults.baseURL = 'http://127.0.0.1:3000';
  axios.defaults.baseURL = 'http://192.168.1.2:3000';
}
axios.defaults.headers.common['Content-Type'] = 'application/json';

Vue.mixin({
  methods: {
    $randomImg(w, h) {
      const randomStr = Math.random().toString(36).substring(7);
      return `https://unsplash.it/${w}/${h}/?random=1&id=${randomStr}`;
    },
  },
});

/*eslint-disable*/
Vue.directive('hidden', (el, binding) => {
  console.log(store.state.auth.isAuth, window.innerWidth);
  if (store.state.auth.isAuth === false || window.innerWidth < 920) {
    el.style.display = 'none';
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});


