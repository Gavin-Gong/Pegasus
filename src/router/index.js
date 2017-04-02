import Vue from 'vue';
import Router from 'vue-router';
import Home from 'pages/home';
import Article from 'pages/article';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/post/:id',
      name: 'Article',
      component: Article,
    },
  ],
});
