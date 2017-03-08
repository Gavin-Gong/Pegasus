/* global DEV */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import App from './App';
import router from './router';
import mockData from './api/template';

// mock data ony in dev env
if (DEV) {
  mockData();
}
axios.get('/articles/333').then((res) => {
  console.log(res.data);
});
Vue.prototype.$http = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
