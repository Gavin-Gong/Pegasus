<template>
  <div id="home">
    <article-card
      v-loading="true"
      v-for="article in articleList"
      :body="article.body"
      :title="article.name"
      :line-clamp="true">
    </article-card>

    <div class="pagination">
      <div v-show="!barLoading">
        <el-button>Prev</el-button>
        <el-button>Next</el-button>
      </div>
    </div>
      <!--加载时出现-->
    <div class="loading-bar" v-loading="barLoading"></div>
  </div>
</template>

<script>
import { Button } from 'element-ui';
// import throttle from 'utils/throttle';
import ArticleCard from 'components/article';
import articleEn from 'api/data/en-article';
import articleCh from 'api/data/ch-article';

Vue.use(Button);

export default {
  components: {
    ArticleCard,
  },
  created() {
    // this.fetchArticles().then((res) => {
    //   console.log(res);
    // });
    this.$store.dispatch('fetchArticleList', {
      _page: 1,
      _limit: 5,
    }).then(() => {
      console.log(this.$store.state.article.list);
    });
    this.scrollLoad();
  },
  data() {
    return {
      articleEn: articleEn.body,
      articleCh: articleCh.body,
      barLoading: true,
      scrollLoadedData: [],
    };
  },
  methods: {
    scrollLoad() {
      /*eslint-disable*/
      let loadStatus = null;
      window.addEventListener('scroll', (cb, toBottom = 0) => {
        const sH = document.body.scrollHeight;
        const sT = document.body.scrollTop;
        // console.log('scrollHeight', document.body.scrollHeight);
        // console.log('scrollTop', document.body.scrollTop);
        // console.log('innerHeight', window.innerHeight);
        if (sH <= sT + window.innerHeight + toBottom) {
          console.log('is-bottom');
          loadStatus = true;
          cb();
        }
      });
    },
    fetchMore() {

    },
  },
  computed: {
    articleList() {
      return [...this.$store.state.article.list, ...this.scrollLoadedData];
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  .pagination {
    text-align: center;
    margin-bottom: 30px;
  }
  .loading-bar {
    height: 50px;
  }
}
</style>
