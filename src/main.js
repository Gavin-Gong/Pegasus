/* global DEV */
import Vue from 'vue';
import Meta from 'vue-meta';
import { Loading, Message } from 'element-ui';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import filters from './filters';


Vue.use(Meta);
Vue.use(Loading);
Vue.filter('timestamp', filters);

Vue.prototype.$msg = Message;

if (typeof DEV === 'undefined' || DEV === false) {
  // aliyun
  // http://120.24.177.234:3000
  axios.defaults.baseURL = 'http://120.24.177.234:3000';
  // axios.defaults.baseURL = 'https://pegasus-app.herokuapp.com';
} else {
  axios.defaults.baseURL = 'http://127.0.0.1:3000';
}
axios.defaults.headers.common['Content-Type'] = 'application/json';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
