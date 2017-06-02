<template>
  <div id="dashboard-post-detail">
      <el-col :span="19" class="content">
        <div class="post-editor">
        </div>
        <div class="title-bar">
          <el-input placeholder="请输入标题" v-model="data.title" label-width="80px" ></el-input>
          <el-button type="primary" style="margin-left: 80px" @click="saveArticle">保存</el-button>
          <el-button type="danger" @click="handleDelete">删除</el-button>
        </div>
        <md-editor
          @change="handleChange"
          :value="data.body" class="dashboard-editor">

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
        changedBody: '',
      };
    },
    methods: {
      saveArticle() {
        let finalData = null;
        if (this.changedBody) {
          finalData = Object.assign({}, this.data, { body: this.changedBody });
        } else {
          finalData = this.data;
        }
        editArticle(this.$route.params.id, finalData).then((res) => {
          console.log(res);
          if (res.status < 300) {
            this.$msg.success('保存成功！');
          } else {
            this.$msg.error('保存失败！');
          }
        });
      },
      handleDelete() {
        /*eslint-disable*/
        this.$msgbox.confirm('确认删除?').then(() => {
          return deleteArticle(this.$route.params.id);
        }).then(() => {
          this.$store.dispatch('fetchArticleList', { _limit: 20 }).then((data) => {
            this.$router.push({ name: 'DbPost', params: { id: data[0].id } });
            this.$msg.success('删除成功');
          });
        }).catch(() => {
          this.$router.push({ name: 'DbPost', params: { id: 1 } });
        });
      },
      handleChange(body) {
        this.changedBody = body;
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
    // position: fixed;
    // top: 0px;
    z-index: 100000000;
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
