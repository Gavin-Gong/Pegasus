<template>

  <el-row :gutter="20" class="main-body">
    <el-col v-if="lg$" :xs="0" :sm="0" :md="8 " :lg="5">
      <profile></profile>
    </el-col>
    <el-col :xs="8" :sm="12" :md="8" :lg="{span: 15, offset: 0}">
      <div id="home">
        <article-card
          v-loading=""
          v-for="article in articleList"
          :article="article"
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
    </el-col>
    <el-col v-if="screenWidth > 992" :xs="0" :sm="12" :md="8" :lg="4">
      <side-bar></side-bar>
    </el-col>
  </el-row>
</template>

<script>
import { Button, Loading, Row, Col } from 'element-ui';
// import throttle from 'utils/throttle';
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
    // this.fetchArticles().then((res) => {
    //   console.log(res);
    // });
    // this.$loading({
    //   fullscreen: true,
    // });
    const fsLoad = Loading.service({
      fullscreen: true,
      lock: true,
      text: 'Loading',
    });
    console.log(this.$loading);
    this.$store.dispatch('fetchArticleList', {
      query: {
        _page: 1,
        _limit: 5,
      },
    }).then(() => {
      // this.$loading.close();
      fsLoad.close();
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
      window.addEventListener('scroll', (toBottom = 0) => {
        const sH = document.body.scrollHeight;
        const sT = document.body.scrollTop;
        // console.log('scrollHeight', document.body.scrollHeight);
        // console.log('scrollTop', document.body.scrollTop);
        // console.log('innerHeight', window.innerHeight);
        if (sH <= sT + window.innerHeight + toBottom) {
          console.log('is-bottom');
          loadStatus = true;
        }
      });
    },
    fetchMore() {

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
