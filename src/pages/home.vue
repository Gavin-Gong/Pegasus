<template>
  <div id="home" class="clearfix">
    <profile v-show="lg$" class="profile"></profile>
    <div class="content">
      <article-card
        v-loading=""
        v-for="article in articleList"
        :article="article"
        :line-clamp="true">
      </article-card>

      <div class="pagination">
        <div v-show="!barLoading">
          <el-button @click="fetchData">Prev</el-button>
          <el-button @click="loadMore">Next</el-button>
        </div>
      </div>
        <!--加载时出现-->
      <div class="loading-bar" v-loading="barLoading"></div>
    </div>
    <side-bar
      class="sidebar"
      v-if="screenWidth > 992"></side-bar>
  </div>
</template>

<script>
import { Button, Loading, Row, Col } from 'element-ui';
import ArticleCard from 'components/article';
import articleEn from 'api/data/en-article';
import articleCh from 'api/data/ch-article';
import screenMixin from 'mixins/screen';
import Profile from '../pages/components/profile';
import SideBar from '../pages/components/sidebar';

Vue.use(Button);
Vue.use(Loading);
Vue.use(Row);
Vue.use(Col);

export default {
  components: {
    ArticleCard,
    SideBar,
    Profile,
  },
  mixins: [screenMixin],
  created() {
    this.fetchData();
  },
  data() {
    return {
      articleEn: articleEn.body,
      articleCh: articleCh.body,
      barLoading: false,
      scrollLoadedData: [],
    };
  },
  methods: {
    // scrollLoad() {
    //   /*eslint-disable*/
    //   let loadStatus = null;
    //   window.addEventListener('scroll', (toBottom = 0) => {
    //     const sH = document.body.scrollHeight;
    //     const sT = document.body.scrollTop;
    //     // console.log('scrollHeight', document.body.scrollHeight);
    //     // console.log('scrollTop', document.body.scrollTop);
    //     // console.log('innerHeight', window.innerHeight);
    //     if (sH <= sT + window.innerHeight + toBottom) {
    //       console.log('is-bottom');
    //       loadStatus = true;
    //     }
    //   });
    // },
    loadMore() {
      this.fetchData({ _page: 2, _limit: 5 });
    },
    fetchData(query = { _page: 1, _limit: 5 }) {
      const fsLoad = Loading.service({
        fullscreen: true,
        lock: true,
        text: 'Loading',
      });
      this.$store.dispatch('fetchArticleList', {
        query,
      }).then(() => {
        // this.$loading.close();
        fsLoad.close();
        console.log(this.$store.state.article.list);
      });
    },
  },
  computed: {
    articleList() {
      return this.$store.state.article.list;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
#home {
  > * {
    box-sizing: border-box;
    float: left;
  }
  .profile {
    padding: 0 20px;
    width: 20%;
  }
  .content {
    margin: 0 auto;
    padding: 0 20px;
    width: 60%;
    @include res-to(xs) {
      width: 100%;
      padding: 0;
    }
  }
  .sidebar {
    padding: 0 20px;
    width: 20%;
  }
  .pagination {
    text-align: center;
    margin-bottom: 30px;
  }
  .loading-bar {
    height: 50px;
  }
}
</style>
