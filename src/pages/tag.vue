<template>
  <div id="tag">
    <div class="tag-info">
       <div class="tag-banner" :style="background"></div>
       <h1>{{ tag.title }}</h1>
       <p> {{ tag.posts_count }} Posts</p>
    </div>
    <ul class="article-list">
      <li class="" v-for="article in tag.posts">
        <article-card
          :title="article.title"
          :body="article.body"></article-card>
      </li>
    </ul>
  </div>
</template>

<script>
  import ArticleCard from 'components/article';

  export default {
    components: {
      ArticleCard,
    },
    data() {
      return {
      };
    },
    created() {
      this.$store.dispatch('fetchTag', this.$route.params.id);
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
  // overflow: hidden;
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
