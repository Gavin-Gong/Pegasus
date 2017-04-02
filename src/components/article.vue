<template>
  <div class="article-card article-typo">
    <slot name="banner"></slot>
    <slot name="info"></slot>
    
    <div v-html="htmlBody"></div>
  </div>
</template>

<script>
import { Card } from 'element-ui';
import XIcon from 'components/Icon';
import marked from 'marked';
import highlight from 'highlightjs';
import 'highlightjs/styles/github.css';

console.log(highlight);
Vue.use(Card);
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
    console.log(code);
    return highlight.highlightAuto(code).value;
  },
});

export default {
  components: {
    XIcon,
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
  },
  data() {
    return {
      msg: '### Welcome to Your Vue.js App',
    };
  },
  computed: {
    htmlBody() {
      if (this.type === 'html') return this.body;
      return marked(this.body);
    },
  },
};
</script>

<style lang="scss">
  @import '~styles/mixins';
  @import '~styles/article';
  .article-card {
    padding: 30px 30px;
    margin-bottom: 30px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .12), 0px 0px 6px 0px rgba(0, 0, 0, .04);
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
