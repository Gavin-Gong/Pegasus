<template>
  <div id="dashboard-post">
    <el-row>
      <list-view @active="handleActive" type="article"></list-view>
      <el-col :span="19" class="content">
        <!--<div class="post-editor">
          {{ activedPost.body ? activedPost.body: '' }}
        </div>-->
        <div class="title-bar">
          <el-input placeholder="请输入标题" v-model="activedPost.title" label-width="80px"></el-input>
          <el-button type="primary" style="margin-left: 80px" @click="saveArticle">保存</el-button>
          <el-button type="danger" @click="deltete">删除</el-button>
        </div>
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
    .el-input {
      width: 300px;
    }
  }
}
</style>
