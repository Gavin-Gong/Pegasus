<template>
  <div id="dashboard">
    <el-row>
      <el-col :span="3">
        <el-menu default-active="1" theme="dark" router>
          <el-menu-item index="1" :route="{name: 'DbOverview'}">
            <i class="el-icon-menu" ></i>统计</el-menu-item>
          <el-menu-item index="2" :route="{path: '/dashboard/post/0'}">
            <i class="iconfont icon-article"></i>文章</el-menu-item>
          <el-menu-item index="3" :route="{path: '/dashboard/tag/0'}">
            <i class="iconfont icon-tag"></i>标签</el-menu-item>
          <el-menu-item index="4" :route="{path: '/dashboard/topic/0'}">
            <i class="iconfont icon-topic"></i>专题</el-menu-item>
          <el-menu-item index="5" :route="{path: '/dashboard/profile'}">
            <i class="iconfont icon-user"></i>资料</el-menu-item>
          <!--<el-menu-item index="6" :route="{path: '/dashboard/settings'}">
            <i class="iconfont icon-settings"></i>设置</el-menu-item>-->
          <el-button size="small" class="back-btn" @click="$router.push({name: 'Home'})">
            返回网站
            <i class="iconfont icon-arrowright"></i></el-button>
        </el-menu>
      </el-col>
      <!--<el-col :span="6">
        list-bar
      </el-col>-->
      <el-col :span="21" class="right-view">
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
  // height: 100vh;
  box-sizing: border-box;
  // overflow: hidden;
  .el-menu {
    min-height: 100vh;
    li {
      .iconfont {
        margin-right: 14px;
        font-size: 24px;
        vertical-align: middle;
      }
      .el-icon-menu {
        font-size: 18px;
        margin-right: 18px;
        margin-left: 2px;
      }
    }
  }
  .back-btn {
    margin-top: 80px;
    margin-left: 20px;
  }
  .right-view {
    height: 100vh;
    overflow: hidden;
  }
}
</style>
