import Vue from 'vue';
import Router from 'vue-router';
import Home from 'pages/home';
import Article from 'pages/article';
import Topic from 'pages/topic';
import Topics from 'pages/topics';
import Tags from 'pages/tags';
import Tag from 'pages/tag';
import About from 'pages/about';

Vue.use(Router);

const router = new Router({
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
  ],
});

router.beforeEach((to, from, next) => {
  /* eslint no-prototype-builtins: "off" */
  if (from.meta.hasOwnProperty('positionY')) {
    // save position
    from.meta.positionY = document.body.scrollTop;
    console.log('saved position', document.body.scrollTop);
  }
  console.log(to);
  if (to.meta && to.meta.hasOwnProperty('positionY')) {
    window.scrollTo(0, to.meta.positionY);
    console.log('scroll to position', to.meta.positionY);
  } else {
    window.scrollTo(0, 0);
  }
  next();
});

// router.afterEach((route) => {
//   /* eslint no-prototype-builtins: "off" */
// });

export default router;
