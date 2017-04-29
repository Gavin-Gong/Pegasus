<template>
  <div id="dashboard-tag">
    <el-row>
      <list-view @active="handleActive" type="tag"></list-view>
      <el-col :span="19" class="content">
        <el-form label-position="left" label-width="60px">
          <el-form-item label="标签名">
            <el-input v-model="activedTag.title"></el-input>
          </el-form-item>
          <!--<el-form-item label="专题名">
            <el-input
              :autosize="{ minRows: 6, maxRows: 10}"
              v-model="activedTag.title"
              type="textarea"></el-input>
          </el-form-item>-->
        </el-form>

        <div class="form-bottom-bar">
          <el-button type="primary"> 保存 </el-button>
          <el-button  @click="$router.push({name: 'Tag', params: {id: 1}})">
            <i class="iconfont icon-link"></i>
            打开链接 </el-button>
          <el-button type="danger"> 删除 </el-button>
        </div>
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
  .form-bottom-bar {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
