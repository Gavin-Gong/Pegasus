<template>
  <div id="dashboard-post-detail">
      <el-col :span="19" class="content">
        <div class="post-editor">
        </div>
        <div class="title-bar">
          <el-input placeholder="请输入标题" v-model="data.title" label-width="80px" ></el-input>
          <el-button type="primary" style="margin-left: 80px" @click="saveArticle">保存</el-button>
          <el-button type="danger">删除</el-button>
        </div>
        <md-editor :value="data.body" class="dashboard-editor">

        </md-editor>
      </el-col>
  </div>
</template>

<script>
  import { Input, Row, Col } from 'element-ui';
  import { editArticle, deleteArticle } from 'api/article';
  import MdEditor from 'components/Editor';

  Vue.use(Input);
  Vue.use(Row);
  Vue.use(Col);
  export default {
    components: {
      MdEditor,
    },
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {

      };
    },
    methods: {
      saveArticle() {
        editArticle();
        deleteArticle();
      },
    },
  };
</script>

<style lang="scss">
@import '~styles/mixins';
#dashboard-post-detail {
  height: 100vh;
  width: 100%;
  // overflow: hidden;
  .content {
    border-left: 1px solid #eee;
  }
  // .post-editor {
  //   padding: 20px;
  //   background: #eee;
  //   height: 100vh;
  //   overflow: scroll;
  // }
  .title-bar {
    margin: 20px 50%;
    width: 600px;
    transform: translateX(-50%);
    .el-input {
      width: 300px;
    }
  }
  // .dashboard-editor {
  //   position: fixed;
  //   top:0;
  // }
}
</style>
