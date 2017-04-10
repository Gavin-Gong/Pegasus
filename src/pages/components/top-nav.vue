<template>
  <transition name="slidetop">
    <el-menu
      v-show="isShow"
      mode="horizontal"
      default-active="1"
      :router="true"
      :class="['top-nav', {'dark-mode': darkMode}, {fixed: isFixed}]">
      <el-menu-item index="1" :route="{name: 'Home'}">Home</el-menu-item>
      <el-menu-item index="2" :route="{name: 'Topics'}">Topics</el-menu-item>
      <!--<el-menu-item index="3" :route="{name: 'Archive'}">Line</el-menu-item>-->
      <el-menu-item index="4" :route="{name: 'Tags'}">Tags</el-menu-item>
      <el-menu-item index="5" :route="{name: 'About'}">About</el-menu-item>
      <el-input
        class="search-bar"
        placeholder=""
        icon="search"
        v-model="search">
      </el-input>
    </el-menu>
  </transition>
</template>

<script>
import { Menu, MenuItem, Input } from 'element-ui';

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
export default {
  created() {
    // REVIEW:  throttle the event using requestAnimationFrame, setTimeout or customEvent
    let cache = null;
    window.addEventListener('scroll', () => {
      // console.log('nav scroll');
      if (!cache) {
        cache = document.body.scrollTop;
      } else {
        if (document.body.scrollTop > cache) {
          this.isShow = false;
        } else {
          this.isShow = true;
        }
        cache = document.body.scrollTop;
      }
      if (document.body.scrollTop > 30) {
        this.darkMode = false;
        // this.isFixed = true;
      } else {
        this.darkMode = true;
      }
    });
  },
  data() {
    return {
      search: '',
      classList: [
        'top-nav',
        { 'dark-mode': false },
      ],
      darkMode: true,
      isFixed: true,
      isShow: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/transitions';

.top-nav {
  border-bottom: 1px solid #ccc;
  z-index: 10001;
  &.dark-mode {
    background: #333;
    li {
      color: #eee;
    }
    .el-menu-item:hover {
      color: #eee;
      background: #444;
    }
  }
  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
