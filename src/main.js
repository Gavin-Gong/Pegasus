/* global DEV */
import Vue from 'vue';
import Meta from 'vue-meta';
import { Loading } from 'element-ui';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';
import filters from './filters';

Vue.use(Meta);
Vue.use(Loading);
// Vue.prototype.$loading = Loading.service;
Vue.filter('timestamp', filters);
// Vue.mixin([]);

if (typeof DEV === 'undefined' || DEV === false) {
  axios.defaults.baseURL = 'https://pegasus-app.herokuapp.com';
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
