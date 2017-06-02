<template>
  <div class="article-typo" id="about">
    <top-nav></top-nav>
    <div class="avatar" :style="avatar">
    </div>
    <div class="email-bar">
      <i class="iconfont icon-email"> {{ email }}</i>
    </div>
    <div v-html="htmlBody"></div>
  </div>
</template>

<script>
import XIcon from 'components/Icon';
import 'highlightjs/styles/github.css';
import TopNav from './components/top-nav';

// import marked from 'marked';
// import highlight from 'highlightjs';
/* global marked*/
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
    /* global hljs*/
    return hljs.highlightAuto(code).value;
  },
});

export default {
  components: {
    XIcon,
    TopNav,
  },
  data() {
    return {
    };
  },
  beforeCreate() {
    this.$store.dispatch('fetchProfile');
  },
  computed: {
    htmlBody() {
      return marked(this.about.intro);
    },
    about() {
      return this.$store.state.profile.data;
    },
    email() {
      return this.$store.state.profile.data.email;
    },
    avatar() {
      return {
        // background: '#ccc',
        background: `url(${this.about.avatar}) #ccc center center / cover no-repeat`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
#about {
  padding: 20px;
  max-width: 600px;
  @include res-to(xs) {
    padding: 0 10px;
  }
  .avatar {
    margin: 0 auto 10px;
    width: 80px;
    height: 80px;
    background: #ccc;
    border-radius: 50%;
  }
  .email-bar {
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
