<template>
  <div id="dashboard-topic">
      <el-col :span="19" class="content">
        <el-form label-position="left" label-width="80px">
          <el-form-item label="专题名">
            <el-input v-model="data.title"></el-input>
          </el-form-item>
          <el-form-item label="专题介绍">
            <el-input
              :autosize="{ minRows: 6, maxRows: 10}"
              v-model="data.title"
              type="textarea"></el-input>
          </el-form-item>
        </el-form>

        <div class="form-bottom-bar">
          <el-button type="primary" @click="saveTopic"> 保存 </el-button>
          <el-button  @click="$router.push({name: 'Topic', params: {id: $route.params.id}})">
            <i class="iconfont icon-link"></i>
            打开链接 </el-button>
          <el-button type="danger" @click="deleteTopic"> 删除 </el-button>
        </div>
      </el-col>
  </div>
</template>

<script>
  import { Input, Row, Col, Form, FormItem, Button } from 'element-ui';
  import { editTopic, deleteTopic } from 'api/topic';

  Vue.use(Input);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Button);

  export default {
    created() {
      this.$store.dispatch('fetchTopic', this.$route.params.id);
    },
    activated() {
      this.$store.dispatch('fetchTopic', this.$route.params.id);
    },
    beforeRouteUpdate(to, from, next) {
      this.$store.dispatch('fetchTopic', to.params.id);
      next();
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
      deleteTopic() {
        /*eslint-disable*/
        MessageBox.confirm('确认删除该专题？')
        .then(() => {
          return deleteTopic(this.$route.params.id);
        }).then(() => {
          this.$msg.success('删除成功!');
          this.$store.dispatch('fetchTopicList', { query: { _limit: 20 } });
        }).catch(() => {
          this.$msg.info('未删除!');
        });
      },
      saveTopic() {
        editTopic(this.$route.params.id, this.data).then(() => {
          this.$msg.success('保存成功');
        }).catch(() => {
          this.$msg.error('保存失败');
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
#dashboard-topic {
  .content {
    padding: 20px;
    background: #eee;
    height: 100vh;
    overflow: scroll;
  }
  .form-bottom-bar {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
