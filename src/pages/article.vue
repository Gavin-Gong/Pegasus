<template>
  <div id="article">
    <article-card body="## anme" type="markdown"></article-card>
    <article-card body="## ss" type="markdown"></article-card>
    <div class="pagination">
      <el-button>Prev</el-button>
      <el-button>Next</el-button>
     <i class="fa fa-camera-retro fa-lg"></i>
    </div>
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
