<template>
  <div id="topic">
    <x-banner :background="topic.banner" :count="topic.post_count" :title="topic.title">
    </x-banner>
    <ul class="article-list">
      <li class="" v-for="article in topic.posts">
        <article-card
          :article="article"
          :line-clamp="true">
        </article-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import ArticleCard from 'components/article';
  import XBanner from './components/banner';

  export default {
    name: 'topic',
    components: {
      ArticleCard,
      XBanner,
    },
    data() {
      return {
      };
    },
    created() {
      this.$store.dispatch('fetchTopic', this.$route.params.id);
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    methods: {
      fetchtopics() {

      },
    },
    computed: {
      topic() {
        console.log(this.$store.state.topic.detail);
        return this.$store.state.topic.detail;
      },
    },
    watch: {
      $route() {
        this.$store.dispatch('fetchTopic', this.$route.params.id);
      },
    },
  };
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
#topic {
  overflow: hidden;
  .topic-info {
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
    .topic-banner {
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
