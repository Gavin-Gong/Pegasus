<template>
  <div id="home" class="clearfix">
    <top-nav></top-nav>
    <profile v-if="lg$" class="profile"></profile>
    <div class="content">
      <placeholder v-if="showPlaceholder">

      </placeholder>

      <article-card
        v-for="(article, index) in articleList"
        v-loading=""
        :key="index"
        :article="article"
        :line-clamp="true">
      </article-card>
      <el-card class="pagination" v-loading="barLoading">
        <!--<el-button @click="fetchPrevPage" :disabled="currentPage === 1">Prev</el-button>-->
        <el-button
          type="primary"
          v-if="currentPage !== 0"
          @click="fetchNextPage"> 加载更多 </el-button>
        <p v-else>没有更多了</p>
      </el-card>
        <!--加载时出现-->
    </div>
    <side-bar
      class="sidebar"
      v-if="screenWidth > 992"></side-bar>
  </div>
</template>

<script>
import { Button, Loading, Row, Col, Card } from 'element-ui';
import ArticleCard from 'components/article';
import articleEn from 'api/data/en-article';
import articleCh from 'api/data/ch-article';
import screenMixin from 'mixins/screen';
import Nprogress from 'nprogress';
import Profile from '../pages/components/profile';
import SideBar from '../pages/components/sidebar';
import TopNav from '../pages/components/top-nav';
import Placeholder from './components/placeholder';

Vue.use(Button);
Vue.use(Loading);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);

export default {
  components: {
    ArticleCard,
    SideBar,
    Profile,
    Placeholder,
    TopNav,
  },
  mixins: [screenMixin],

  created() {
    /* eslint-disable*/
    // const fsLoad = Loading.service({
    //     fullscreen: true,
    //     lock: true,
    //     text: 'Loading',
    // });
    // fsLoad.open();
    this.fetchData();
  },
  mounted() {
    // window.scrollTo(0, this.$route.meta.positionY);
  },
  activated() {
    // console.log(this.$route.meta.positionY);
    // window.scrollTo(0, this.$route.meta.positionY);
  },
  data() {
    return {
      articleEn: articleEn.body,
      articleCh: articleCh.body,
      barLoading: false,
      scrollLoadedData: [],
      currentPage: 1,
      showPlaceholder: true,
    };
  },
  methods: {
    fetchNextPage() {
      // this.barLoading = true;
      Nprogress.start();
      this.currentPage = this.currentPage + 1;
      this.$store.dispatch('addToArticleList', { _page: this.currentPage, _limit: 5 })
        .then((data) => {
          // this.barLoading = false;
          Nprogress.done();
          if (Array.isArray(data) && !data.length) {
            this.currentPage = 0;
          }
        });
    },
    fetchData(query = { _page: 1, _limit: 5 }) {
      const fsLoad = Loading.service({
        fullscreen: true,
        lock: true,
        text: '加载中.....',
      });
      // fsLoad.open();
      this.$store.dispatch('fetchArticleList', {
        query,
      }).then((data) => {
        this.showPlaceholder = false;
        fsLoad.close();
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
  min-width: 320px;
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
