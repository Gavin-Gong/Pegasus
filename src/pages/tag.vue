<template>
  <div id="tag">
    <x-banner :background="tag.banner" :count="tag.post_count" :title="tag.title">
    </x-banner>
    <ul class="article-list">
      <li class="" v-for="article in tag.posts">
        <article-card
          :article="article"
          line-clamp>
        </article-card>
      </li>
      <placeholder v-if="tag.posts && !tag.posts.length">
        <h3> There is no posts!</h3>
      </placeholder>
    </ul>
  </div>
</template>

<script>
  import ArticleCard from 'components/article';
  import XBanner from './components/banner';
  import Placeholder from './components/placeholder';

  export default {
    name: 'tag',
    components: {
      ArticleCard,
      XBanner,
      Placeholder,
    },
    data() {
      return {
      };
    },
    created() {
      this.$store.dispatch('fetchTag', this.$route.params.id);
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    methods: {
      fetchTags() {

      },
    },
    computed: {
      background() {
        return {
          background: `url(${this.tag.banner}) 0 / cover fixed`,
        };
      },
      tag() {
        return this.$store.state.tag.detail;
      },
    },
  };
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
#tag {
  overflow: hidden;
  .tag-info {
    overflow: hidden;
    text-align: center;
    color: #fff;
    position: relative;
    height: 100px;
    margin: -10px;
    padding: 60px 0 30px;
    h1 {
      color: #fff;
      font-size: 40px
    }
    .tag-banner {
      @include blur-mask();
      // box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12), 0px 0px 6px 0px rgba(0, 0, 0, 0.04);
    }
  }
  .article-list {
    margin-top: 40px;
    li {
      margin: auto;
      width: 99%;
    }
  }
}
</style>
