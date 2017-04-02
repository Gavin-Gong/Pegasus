<template>
  <el-menu v-if="isShow" mode="horizontal" :class="['top-nav', {'dark-mode': darkMode}, {fixed: isFixed}]">
    <el-menu-item index="1-1">Home</el-menu-item>
    <el-menu-item index="1-2">Topics</el-menu-item>
    <el-menu-item index="1-3">Archives</el-menu-item>
    <el-menu-item index="1-4">Tags</el-menu-item>
    <el-menu-item index="1-5">About</el-menu-item>
    <el-input
      class="search-bar"
      placeholder=""
      icon="search"
      v-model="search">
    </el-input>
  </el-menu>  
  <!--<ul>
    <li>Home</li>
    <li>Topics</li>
    <li>Archives</li>
    <li>About</li>
  </ul>-->
</template>

<script>
import { Menu, MenuItem, Input } from 'element-ui';

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
export default {
  created() {
    let cache = null;
    window.addEventListener('scroll', () => {
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
.top-nav {
  border-bottom: 1px solid #ccc;
  z-index: 100;
  &.dark-mode {
    background: #333;
    li {
      color: #eee;
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
