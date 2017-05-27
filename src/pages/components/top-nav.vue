<template>
  <div>
      <transition name="slidetop">
        <el-menu
          v-show="lg$"
          key="1"
          mode="horizontal"
          default-active="1"
          :router="true"
          :class="['top-nav', {'dark-mode': darkMode}, {fixed: isFixed}]">
          <el-menu-item index="6" :route="{name: 'Home'}" class="logo-wrapper">
            <!--<img class="pegasus-logo" src="~assets/images/pegasus_logo.png" alt="pegasus" style="height: 40px">-->
          </el-menu-item>
          <el-menu-item index="1" :route="{name: 'Home'}">
            <i class="iconfont icon-home"></i>主页</el-menu-item>
          <el-menu-item index="2" :route="{name: 'Topics'}">
            <i class="iconfont icon-topic"></i>专题</el-menu-item>
          <el-menu-item index="4" :route="{name: 'Tags'}">
            <i class="iconfont icon-tag"></i>标签</el-menu-item>
          <el-menu-item index="5" :route="{name: 'About'}">
            <i class="iconfont icon-profile"></i>关于我</el-menu-item>
          <ul class="op-bar dp-ib">
            <li @click="showResult = true">
                <i class="iconfont icon-search"></i>
            </li>
            <template v-if="isAuth">
              <li @click="$router.push({name: 'Write'})">
                <i class="iconfont icon-edit"></i>
              </li>
              <li @click="$router.push({name: 'DbOverview'})">
                  <i class="iconfont icon-dashboard"></i>
              </li>
            </template>
          </ul>
        </el-menu>
      </transition>
      <mu-appbar
        :z-depth="1"
        v-if="!lg$"
        :title="appBarTitle"
        key="2">
        <mu-icon-button @click="openDrawer" icon="menu" slot="left" touch />
        <mu-icon-button
          icon="search"
          slot="right"
          @click="showResult = true" touch />
      </mu-appbar>

    <mu-drawer
      :width="200"
      :open="showDrawer"
      :docked="false"
      @close="showDrawer = false" >
      <mu-list>
        <div class="profile">
          <img :src="profile.avatar" class="avatar">
          <h3>{{  profile.name }}</h3>
        </div>
        <mu-divider/>
        <mu-list-item title="主页" @click="routeTo({ name: 'Home' })">
          <i class="iconfont icon-home" slot="left"></i>
        </mu-list-item>
        <mu-list-item title="标签" @click="routeTo({ name: 'Tags' })">
          <i class="iconfont icon-tag" slot="left"></i>
        </mu-list-item>
        <mu-list-item title="专题" @click="routeTo({ name: 'Topics' })">
          <i class="iconfont icon-topic" slot="left"></i>
        </mu-list-item>
        <mu-list-item title="关于我" @click="routeTo({ name: 'About' })">
          <i class="iconfont icon-profile" slot="left"></i>
        </mu-list-item>
      </mu-list>
    </mu-drawer>

    <el-dialog v-model="showResult" title="输入并搜索" class="search-dialog">
      <el-input
        @change="searchArticle"
        autofocus
        v-model="searchField"></el-input>
        <ul class="result-list">
          <li v-show="!!resultList.length">
            共计  {{resultList.length}}条结果
          </li>
          <li v-for="item in resultList">
            <router-link :to="{name: 'Article', params: {id: item.id}}">
              <h3>{{ item.title }}</h3>
              <p>{{ item.body.trim() }}</p>
            </router-link>
          </li>
          <p v-show="!resultList.length">暂无结果</p>
        </ul>
    </el-dialog>
  </div>
</template>

<script>
import { Menu, MenuItem, Input, Dialog } from 'element-ui';
import { throttle } from 'lodash';
import screenMixin from 'mixins/screen';
import XIcon from 'components/Icon';

Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Dialog);

export default {
  components: {
    XIcon,
  },
  mixins: [screenMixin],
  created() {
    this.$store.dispatch('fetchProfile');
    // REVIEW:  throttle the event using requestAnimationFrame, setTimeout or customEvent
    let cache = null;
    window.addEventListener('scroll',
      this.throttle(() => {
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
      }, 500));
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
      showDrawer: false,
      appBarTitle: '主页',
    };
  },
  methods: {
    openDrawer() {
      this.showDrawer = true;
    },
    searchArticle() {
      this.$store.dispatch('searchArticle', {
        q: this.searchField.trim(),
      }).then((data) => {
        console.log(data);
      });
    },
    routeTo(obj) {
      this.$router.push(obj);
      this.showDrawer = false;
    },
  },
  computed: {
    isShow() {
      return this.$store.state.global.showNav;
    },
    resultList() {
      return this.$store.state.article.result;
    },
    profile() {
      return this.$store.state.profile.data;
    },
    isAuth() {
      return this.$store.state.auth.isAuth;
    },
  },
  watch: {
    $route() {
      if (this.$route.name === 'Tags') {
        this.appBarTitle = '标签';
      } else if (this.$route.name === 'Topics') {
        this.appBarTitle = '专题';
      } else if (this.$route.name === 'About') {
        this.appBarTitle = '关于我';
      } else if (this.$route.name === 'Home') {
        this.appBarTitle = '主页';
      } else {
        this.appBarTitle = '';
      }
      this.showResult = false;
    },
  },
};
</script>

<style lang="scss">
@import '~styles/transitions';
@import '~styles/mixins';

.search-result {
  top: 60px;
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #ccc;
}
.search-dialog {
  @include res-to(xs) {
    .el-dialog {
      top: 0!important;
      width: 100%!important;
    }
  }
}
.el-dialog {
  @include res-to(xs) {
  }
}
.result-list {
  margin-top: 10px;
  p {
    text-align: center;
  }
  li {
    // margin-bottom: 20px;
    padding: 8px 0 14px;
    border-bottom: 1px solid #ddd;
    a {
      // color: #41B883;
      p {
        @include line-clamp(1);
      }
    }
  }
  h3 {
    // text-align: center;
    @include line-clamp(1);
    font-size: 18px;
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
    border-bottom-width: 2px!important;
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
      max-width: 20px;
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
.mu-icon-button {
  margin-right: 20px;
}
.mu-list {
  .mu-item.show-left {
    padding-left: 60px;
    min-height: 40px;
  }
  .iconfont {
    font-size: 24px;
    // margin-top: 2px;
  }
  .profile {
    text-align: center;
    margin: 16px auto 20px;
    .avatar {
      text-align: center;
      border-radius: 50%;
      max-width: 80px;
    }
  }
}
</style>
