<template>
  <div id="article">
    <article-card body="## anme" type="markdown"></article-card>
    <article-card body="## ss" type="markdown"></article-card>
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
  methods: {
    fetchArticles() {

    },
  },
};
</script>

<style lang="scss" scoped>

</style>
