/* global DEV */
import Vue from 'vue';
import { Loading } from 'element-ui';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Loading);
// Vue.prototype.$loading = Loading.service;

if (DEV) {
  axios.defaults.baseURL = 'http://127.0.0.1:3000';
} else {
  axios.defaults.baseURL = 'https://pegasus-app.herokuapp.com';
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
