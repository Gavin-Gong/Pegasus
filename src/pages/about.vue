<template>
  <div class="article-typo" id="about">
    <div class="avatar" :style="avatar">
    </div>
    <div v-html="htmlBody"></div>
  </div>
</template>

<script>
import XIcon from 'components/Icon';
import marked from 'marked';
import highlight from 'highlightjs';
import 'highlightjs/styles/github.css';

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
  },

  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch('fetchAbout');
  },
  computed: {
    htmlBody() {
      return marked(this.about.body);
    },
    about() {
      return this.$store.state.about.data;
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
  .avatar {
    margin: 0 auto 30px;
    width: 80px;
    height: 80px;
    background: #ccc;
    border-radius: 50%;
  }
}
</style>
