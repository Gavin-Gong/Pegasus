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
          <el-menu-item index="1" :route="{name: 'Home'}">Home</el-menu-item>
          <el-menu-item index="2" :route="{name: 'Topics'}">Topics</el-menu-item>
          <!--<el-menu-item index="3" :route="{name: 'Archive'}">Line</el-menu-item>-->
          <el-menu-item index="4" :route="{name: 'Tags'}">Tags</el-menu-item>
          <el-menu-item index="5" :route="{name: 'About'}">About</el-menu-item>
          <el-input
            @focus="showResult = true"

            class="search-bar"
            placeholder=""
            icon="search"
            v-model="search">
          </el-input>
        </el-menu>
      </transition>
      <!--<div class="search-result">
        <div class="result-inner">
          search
        </div>
      </div>-->
      <el-dialog v-model="showResult" title="Type and search">
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

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Dialog);
export default {
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

.search-result {
  top: 60px;
  position: fixed;
  height: 100vh;
  width: 100%;
  // z-index: 1000000;
  background: #ccc;
}
.result-list {
  margin-top: 30px;
}
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
