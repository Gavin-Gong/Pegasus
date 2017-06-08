/* global VueRouter */

import store from '../store';
// import Vue from 'vue';
// import Router from 'vue-router';
const Home = () => import('pages/home');
const Article = () => import('pages/article');
const Topic = () => import('pages/topic');
const Topics = () => import('pages/topics');
const Tags = () => import('pages/tags');
const Tag = () => import('pages/tag');
const About = () => import('pages/about');
const Write = () => import('pages/write');
const NotFound = () => import('pages/404');

// Dashboard
/* eslint-disable no-dynamic-require */
const Dashboard = () => import('../dashboard');
const DbOverview = () => import('../dashboard/overview');
const DbPost = () => import('../dashboard/post/index');
const DbPostDetail = () => import('../dashboard/post/detail');
const DbTag = () => import('../dashboard/tag/index');
const DbTagDetail = () => import('../dashboard/tag/detail');
const DbTopic = () => import('../dashboard/topic/index');
const DbTopicDetail = () => import('../dashboard/topic/detail');
const DbProfile = () => import('../dashboard/profile');
const DbSettings = () => import('../dashboard/settings');
const Login = () => import('../dashboard/login');

// demo
const Demo = () => import('pages/demo');

/*eslint-disable*/
// 打包到同一个chunk中
// const Foo = r => require.ensure([], () => r(require('./Foo.vue')), 'group-foo')
// const Bar = r => require.ensure([], () => r(require('./Bar.vue')), 'group-foo')
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  /*eslint-disable*/
  scrollBehavior(to, from, savedPos) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        positionY: 0,
      },
    },
    {
      path: '/posts/:id',
      name: 'Article',
      component: Article,
    },
    {
      path: '/topics',
      name: 'Topics',
      component: Topics,
      meta: {
        positionY: 0,
      },
    },
    {
      path: '/topics/:id',
      name: 'Topic',
      component: Topic,
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags,
      meta: {
        positionY: 0,
      },
    },
    {
      path: '/tags/:id',
      name: 'Tag',
      component: Tag,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        positionY: 0,
      },
    },
    {
      path: '/write',
      name: 'Write',
      component: Write,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/dashboard',
      // name: 'Dashboard',
      component: Dashboard,
      meta: {
        shouldAuth: true,
      },
      children: [
        {
          path: '',
          component: DbPost,
        },
        {
          path: 'overview',
          component: DbOverview,
          name: 'DbOverview',
        },
        {
          path: 'post',
          component: DbPost,
          children: [
            {
              path: ':id',
              component: DbPostDetail,
              name: 'DbPost',
            },
          ],
        },
        {
          path: 'tag',
          component: DbTag,
          // name: 'DbTag',
          children: [
            {
              path: ':id',
              component: DbTagDetail,
              name: 'DbTag',
            },
          ],
        },
        {
          path: 'topic',
          component: DbTopic,
          children: [
            {
              path: ':id',
              component: DbTopicDetail,
              name: 'DbTopic',
            },
          ],
        },
        {
          path: 'profile',
          component: DbProfile,
        },
        {
          path: 'settings',
          component: DbSettings,
        },
      ],
    },
    {
      path: '/404',
      component: NotFound,
    },
    {
      path: '/demo',
      component: Demo,
    },
    {
      path: '*',
      redirect: '/404',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.shouldAuth)) {
    if (!store.state.auth.isAuth) {
      next({
        path: '/login',
        query: {
          shouldAuth: true,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;
