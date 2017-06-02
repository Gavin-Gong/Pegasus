<template>
  <div id="article-detail" v-loading="isLoading">
    <top-nav></top-nav>
    <article-card :article="article">
      <div class="article-banner" slot="banner">
        <img :src="article.banner" :alt="article.title">
        <div class="mask"><h1 class="dp-ib">{{ article.title }}</h1></div>
      </div>
    </article-card>
    <comment></comment>
    <recommend></recommend>
    <ul class="article-nav">

    </ul>
  </div>
</template>

<script>
import ArticleCard from 'components/article';
// import Comment from 'components/Comment';
import Recommend from 'components/Recommend';
import XIcon from 'components/Icon';
import { Button } from 'element-ui';
import Comment from './components/comment';
import TopNav from './components/top-nav';

Vue.use(Button);
/*eslint-disable*/
export default {
  name: 'article',
  components: {
    ArticleCard,
    XIcon,
    Comment,
    Recommend,
    TopNav,
  },
  metaInfo() {
    return {
      title: `Pegasus - ${this.article.title}`,
    };
  },
  beforeCreate () {
    this.$store.dispatch('fetchArticleById', this.$route.params.id)
  },
  mounted() {
    document.addEventListener("visibilitychange", this.handleTitleChange);
  },
  activated() {
    document.addEventListener("visibilitychange", this.handleTitleChange);
  },
  deactivated () {
    document.removeEventListener('visibilitychange', this.handleTitleChange);
    document.title = 'Pegasus';
  },
  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch('fetchArticleById', this.$route.params.id);
    next();
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    handleTitleChange() {
      if (document.visibilityState === 'hidden') {
          document.title = `●﹏● | ${this.article.title}`
      } else if (document.visibilityState === 'visible') {
          document.title = `Pegasus | ${this.article.title}`
      }
    },
    loadingArticle() {
      this.isLoading = true;
      this.$store.dispatch('fetchArticleById', this.$route.params.id).then((data) => {
        this.isLoading = false;
      });
    },
  },
  computed: {
    article() {
      return this.$store.state.article.detail;
    },
  },
  watch: {
    $route() {
      if (this.$route.params.id) {
        this.$store.dispatch('fetchArticleById', this.$route.params.id);
      }
    },
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
    width: 100%;
    height: 200px;
    top: 0;
    left: 0;
    @include res-to(xs) {
      height: 160px;
    }
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
      padding-left: 30px;
      padding-right: 30px;
      margin-top: 40px;
      margin-bottom: 40px;
      @include res-to(xs) {
        margin-top: 20px;
        font-size: 24px;
        text-align: left;
      }
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
