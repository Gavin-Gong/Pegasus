import Vue from 'vue';
import Router from 'vue-router';
import Home from 'pages/home';
import Article from 'pages/article';
import Topic from 'pages/topic';
import Topics from 'pages/topics';
import Tags from 'pages/tags';
import Tag from 'pages/tag';
import About from 'pages/about';
import Write from 'pages/write';

// Dashboard
import Dashboard from '../dashboard';
import DbHome from '../dashboard/home';
import DbPost from '../dashboard/post';
import DbTag from '../dashboard/tag';
import DbTopic from '../dashboard/topic';
import DbProfile from '../dashboard/profile';
import DbSettings from '../dashboard/settings';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  /*eslint-disable*/
  scrollBehavior(to, from, savedPos) {
    // if (from.meta.hasOwnProperty('positionY')) {
    //   // save position
    //   from.meta.positionY = document.body.scrollTop;
    //   console.log('saved position', document.body.scrollTop);
    // }
    // if (savedPos) {
    //   return savedPos;
    // }
    // console.log(`scroll to ${to.meta.positionY}`);
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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          component: DbPost,
        },
        {
          path: 'home',
          component: DbHome,
        },
        {
          path: 'post',
          component: DbPost,
        },
        {
          path: 'tag',
          component: DbTag,
        },
        {
          path: 'topic',
          component: DbTopic,
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
  ],
});

router.beforeEach((to, from, next) => {
  console.log(to.matched);
  /* eslint no-prototype-builtins: "off" */
  if (from.meta.hasOwnProperty('positionY')) {
    // save position
    from.meta.positionY = document.body.scrollTop;
    console.log('saved position', document.body.scrollTop);
  }
  // console.log(to);
  // if (to.meta && to.meta.hasOwnProperty('positionY')) {
  //   setTimeout(() => {
  //     window.scrollTo(0, to.meta.positionY);
  //   }, 1000);
  //   console.log('scroll to position', to.meta.positionY);
  // } else {
  //   window.scrollTo(0, 0);
  // }
  next();
});
/*eslint-disable*/
router.afterEach((to) => {
  /* eslint no-prototype-builtins: "off" */
  // if (to.meta && to.meta.hasOwnProperty('positionY')) {
  //   setTimeout(() => {
  //     window.scrollTo(0, to.meta.positionY);
  //   }, 10);
  //   console.log('scroll to position', to.meta.positionY);
  // } else {
  //   window.scrollTo(0, 0);
  // }

});

export default router;
