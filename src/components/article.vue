<template>
  <div class="article-card">
    <div v-html="htmlBody"></div>
  </div>
</template>

<script>
import { Card } from 'element-ui';
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
  props: {
    body: {
      type: String,
      default: '## 暂无内容',
    },
    type: {
      type: String,
      default: 'html',
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
  .article-card {
    padding: 10px 20px;
    margin-bottom: 30px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .12), 0px 0px 6px 0px rgba(0, 0, 0, .04);
    line-height: 1.7;
    letter-spacing: .7px;
    word-spacing: 1px;
    pre {
      background: #eee;
      padding: 14px;
      margin-top: 10px;
      margin-bottom: 16px;
      border-radius: 3px;
      @include res-to(lg) {
        padding: 14px;
        border-radius: 6px;
      }
    }
    h1, h2, h3, h4, h5, h6{
      margin-top: 0px;
      margin-bottom: 0px;
    }
    p {
      margin-top: 0px;
      margin-bottom: 15px;
    }
    blockquote {
      // padding-left: 10px;
      margin-left: 0;
      margin-right: 0;
      position: relative;
      p {
        padding: 10px;
        padding-left: 10px;
        background: #eee;
        word-break: no-wrap;
        &:before {
          position: absolute;
          top: 0;
          left: -4px;
          display: inline-block;
          content: "";
          width: 4px;
          height: 100%;
          background: #f44336;
        }
      }
    }
  }
</style>
