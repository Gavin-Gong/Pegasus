<template>
  <div id="dashboard-post">
    <el-row>
      <list-view @active="handleActive" type="article"></list-view>
      <el-col :span="19" class="content">
        <!--<div class="post-editor">
          {{ activedPost.body ? activedPost.body: '' }}
        </div>-->
        <el-input class="title-bar" placeholder="change title" v-model="activedPost.title"></el-input>
        <md-editor :value="activedPost.body">

        </md-editor>
      </el-col>
    </el-row>
    <!-- TODO -->
    <!--loadMore-->
  </div>
</template>

<script>
  import { Input, Row, Col } from 'element-ui';
  import MdEditor from 'components/Editor';
  import ListView from './components/ListView';

  Vue.use(Input);
  Vue.use(Row);
  Vue.use(Col);
  export default {
    components: {
      ListView,
      MdEditor,
    },
    created() {
      this.$store.dispatch('fetchArticleList', { query: { _limit: 20 } });
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
        this.activedPost = data;
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
#dashboard-post {
  .content {
    border-left: 1px solid #eee;
  }
  .post-editor {
    padding: 20px;
    background: #eee;
    height: 100vh;
    overflow: scroll;
  }
  .title-bar {
    margin: 20px 50%;
    width: 600px;
    transform: translateX(-50%);
  }
}
</style>
