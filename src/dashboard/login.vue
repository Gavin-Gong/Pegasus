<template>
  <div id="login">
    <div class="login-box">
     <el-card>
       <img src="~assets/images/logo.png" alt="" class="logo">
        <el-form label-position="left" label-width="50px">
          <el-form-item label="账号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input></el-input>
          </el-form-item>
        </el-form>
        <span class="dp-ib">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button @click="$router.go(-1)">取消</el-button>
        </span>
      </el-card>
    </div>
  </div>
</template>

<script>
  import { Card, Form, FormItem, Input, Button } from 'element-ui';

  Vue.use(Card);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Input);
  Vue.use(Button);

  export default {
    created() {
      this.$store.dispatch('fetchTopicList');
      this.$store.dispatch('fetchTagList');

      this.$store.commit('HIDDEN_NAV');
      this.$store.commit('HIDDEN_FOOTER');
    },
    beforeDestroy() {
      this.$store.commit('SHOW_NAV');
      this.$store.commit('SHOW_FOOTER');
    },
    deactivated() {
      this.$store.commit('SHOW_NAV');
      this.$store.commit('SHOW_FOOTER');
    },
    activated() {
      this.$store.commit('HIDDEN_NAV');
      this.$store.commit('HIDDEN_FOOTER');
    },
    methods: {
      login() {
        // TODO:
      },
    },
  };
</script>

<style lang="scss" >
@import '~styles/mixins';
#login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  height: 100vh;
  overflow: hidden;
  background: url(~assets/images/article-banner.jpg) 0 / cover;
  .login-box {
    text-align: center;
    width: 300px;
    margin: 100px auto;
    .el-card {
      padding-top: 20px;
      padding-bottom: 40px;
    }
    .logo {
      width: 80px;
      margin-bottom: 20px;
    }
  }
}
</style>
