<template>
  <div id="home">
    <article-card body="## anme" title="test Article"></article-card>
    <article-card body="## ss" title="test Article"></article-card>
    <div class="pagination">
      <el-button>Prev</el-button>
      <el-button>Next</el-button>
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
