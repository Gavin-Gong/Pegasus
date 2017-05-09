<template>
    <el-col :span="19" class="content">
      <el-form label-position="left" label-width="60px">
        <el-form-item label="标签名">
          <el-input v-model="data.title"></el-input>
        </el-form-item>
      </el-form>

      <div class="form-bottom-bar">
        <el-button type="primary" @click="saveTag"> 保存 </el-button>
        <el-button  @click="$router.push({name: 'Tag', params: {id: data.id}})">
          <i class="iconfont icon-link"></i>
          打开链接 </el-button>
        <el-button type="danger" @click="deleteTag"> 删除 </el-button>
      </div>
    </el-col>
</template>

<script>
  import { Input, Col, Form, FormItem, Button, MessageBox } from 'element-ui';
  import { editTag, deleteTag } from 'api/tag';

  Vue.use(Input);
  Vue.use(Col);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Button);
  // Vue.use(MessageBox);

  export default {
    // created() {
    //   this.$store.dispatch('fetchTag', this.$route.params.id);
    // },
    // activated() {
    //   this.$store.dispatch('fetchTag', this.$route.params.id);
    // },
    beforeRouteUpdate(to, from, next) {
      this.$store.dispatch('fetchTag', to.params.id);
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
      deleteTag() {
        /*eslint-disable*/
        MessageBox.confirm('确认删除该标签？')
        .then(() => {
          return deleteTag(this.$route.params.id);
        }).then(() => {
          this.$msg.success('删除成功!');
          this.$store.dispatch('fetchTagList', { query: { _limit: 20 } });
        }).catch(() => {
          this.$msg.info('未删除!');
        });
      },
      saveTag() {
        editTag(this.$route.params.id, this.data).then(() => {
          this.$msg.success('保存成功');
        }).catch(() => {
          this.$msg.error('保存失败');
        });
      },
      fetchTag() {
        return this.$store.dispatch('fetchTag', this.$route.params.id);;
      },
    },
    computed: {
      tagData() {
        return Object.assign({}, this.$store.state.tag.detail);
        // return Object.assign({}, this.$store.state.tag.detail);
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
  .form-bottom-bar {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
