<template>
  <div id="dashboard-post">
    <el-row>
      <list-view
        @active="handleActive"
        route-name="DbPost"
        :data="listData">
        <el-input slot="search"></el-input>
        </list-view>
      <router-view :data="activedPost"></router-view>
    </el-row>
    <!-- TODO -->
    <!--loadMore-->
  </div>
</template>

<script>
  import { Input, Row, Col } from 'element-ui';
  import { editArticle, deleteArticle } from 'api/article';
  import MdEditor from 'components/Editor';
  import ListView from '../components/ListView';

  Vue.use(Input);
  Vue.use(Row);
  Vue.use(Col);
  export default {
    components: {
      ListView,
      MdEditor,
    },
    created() {
      this.$store.dispatch('fetchArticleList', { query: { _limit: 20, _sort: 'id', _order: 'DESC' } });
    },
    watch: {
      // $route() {
      //   if (this.$route.name === 'DbPost') {DESCDESC
      //     this.activedPost = this.listData[0];
      //   }
      // },
    },
    data() {
      return {
        activedPost: {
          body: '',
          title: '',
        },
      };
    },
    methods: {
      handleActive(data) {
        if (data) {
          this.activedPost = data;
        }
      },
      saveArticle() {
        editArticle();
        deleteArticle();
      },
    },
    computed: {
      listData() {
        return this.$store.state.article.list;
      },
    },
  };
</script>

<style lang="scss">

</style>
