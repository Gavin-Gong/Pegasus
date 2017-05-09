<template>
  <div id="dashboard-tag">
    <el-row>
      <list-view
        route-name="DbTag"
        @active="handleActive"
        :data="listData">
        <el-input
          slot="search"
          plceholder="">
        </el-input>
        </list-view>
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
    beforeRouteEnter: (to, from, next) => {
      next((vm) => {
        /*eslint-disable*/
        vm.$store.dispatch('fetchTagList', { query: { _limit: 20 } })
          .then(({ data }) => {
          });
      });
    },
    created() {
    },
    data() {
      return {
        activedTag: {
          body: '',
          title: '',
        },
      };
    },
    methods: {
      handleActive(data) {
        if (data) {
          this.activedTag = data;
        }
      },
    },
    computed: {
      listData() {
        /*避免v-model直接操作state*/
        return JSON.parse(JSON.stringify(this.$store.state.tag.list));
      },

    },
    watch: {
      // $route() {
      //   /* detail页面的初始数据 */
      //   if (this.$route.name === 'DbTag') {
      //     /*eslint-disable*/
      //     console.log('change');
      //     const resultArr = this.listData.filter(item => item.id == this.$route.params.id);
      //     if (resultArr.length === 1) {
      //       this.activedTag = resultArr[0];
      //     }
      //   }
      // },
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
