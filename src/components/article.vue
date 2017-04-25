<template>
  <div class="article-card article-typo">
    <router-link
      v-if="!$slots.banner"
      class="title"
      :to="{name: 'Article', params:{id: article.id}}"
      >{{ article.title }}</router-link>
    <slot name="banner"></slot>
    <div class="infobar-wrapper">
      <ul :class="['info-bar', 'clearfix', {'style-bar': !!$slots.banner}]">
        <li><x-icon type="clock-o"></x-icon> {{article.created_at | timestamp}} </li>
        <li><x-icon type="tag"></x-icon>
          <ul class="tag-list">
              <x-tag
                v-for="tag in article.tags"
                :key="tag.id"
                :route="{name: 'Tag', params: {id: tag.id}}"
                :text="tag.title">
              </x-tag>
          </ul>
        </li>
        <li v-if="!isEmptyObj(article.topic)"><x-icon type="folder"></x-icon>
          <router-link :to="{name: 'Topic', params: {id: article.topic.id}}"> {{article.topic.title}} </router-link>
        </li>
      </ul>
    </div>
    <slot name="info"></slot>
    <div :class="lineClamp ? 'line-clamp' : ''">
      <div v-html="htmlBody"></div>
    </div>
    <el-button
      v-if="lineClamp"
      @click="$router.push({name: 'Article', params: {id: article.id}})"
      class="more-btn"
      >More</el-button>
  </div>
</template>

<script>
import { Card, Button } from 'element-ui';
import XIcon from 'components/Icon';
import XTag from 'components/Tag';
import marked from 'marked';
import highlight from 'highlightjs';
import 'highlightjs/styles/github.css';
import { isEmptyObj } from 'src/utils';

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
    lineClamp: {
      type: Boolean,
      default: false,
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
  methods: {
    isEmptyObj,
  },
  created() {
    // console.log(this.article);
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
    padding: 30px 30px 40px;
    @include res-to(xs) {
      padding: 0 10px 30px;
      // padding: 20px 20px;
    }
    margin-bottom: 30px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .12), 0px 0px 6px 0px rgba(0, 0, 0, .04);
    background-clip: content-box;
    .infobar-wrapper {
      overflow: hidden;
      .info-bar {
        font-size: 14px;
        margin-left: -25px;
        margin-bottom: 20px;
        color: #888;
        @include reset-list();
        > li {
          margin-left: 25px;
          float: left;
        }
        // > li:first-child {
        //   margin-left: 0;
        // }
        >li:last-child {
          @include line-clamp(1);
        }
        .tag-list {
          display: inline-block;
          @include reset-list();
        }
        &.style-bar {
          background: #eee;
          padding-top: 10px;
          padding-bottom: 10px;
          padding-left: 15px;
          // background-clip: content-box;
        }
      }
    }
    .title {
      font-size: 34px;
      display: inline-block;
      cursor: pointer;
      margin-bottom: 10px;
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
    .article-box {
      // display: inline-block;
      margin: 0 auto;
      max-width: 768px;
      padding: 20px;
      box-shadow: 2px 2px 8px #ccc;
    }
  }
</style>
