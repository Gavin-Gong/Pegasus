<template>
  <div id="article-detail">
    <article-card :body="articleBody">

      <div class="article-banner" slot="banner">
        <img src="~assets/images/article-banner.jpg" :alt="article.title">
        <h1 class="dp-ib">{{ article.title }}</h1>
      </div>
      <div class="article-infobar" slot="info">
        <ul>
          <li><x-icon type="clock-o"></x-icon> {{article.created_at}}</li>
          <li><x-icon type="tag"></x-icon> {{article.tags}}</li>
          <li><x-icon type="folder"></x-icon> {{article.topic}}</li>
        </ul>
      </div>
    </article-card>
  </div>
</template>

<script>
import ArticleCard from 'components/article';
import XIcon from 'components/Icon';
import articleEn from 'api/data/en-article';
import articleCh from 'api/data/ch-article';
import { Button } from 'element-ui';

console.log(articleCh, articleEn);
Vue.use(Button);

export default {
  components: {
    ArticleCard,
    XIcon,
  },
  created() {
    // console.log(this.$route);
    if (this.$route.params.id % 2 === 0) {
      this.articleBody = articleCh.body;
    } else {
      this.articleBody = articleEn.body;
    }
  },
  data() {
    return {
      article: {
        title: 'A full-featured markdown parser and compiler, written in JavaScript. Built for speed.',
        created_at: '2017-09-10',
        tags: 'name',
        topic: 'Koa',
      },
      articleBody: '',
    };
  },
  methods: {
    fetchArticles() {

    },
  },
  computed: {
    // baseUrl: `post/${this.$router.params.id}`,
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
.pagination {
  text-align: center;
}
.article-banner {
  position: relative;
  overflow: hidden;
  color: #eee;
  text-align: center;
  cursor: pointer;
  &::before {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(0,0,0,.1);
  }
  img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    max-width: calc(100% + 20px);
    margin-left: -10px;
    margin-top: -10%;
    filter: blur(7px);
  }
  h1 {
    z-index: 100;
    text-align: left;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
    @include line-clamp(2);
    color: #fff;
  }
}
.article-infobar {
  background: #1abc9c;
  color: #eee;
  padding: 10px 20px;
  margin-bottom: 30px;
  ul {
    list-style: none;
    margin-left: -12px;
    li {
      display: inline-block;
      margin-left: 12px;
    }
  }
}
</style>
