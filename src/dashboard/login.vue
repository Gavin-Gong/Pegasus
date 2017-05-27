<template>
  <div id="login">
    <div class="login-box">
     <el-card>
       <img src="~assets/images/pegasus_logo_dark.png" alt="" class="logo">
        <el-form label-position="left" label-width="50px">
          <el-form-item label="账号">
            <el-input v-model="name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password" type="password"></el-input>
          </el-form-item>
        </el-form>
        <span class="dp-ib">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button @click="$router.go(-1)">　返回　</el-button>
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
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        if (to.query.shouldAuth) {
          vm.$msg('请先登录!');
        }
      });
    },
    methods: {
      login() {
        if (this.name === 'admin' && this.password === '123123123') {
          this.$store.commit('LOGIN');
          this.$msg.success('登陆成功');
          this.$router.push({ name: 'Home' });
        } else {
          this.$msg.error('登陆失败, 请确认登陆信息是否正确');
        }
      },
    },
    data() {
      return {
        name: 'admin',
        password: '123123123',
      };
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
  background: #333 url(http://opazkqh2d.bkt.clouddn.com/17-5-22/66835913-file_1495435088121_add3.jpg) 0 / cover;
  .login-box {
    text-align: center;
    @include res-to(xs) {
      width: 80%;
    }
    width: 300px;
    margin: 100px auto;
    .el-card {
      padding-top: 20px;
      padding-bottom: 40px;
    }
    .logo {
      height: 100px;
      margin-bottom: 20px;
    }
  }
}
</style>
