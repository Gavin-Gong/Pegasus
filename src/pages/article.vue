<template>
  <div id="article-detail">
    <article-card body="## anme" title="test Article"></article-card>
  </div> 
</template>

<script>
import ArticleCard from 'components/article';
import { Button } from 'element-ui';

Vue.use(Button); 

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
.pagination {
  text-align: center;
}
</style>
