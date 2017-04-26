<template>
  <div id="dashboard">
    <el-row>
      <el-col :span="3">
        <el-menu default-active="2" theme="dark">
          <el-menu-item index="1"><i class="el-icon-menu"></i>Statistics</el-menu-item>
          <el-menu-item index="2"><i class="el-icon-menu"></i>Posts</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-menu"></i>Tag</el-menu-item>
          <el-menu-item index="4"><i class="el-icon-menu"></i>Topic</el-menu-item>
          <el-menu-item index="5"><i class="el-icon-setting"></i>Profile</el-menu-item>
          <el-menu-item index="6"><i class="el-icon-setting"></i>Settings</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="6">
        list-bar
      </el-col>
      <el-col :span="15">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { Menu, MenuItem, Row, Col } from 'element-ui';

  Vue.use(Menu);
  Vue.use(MenuItem);
  Vue.use(Row);
  Vue.use(Col);

  export default {
    created() {
      this.$store.commit('HIDDEN_NAV');
    },
    destroyed() {
      this.$store.commit('SHOW_NAV');
    },
    activated() {
      this.$store.commit('HIDDEN_NAV');
    },
    deactivated() {
      this.$store.commit('SHOW_NAV');
    },
  };
</script>

<style lang="scss" >
@import '~styles/mixins';
#dashboard {
  margin-top: -100px;
}
</style>
