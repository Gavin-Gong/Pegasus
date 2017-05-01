<template>
  <div class="sidebar">
    <!--<h3>Recent</h3>
    <ul class="recent-post">
      <li v-for="item in recentArticleList">
        <a>{{item.title}}</a>
        <p>{{item.created_at | timestamp}}</p>
      </li>
    </ul>-->

    <h3 class="hot-title">
      <i class="iconfont icon-hot"></i>
      最热文章</h3>
    <ul class="hot-post">
      <li v-for="item in hotArticleList">
        <a>{{item.title}}</a>
        <p>
          <i class="iconfont icon-hot"></i> 77</p>
      </li>
    </ul>

    <h3 class="hot-title">
      <i class="iconfont icon-time"></i>
      最新文章</h3>
    <ul class="hot-post">
      <li v-for="item in hotArticleList">
        <a>{{item.title}}</a>
          <p><i class="iconfont icon-date"></i> {{item.created_at | timestamp}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { Card, Button, MessageBox } from 'element-ui';

Vue.use(Card);
Vue.use(Button);

export default {
  created() {
    this.$store.dispatch('fetchHotArticleList');
    this.$store.dispatch('fetchRecentArticleList');
  },
  data() {
    return {
    };
  },
  methods: {
    handleFollow() {
      MessageBox.alert('welcome follow me', window.innerWidth);
    },
  },
  computed: {
    recentArticleList() {
      return this.$store.state.article.recent;
    },
    hotArticleList() {
      return this.$store.state.article.hot;
    },
  },
};
</script>

<style lang="scss">
@import '~styles/mixins';
@mixin post-entry {
  margin-left: 10px;
  li {
    display: block;
    margin-bottom: 12px;
    a {
      @include line-clamp(2);
      font-size: 16px;
      line-height: 1.4;
      cursor: pointer;
    }
    p {
      margin-top: 0px;
      font-size: 12px;
      color: #999;
    }
  }
};

.sidebar {
  h3 {
    color: #666;
    // font-size: 14px;
  }
  .recent-post {
    @include reset-list;
    @include post-entry;
  }
  .hot-title {
    margin-top: 30px;
  }
  .hot-post {
    @include reset-list;
    @include post-entry;
  }
}
</style>
