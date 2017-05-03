<template>
  <div id="dashboard-tag">
    <el-row>
      <list-view @active="handleActive" type="tag"></list-view>
      <router-view :data="activedTag"></router-view>
    </el-row>
  </div>
</template>

<script>
  import { Input, Row, Col, Form, FormItem, Button } from 'element-ui';
  import ListView from '../components/ListView';

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
    // beforeRouteEnter: (to, from, next) => {
    //   next((vm) => {
    //     vm.$store.dispatch('fetchArticleList', { query: { _limit: 20 } })
    //       .then(({ data }) => {
    //         vm.activedTag = data[0];
    //       });
    //   });
    // },
    created() {
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
