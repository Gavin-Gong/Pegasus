<template>
  <div id="dashboard">
    <el-row>
      <el-col :span="3">
        <el-menu default-active="2" theme="dark" router>
          <!--<el-menu-item index="1" :route="{path: 'home'}"><i class="el-icon-menu"></i>Statistics</el-menu-item>-->
          <el-menu-item index="2" :route="{path: '/dashboard/post'}"><i class="el-icon-menu"></i>Post</el-menu-item>
          <el-menu-item index="3" :route="{path: '/dashboard/tag'}"><i class="el-icon-menu"></i>Tag</el-menu-item>
          <el-menu-item index="4" :route="{path: '/dashboard/topic'}"><i class="el-icon-menu"></i>Topic</el-menu-item>
          <el-menu-item index="5" :route="{path: '/dashboard/profile'}"><i class="el-icon-setting"></i>Profile</el-menu-item>
          <el-menu-item index="6" :route="{path: '/dashboard/settings'}"><i class="el-icon-setting"></i>Settings</el-menu-item>
          <el-button size="small" class="back-btn" @click="$router.push({name: 'Home'})">Back To Site</el-button>
        </el-menu>
      </el-col>
      <!--<el-col :span="6">
        list-bar
      </el-col>-->
      <el-col :span="21">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { Menu, MenuItem, Row, Col, Button } from 'element-ui';

  Vue.use(Menu);
  Vue.use(MenuItem);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Button);

  export default {
    created() {
      this.$store.commit('HIDDEN_NAV');
      this.setOvz();
    },
    destroyed() {
      this.$store.commit('SHOW_NAV');
      this.unsetOvz();
    },
    activated() {
      this.setOvz();
      this.$store.commit('HIDDEN_NAV');
    },
    deactivated() {
      this.$store.commit('SHOW_NAV');
      this.unsetOvz();
    },
    methods: {
      setOvz() {
        const bodyEle = document.querySelector('body');
        bodyEle.style.overflow = 'hidden';
      },
      unsetOvz() {
        const bodyEle = document.querySelector('body');
        bodyEle.style.overflow = 'auto';
      },
    },
  };
</script>

<style lang="scss" >
@import '~styles/mixins';
#dashboard {
  margin-top: -100px;
  .el-menu {
    min-height: 100vh;
  }
  .back-btn {
    margin-top: 80px;
    margin-left: 20px;
  }
}
</style>
