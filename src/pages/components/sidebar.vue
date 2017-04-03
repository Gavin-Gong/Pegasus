<template>
  <div class="sidebar">
    <h3>Recent</h3>
    <ul class="recent-post">
      <li v-for="item in recentPost">
        <a>{{item.title}}</a>
        <p>{{item.created_at}}</p>
      </li>
    </ul>

    <h3 class="hot-title">Hot</h3>
    <ul class="hot-post">
      <li v-for="item in recentPost">
        <a>{{item.title}}</a>
        <p>{{item.created_at}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { Card, Button, MessageBox } from 'element-ui';

Vue.use(Card);
Vue.use(Button);

export default {
  data() {
    return {
      recentPost: [
        { title: 'namsssssssssssssssssssssssssssssssssssse', created_at: '2014-09-09' },
        { title: 'name', created_at: '2014-09-09' },
      ],
    };
  },
  methods: {
    handleFollow() {
      MessageBox.alert('welcome follow me', window.innerWidth);
    },
  },
};
</script>

<style lang="scss">
@import '~styles/mixins';
@mixin post-entry {
  margin-left: 10px;
  a {
    @include line-clamp(1);
    font-size: 18px;
    cursor: pointer;
  }
  p {
    margin-top: -4px;
    font-size: 14px;
    color: #999;
  }
};

.sidebar {
  h3 {
    color: #666;
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
