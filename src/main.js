/* global DEV */
import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store';

// // mock data ony in dev env
// if (DEV) {
//   mockData();
// }

axios.defaults.baseURL = 'http://138.68.28.170:3000';
axios.defaults.headers.common['Content-Type'] = 'application/json';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
