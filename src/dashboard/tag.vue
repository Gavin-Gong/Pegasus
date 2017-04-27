<template>
  <div id="dashboard-tag">
    <el-row>
      <list-view @active="handleActive" type="tag"></list-view>
      <el-col :span="19" class="content">
        <el-input v-model="activedTag.title"></el-input>

        <el-button type="primary"> Save </el-button>
        <el-button type="danger"> Delete </el-button>
        <!--<el-button type="danger">Delete Tag And Posts</el-button>-->
      </el-col>
    </el-row>
    <!-- TODO -->
    <!--loadMore-->
  </div>
</template>

<script>
  import { Input, Row, Col, Form, FormItem, Button } from 'element-ui';
  import ListView from './components/ListView';

  Vue.use(Input);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Button);

  export default {
    components: {
      ListView,
    },
    created() {
      this.$store.dispatch('fetchArticleList', { query: { _limit: 20 } });
    },
    data() {
      return {
        activedTag: {
          body: '',
        },
      };
    },
    methods: {
      handleActive(data) {
        this.activedTag = data;
      },
    },
    computed: {
      listData() {
        return this.$store.state.article.list;
      },
    },
  };
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
#dashboard-tag {
  .content {
    padding: 20px;
    background: #eee;
    height: 100vh;
    overflow: scroll;
  }
}
</style>
