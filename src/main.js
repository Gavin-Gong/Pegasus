/* global DEV */
// import Vue from 'vue';
/* global Vue*/
import Meta from 'vue-meta';
import { Loading, Message, MessageBox } from 'element-ui';
import Nprogress from 'nprogress';
/*eslint-disable*/
import appBar from 'muse-components/appBar';
import icon from 'muse-components/icon';
import drawer from 'muse-components/drawer';
import iconButton from 'muse-components/iconButton';
import list from 'muse-components/list/list';
import listItem from 'muse-components/list/listItem';
import textField from 'muse-components/textField';
import divider from 'muse-components/divider';
import axios from 'axios';
import VueLazyload from 'vue-lazyload';
import App from './App';
import router from './router';
import store from './store';
import { imgView, timeStamp } from './filters';
Vue.component(appBar.name, appBar);
Vue.component(icon.name, icon);
Vue.component(drawer.name, drawer);
Vue.component(iconButton.name, iconButton);
Vue.component(list.name, list);
Vue.component(listItem.name, listItem);
Vue.component(textField.name, textField);
Vue.component(divider.name, divider);

Vue.use(Meta);
Vue.use(Loading);
Vue.filter('timestamp', timeStamp);
Vue.filter('imgView', timeStamp);
Vue.use(VueLazyload, {
  attempt: 1,
});


Vue.prototype.$msg = Message;
Vue.prototype.$msgbox = MessageBox;

axios.defaults.headers.common['Content-Type'] = 'application/json';
if (typeof DEV === 'undefined' || DEV === false) {
  axios.defaults.baseURL = 'http://5000.gr45a82d.ce00ef5b.xunda-bj.goodrain.net:10080';
  // axios.defaults.baseURL = 'http://120.24.177.234:3000';
} else {
  // axios.defaults.baseURL = 'http://127.0.0.1:3000';
  // axios.defaults.baseURL = 'http://5000.gr45a82d.ce00ef5b.xunda-bj.goodrain.net:10080';
  // axios.defaults.baseURL = 'http://192.168.1.2:3000';
  axios.defaults.baseURL = 'http://120.24.177.234:3000';
}
axios.interceptors.request.use(function (config) {
    Nprogress.start();
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    Nprogress.done();
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

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


