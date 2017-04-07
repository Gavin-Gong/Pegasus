import Vue from 'vue';
import Router from 'vue-router';
import Home from 'pages/home';
import Article from 'pages/article';
import Topic from 'pages/topic';
import Tags from 'pages/tags';
import Tag from 'pages/tag';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/posts/:id',
      name: 'Article',
      component: Article,
    },
    {
      path: '/topics/:id',
      name: 'Topics',
      component: Topic,
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags,
    },
    {
      path: '/tags/:id',
      name: 'Tag',
      component: Tag,
    },
  ],
});
