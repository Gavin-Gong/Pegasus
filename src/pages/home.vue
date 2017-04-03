<template>
  <div id="home">
    <article-card :body="articleEn" title="test Article" :line-clamp="true"></article-card>
    <article-card :body="articleCh" title="test Article":line-clamp="true"></article-card>
    <div class="pagination">
      <el-button>Prev</el-button>
      <el-button>Next</el-button>
    </div>
  </div>
</template>

<script>
import ArticleCard from 'components/article';
import { Button } from 'element-ui';
import articleEn from 'api/data/en-article';
import articleCh from 'api/data/ch-article';

Vue.use(Button);

export default {
  components: {
    ArticleCard,
  },
  data() {
    return {
      articleEn: articleEn.body,
      articleCh: articleCh.body,
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
  margin-bottom: 30px;
}
</style>
