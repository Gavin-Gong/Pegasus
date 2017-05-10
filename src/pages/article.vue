<template>
  <div id="article-detail">
    <article-card :article="article">
      <div class="article-banner" slot="banner">
        <img :src="$randomImg(1800, 300)" :alt="article.title">
        <div class="mask"><h1 class="dp-ib">{{ article.title }}</h1></div>
      </div>
    </article-card>
    <comment></comment>
    <recommend></recommend>
  </div>
</template>

<script>
import ArticleCard from 'components/article';
import Comment from 'components/Comment';
import Recommend from 'components/Recommend';
import XIcon from 'components/Icon';
import { Button } from 'element-ui';

Vue.use(Button);

export default {
  name: 'article',
  components: {
    ArticleCard,
    XIcon,
    Comment,
    Recommend,
  },
  metaInfo() {
    return {
      title: this.article.title,
      titleTemplate: 'Pegasus - %s',
      changed(a, b, c) {
        console.log(a, b, c);
      },
    };
  },
  created() {
    this.$store.dispatch('fetchArticleById', this.$route.params.id);
  },
  activated() {
    this.$store.dispatch('fetchArticleById', this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('fetchArticleById', this.$route.params.id);
    next();
  },
  data() {
    return {
    };
  },
  methods: {
    fetchArticles() {

    },
  },
  computed: {
    article() {
      return this.$store.state.article.detail;
    },
  },
  watch: {
    // $route
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
.pagination {
  text-align: center;
}
.article-banner {
  line-height: 0;
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
    // z-index: -1;
    width: 100%;
    height: 200px;
    top: 0;
    left: 0;
    @include res-to(xs) {
      height: 160px;
    }
    // max-width: calc(100% + 20px);
    // margin-left: -10px;
    // margin-top: -10%;
    // filter: blur(7px);
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    padding: 30px 10px;
    background: rgba(0,0,0,.4);
    h1 {
      z-index: 100;
      text-align: center;
      @include res-to(xs) {
        text-align: left;
      }
      padding-left: 30px;
      padding-right: 30px;
      margin-top: 40px;
      margin-bottom: 40px;
      @include line-clamp(2);
      color: #fff;
    }
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
