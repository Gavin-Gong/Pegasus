<template>
  <div>
      <transition name="slidetop">
        <el-menu
          v-show="isShow"
          mode="horizontal"
          default-active="1"
          :router="true"
          :class="['top-nav', {'dark-mode': darkMode}, {fixed: isFixed}]">
          <!--:class="['top-nav', {'dark-mode': darkMode}, {fixed: isFixed}]">-->
          <el-menu-item index="1" :route="{name: 'Home'}" class="logo-wrapper">
            <img class="pegasus-logo" src="~assets/images/pegasus_logo.png" alt="pegasus" style="height: 40px">
          </el-menu-item>
          <el-menu-item index="1" :route="{name: 'Home'}">
            <i class="iconfont icon-home"></i>主页</el-menu-item>
          <el-menu-item index="2" :route="{name: 'Topics'}">
            <i class="iconfont icon-topic"></i>专题</el-menu-item>
          <!--<el-menu-item index="3" :route="{name: 'Archive'}">Line</el-menu-item>-->
          <el-menu-item index="4" :route="{name: 'Tags'}">
            <i class="iconfont icon-tag"></i>标签</el-menu-item>
          <el-menu-item index="5" :route="{name: 'About'}">
            <i class="iconfont icon-profile"></i>关于我</el-menu-item>
          <ul class="op-bar dp-ib">
            <li @click="showResult = true">
              <!--<x-icon
                type="search"
                color="#eee"
                size="lg"></x-icon>-->
                <i class="iconfont icon-search"></i>
            </li>
            <li @click="$router.push({name: 'Write'})">
              <!--<x-icon
                type="pencil"
                color="#eee"
                ize="lg"></x-icon>-->
              <i class="iconfont icon-edit"></i>
            </li>
            <li @click="$router.push({path: '/dashboard/post'})">
              <!--<x-icon
                type="tachometer"
                color="#eee"
                ize="lg"></x-icon>-->
                <i class="iconfont icon-dashboard"></i>
            </li>
          </ul>
        </el-menu>
      </transition>
      <el-dialog v-model="showResult" title="输入并搜索">
        <el-input
          @change="searchArticle"
          autofocus
          v-model="searchField"></el-input>
          <ul class="result-list">
            <li v-for="item in resultList">
              <router-link :to="{name: 'Article', params: {id: item.id}}">{{ item.title }}</router-link>
            </li>
          </ul>
      </el-dialog>
  </div>
</template>

<script>
import { Menu, MenuItem, Input, Dialog } from 'element-ui';
import { throttle } from 'lodash';
import XIcon from 'components/Icon';

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Dialog);

export default {
  components: {
    XIcon,
  },
  created() {

    // REVIEW:  throttle the event using requestAnimationFrame, setTimeout or customEvent
    // let cache = null;
    // window.addEventListener('scroll', () => {
    //   // console.log('nav scroll');
    //   this.throttle(() => {
    //     if (!cache) {
    //       cache = document.body.scrollTop;
    //     } else {
    //       if (document.body.scrollTop > cache) {
    //         this.isShow = false;
    //       } else {
    //         this.isShow = true;
    //       }
    //       cache = document.body.scrollTop;
    //     }
    //     if (document.body.scrollTop > 30) {
    //       this.darkMode = false;
    //       // this.isFixed = true;
    //     } else {
    //       this.darkMode = true;
    //     }
    //   }, 500);
    // });


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
      throttle,
      showResult: false,
      searchField: '',
    };
  },
  methods: {
    searchArticle() {
      this.$store.dispatch('searchArticle', {
        q: this.searchField.trim(),
      }).then((data) => {
        console.log(data);
      });
    },
  },
  computed: {
    isShow() {
      return this.$store.state.global.showNav;
    },
    resultList() {
      return this.$store.state.article.result;
    },
  },
  watch: {
    $route() {
      this.showResult = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~styles/transitions';
@import '~styles/mixins';

.search-result {
  top: 60px;
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #ccc;
}
.result-list {
  margin-top: 30px;
  li {
    margin-bottom: 20px;
    @include line-clamp(1);
  }
}
.top-nav {
  border-bottom: 1px solid #ccc;
  z-index: 30;
  @include res-to(1366) {
  }
  .el-menu-item.is-active {
    border-bottom-color: #41B883;
  }
  .el-menu-item {
    // &:hover {
    //   border-bottom: none!important;
    // }
    // &:active {
    //   border-bottom: none!important;
    // }
  }
  .iconfont {
    font-size: 18px;
    margin: 0 4px;
  }
  .icon-home {
    font-size: 16px;
  }
  .logo-wrapper {
    .pegasus-logo {
      margin-left: 20px;
      margin-top: 10px;
    }
    &:hover {
      border-bottom: none!important;
    }
    border: none!important;
  }
  .op-bar {
    @include res-to(xs) {
      display: none;
    }
    float: right;
    margin-right: 40px;
    margin-top: 15px;
    @include reset-list;
    i {
      margin-left: 20px;
      cursor: pointer;
    }
  }
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
