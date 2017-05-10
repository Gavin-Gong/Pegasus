/* global VueRouter */

// import Vue from 'vue';
// import Router from 'vue-router';
import Home from 'pages/home';
import Article from 'pages/article';
import Topic from 'pages/topic';
import Topics from 'pages/topics';
import Tags from 'pages/tags';
import Tag from 'pages/tag';
import About from 'pages/about';
import Write from 'pages/write';
import NotFound from 'pages/404';

// Dashboard
import Dashboard from '../dashboard';
import DbOverview from '../dashboard/overview';
import DbPost from '../dashboard/post/index';
import DbPostDetail from '../dashboard/post/detail';
import DbTag from '../dashboard/tag/index';
import DbTagDetail from '../dashboard/tag/detail';
import DbTopic from '../dashboard/topic/index';
import DbTopicDetail from '../dashboard/topic/detail';
import DbProfile from '../dashboard/profile';
import DbSettings from '../dashboard/settings';
import Login from '../dashboard/login';

import store from '../store';

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
