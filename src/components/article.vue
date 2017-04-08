<template>
  <div class="article-card article-typo">
    <router-link
      v-if="!$slots.banner"
      class="title"
      :to="{name: 'Article', params:{id: article.id}}"
      >{{ article.title }}</router-link>
    <slot name="banner"></slot>
    <ul class="info-bar">
      <li><x-icon type="clock-o"></x-icon> {{article.created_at}} </li>
      <li><x-icon type="tag"></x-icon>
        <ul class="tag-list">
            <x-tag
              v-for="tag in article.tags"
              :route="{name: 'Tag', params: {id: tag.id}}"
              :text="tag.title">
            </x-tag>
        </ul>
      </li>
      <li><x-icon type="folder"></x-icon> {{article.topics}}</li>
    </ul>
    <slot name="info"></slot>
    <div :class="lineClamp ? 'line-clamp' : ''">
      <div v-html="htmlBody"></div>
    </div>
    <el-button v-if="lineClamp" class="more-btn">More</el-button>
  </div>
</template>

<script>
import { Card, Button } from 'element-ui';
import XIcon from 'components/Icon';
import XTag from 'components/Tag';
import marked from 'marked';
import highlight from 'highlightjs';
import 'highlightjs/styles/github.css';

Vue.use(Card);
Vue.use(Button);
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight(code) {
    return highlight.highlightAuto(code).value;
  },
});

export default {
  components: {
    XIcon,
    XTag,
  },
  props: {
    body: {
      type: String,
      default: '## 暂无内容',
    },
    type: {
      type: String,
      default: 'markdown',
    },
    lineClamp: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    // TODO: 用article代替body, type属性
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      msg: '### Welcome to Your Vue.js App',
    };
  },
  created() {
    console.log(this.$slots.banner);
  },
  computed: {
    htmlBody() {
      if (this.type !== 'html') return this.article.body;
      return marked(this.article.body);
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/mixins';
  @import '~styles/article';
  @import '~styles/utils';
  .article-card {
    padding: 30px 30px;
    margin-bottom: 30px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .12), 0px 0px 6px 0px rgba(0, 0, 0, .04);
    .info-bar {
      color: #888;
      margin-left: -15px;
      margin-bottom: 20px;
      @include reset-list();
      > li {
        margin-left: 15px;
      }
      .tag-list {
        display: inline-block;
        @include reset-list();
      }
    }
    .title {
      font-size: 34px;
      display: inline-block;
      cursor: pointer;
    }
    .line-clamp {
      @include line-clamp(10);
    }
    .more-btn {
      @include center(20px);
    }
  }
  .full-screen {
    position: fixed;
    z-index: 9999;
    top: 0px;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: #fff;
    // @include res-to(lg) {
    //   padding-left: 20%;
    //   padding-right: 20%;
    // }
    .article-box {
      // display: inline-block;
      margin: 0 auto;
      max-width: 768px;
      padding: 20px;
      box-shadow: 2px 2px 8px #ccc;
    }
  }
</style>
