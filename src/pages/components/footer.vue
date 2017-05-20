<template>
  <div class="footer" v-if="isShow">
    <p>© 2017 Gavin-Gong</p>
    <p>Powered By Vuejs</p>
    <template v-show="">
      <el-button
        @click="$router.push({name: 'Login'})" class="login-btn">
        <i class="iconfont icon-admin" style="font-size: 18px;"></i>
        管理员登录</el-button>
      <el-button
        @click="logout" class="login-btn">
        <i class="iconfont icon-logout" style="font-size: 18px;"></i>
        退出登陆</el-button>
    </template>
  </div>
</template>

<script>
import { Card, Button } from 'element-ui';

Vue.use(Card);
Vue.use(Button);

export default {
  methods: {
    logout() {
      this.$store.commit('LOGOUT');
      this.$router.push({ name: 'Home' });
      this.$msg('退出成功');
    },
  },
  computed: {
    isShow() {
      return this.$store.state.global.showFooter;
    },
  },
};
</script>

<style lang="scss">
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 25px;
  height: 140px;
  // background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
  text-align: center;
  .login-btn {
    margin: 20px auto;
  }
}
</style>
